<script lang="ts" setup>
const [showSecond, toggleShowSecond] = useToggle(false)
</script>

<template>
  <div class="wrapper">
    <button class="button" @click="toggleShowSecond()">Animate</button>

    <Motion
      v-if="showSecond"
      :layout="true"
      class="element"
      layout-id="rectangle"
    />
    <Motion
      v-else
      :layout="true"
      layout-id="rectangle"
      class="second-element"
    />
  </div>
</template>

<style scoped>
@import 'tailwindcss/theme' theme(reference);

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

.second-element {
  height: 96px;
  width: 96px;
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
