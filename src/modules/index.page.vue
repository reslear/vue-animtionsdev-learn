<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'
</script>

<template>
  <h1>All lessons page</h1>
  <div class="p-4">
    <NavLinkGroup :routes="routes" />
  </div>
</template>
