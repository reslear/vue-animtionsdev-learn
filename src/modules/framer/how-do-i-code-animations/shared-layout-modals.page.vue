<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import GAMES from '../../../assets/games.json'
type Game = (typeof GAMES)[0]

const activeGame = ref<Game | null>(null)
const containerEl = ref<HTMLElement | null>(null)

// Handle clicks outside
onClickOutside(containerEl, () => {
  activeGame.value = null
})

// handle escape key
useEventListener(document, 'keydown', (e) => {
  if (e.key === 'Escape') {
    activeGame.value = null
  }
})
</script>

<template>
  <AnimatePresence>
    <Motion
      v-show="activeGame"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      class="overlay"
    />
  </AnimatePresence>

  <AnimatePresence v-if="activeGame">
    <div class="active-game">
      <Motion
        :layout-id="`card-${activeGame.id}`"
        class="inner"
        :style="{ borderRadius: '12px' }"
        ref="containerEl"
      >
        <div class="header">
          <Motion
            as="img"
            :layout-id="`image-${activeGame.id}`"
            :src="activeGame.image"
            alt="Game"
            height="56"
            width="56"
            :style="{ borderRadius: '12px' }"
          />
          <div class="header-inner">
            <div class="content-wrapper">
              <Motion
                as="h2"
                :layout-id="`title-${activeGame.id}`"
                class="game-title"
              >
                {{ activeGame.title }}
              </Motion>
              <Motion
                as="p"
                :layout-id="`description-${activeGame.id}`"
                class="game-description"
              >
                {{ activeGame.description }}
              </Motion>
            </div>
            <Motion
              as="button"
              :layout-id="`button-${activeGame.id}`"
              class="button"
            >
              Get
            </Motion>
          </div>
        </div>
        <Motion
          :layout="true"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0, transition: { duration: 0.05 } }"
          class="long-description"
        >
          {{ activeGame.longDescription }}
        </Motion>
      </Motion>
    </div>
  </AnimatePresence>

  <ul class="list">
    <Motion
      as="li"
      class="game-item"
      v-for="game in GAMES"
      :key="game.id"
      :layout-id="`card-${game.id}`"
      :style="{ borderRadius: '8px' }"
      @click="activeGame = game"
    >
      <Motion
        as="img"
        :layout-id="`image-${game.id}`"
        :src="game.image"
        alt="Game"
        width="56"
        height="56"
        :style="{ borderRadius: '12px' }"
      />
      <div class="game-wrapper">
        <div class="content-wrapper">
          <Motion as="h2" :layout-id="`title-${game.id}`" class="game-title">
            {{ game.title }}
          </Motion>
          <Motion
            as="p"
            :layout-id="`description-${game.id}`"
            class="game-description"
          >
            {{ game.description }}
          </Motion>
        </div>
        <Motion as="button" :layout-id="`button-${game.id}`" class="button">
          Get
        </Motion>
      </div>
    </Motion>
  </ul>
</template>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.list {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 48px 0;
}

.list li {
  display: flex;
  width: 386px;
  cursor: pointer;
  align-items: center;
  gap: 16px;
  padding: 0;
}

.game-wrapper {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d4d6d861;
}

.list li:last-of-type .game-wrapper {
  border: none;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}

.active-game .content-wrapper {
  padding: 0;
}

.game-title {
  font-size: 14px;
  font-weight: 500;
}

.game-description {
  font-size: 14px;
  color: #63635d;
}

.button {
  border-radius: 9999px;
  background: #f1f0ef;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #007aff;
}

.active-game {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 10;
}

.active-game .inner {
  display: flex;
  height: fit-content;
  width: 500px;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
  background: white;
  padding: 16px;
}

.header {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
}

.header-inner {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.long-description {
  font-size: 14px;
  color: #63635d;
}

.overlay {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
}
</style>
