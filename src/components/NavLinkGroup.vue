<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineProps<{
  routes: RouteRecordRaw[]
  route?: RouteRecordRaw
}>()
</script>

<template>
  <ul class="nav-ul">
    <template v-for="item in routes" :key="item.path">
      <li class="nav-li">
        <NavLink v-if="item.name" :path="item.path" :name="item.name" />
        <span v-else>{{ item.path }}</span>
      </li>

      <template v-if="item.children?.length">
        <NavLinkGroup :routes="item.children" />
      </template>
    </template>
  </ul>
</template>

<style>
.nav-ul {
  margin-left: 1rem;
  list-style: circle;
}

.nav-li {
  a {
    color: blue;
  }
}
</style>
