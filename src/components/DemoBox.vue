<script setup lang="ts">
defineProps({
  text: String,
})

const emit = defineEmits(['replay'])

const [visible, toggleVisible] = useToggle(true)

async function replay() {
  toggleVisible()

  emit('replay')

  await nextTick()
  toggleVisible()
}
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-xl border-1 border-zinc-800 bg-neutral-900 p-4 shadow-2xl"
  >
    <div class="flex h-full w-full min-h-[280px] justify-center items-center">
      <slot />
    </div>
  </div>
</template>
