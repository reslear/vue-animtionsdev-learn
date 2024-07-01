<script lang="ts" setup>
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

<template>
  <div class="wrapper">
    <button class="button" @click="toggleAnimate()">Animate</button>
    <div ref="box" class="element"></div>
  </div>
</template>

<style>
.wrapper {
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  @apply gap-20;
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
  background: white;

  @apply text-neutral-900;
}
</style>
