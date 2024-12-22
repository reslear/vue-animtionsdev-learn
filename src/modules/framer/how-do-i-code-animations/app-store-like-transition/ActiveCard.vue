<script lang="ts" setup>
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { Card } from './cards'

defineProps<{ card: Card }>()
const emit = defineEmits(['close'])

const cardRef = ref(null)

onClickOutside(cardRef, () => {
  emit('close')
})
</script>

<template>
  <Motion
    :layoutId="`card-${card.id}`"
    class="card card-active"
    :style="{ borderRadius: '0px' }"
    ref="cardRef"
  >
    <div class="card-inner">
      <Motion
        :layoutId="`image-${card.id}`"
        :src="card.image"
        alt="image"
        :style="{ borderRadius: '0px' }"
        as="img"
      />
      <Motion
        :layoutId="`close-button-${card.id}`"
        class="close-button"
        aria-label="Close button"
        @click="emit('close')"
        as="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          height="20"
          width="20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Motion>
      <Motion
        :layoutId="`card-content-${card.id}`"
        class="card-content active-card-content"
      >
        <div class="card-text">
          <Motion
            :layoutId="`card-heading-${card.id}`"
            class="card-heading"
            as="h2"
          >
            Game of the day
          </Motion>
        </div>
        <Motion
          :layoutId="`card-extra-info-${card.id}`"
          class="extra-info"
          :style="{
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          }"
        >
          <Motion
            :src="card.logo"
            width="40"
            height="40"
            alt="play"
            :layoutId="`card-game-image-${card.id}`"
            class="rounded-lg"
            as="img"
          />
          <div class="desc-wrapper">
            <Motion
              :layoutId="`card-game-title-${card.id}`"
              class="game-title"
              as="span"
            >
              {{ card.title }}
            </Motion>
            <Motion
              :layoutId="`card-game-subtitle-${card.id}`"
              class="game-subtitle"
              as="span"
            >
              {{ card.description }}
            </Motion>
          </div>
          <Motion
            :layoutId="`card-button-${card.id}`"
            class="get-button"
            as="button"
          >
            Get
          </Motion>
        </Motion>
      </Motion>
    </div>

    <Motion
      :layoutId="`card-long-description-${card.id}`"
      class="long-description"
    >
      <p><b>Are you ready?</b> {{ card.longDescription }}</p>
      <p>
        <b>The never ending adventure </b>
        In this game set in a fairy tale world, players embark on a quest
        through mystical lands filled with enchanting forests and towering
        mountains. Players can explore the world, build their own viking
      </p>
    </Motion>
  </Motion>
</template>
