<template>
  <div class="wrapper">
    <button class="button" @click="toggleAnimate()">Animate</button>
    <div ref="box" class="element"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useSpring, useMotionProperties } from '@vueuse/motion'
import { useToggle } from '@vueuse/core'

const box = ref<HTMLElement | null>(null)
const { motionProperties } = useMotionProperties(box, {
  scale: 1,
  y: 0,
})

const { set, stop } = useSpring(motionProperties)

const [shouldAnimate, toggleAnimate] = useToggle(false)

watch(shouldAnimate, (value) => {
  set(
    value
      ? {
          scale: 1.5,
          y: -40,
        }
      : {
          scale: 1,
          y: 0,
        }
  )
})
</script>

<style>
.wrapper {
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center;
}

.element {
  width: 48px;
  height: 48px;
  background: #fad658;
  border-radius: 12px;
}

.button {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
}
</style>
