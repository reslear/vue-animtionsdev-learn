<script lang="ts" setup>
import { Hero } from 'hero-motion'

const [showSecond, toggleShowSecond] = useToggle(false)
</script>

<template>
  <div class="wrapper">
    <button layout class="button" @click="toggleShowSecond()">Animate</button>

    <div
      :style="{
        width: showSecond ? '96px' : '48px',
        height: showSecond ? '96px' : '48px',
      }"
    >
      <Hero
        as="div"
        v-if="showSecond"
        layout-id="rectangle"
        class="second-element"
      />
      <Hero v-else as="div" layout-id="rectangle" class="element" />
    </div>
  </div>
</template>

<style>
.wrapper {
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
}

.element {
  width: 48px;
  height: 48px;
  background: #fad658;
  border-radius: 12px;
}

.second-element {
  height: 96px;
  width: 96px;
  background: #2dd4bf;
  border-radius: 24px;
}

.button {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  background: white;

  @apply text-neutral-900;
}
</style>
