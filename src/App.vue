<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { onClickOutside, useToggle } from '@vueuse/core'
import { HeroProvider } from 'hero-motion'

const router = useRouter()
const isDisplaySide = ref(false)
const toggleSide = useToggle(isDisplaySide)

const aside = ref(null)
onClickOutside(aside, () => toggleSide(false), {
  capture: false,
})

console.log(routes)
</script>

<template>
  <HeroProvider :transition="{ type: 'keyframes' }">
    <aside ref="aside" class="aside" v-show="isDisplaySide">
      <div class="menu">
        <template v-for="{ path, name } in routes">
          <a
            class="menu-link"
            :href="path"
            @click.prevent="router.push({ path })"
            >{{ name ?? path }}</a
          >
        </template>
      </div>
    </aside>

    <button
      class="burder-button"
      :class="isDisplaySide ? 'active' : ''"
      type="button"
      @click.stop="toggleSide()"
    >
      <template v-if="isDisplaySide">✕</template>
      <template v-else>☰</template>
    </button>

    <div><RouterView /></div>
  </HeroProvider>
</template>

<style scoped>
.aside {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.1);
  padding: 5px 0;
  z-index: 1;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
  padding: 8px;
  .menu-link {
    font-size: 14px;
    display: block;
  }
}

.burder-button {
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 2;
  opacity: 0.1;
  width: 32px;
  height: 32px;
  text-align: center;
  font-size: small;
  &:hover,
  &:active,
  &.active {
    opacity: 1;
  }
}
</style>
