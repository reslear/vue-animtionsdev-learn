<script setup lang="ts">
const props = defineProps<{
  name?: any
  path?: any
}>()
</script>

<template>
  <RouterLink :to="{ name }" :title="name">{{ path }}</RouterLink>
</template>
