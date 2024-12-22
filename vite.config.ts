import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        {
          // src: 'src/lessons',
          src: 'src/modules',
          extensions: ['.page.vue'],
        },
      ],
      // logs: true,
    }),
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'motion-v': [],
        },
      ],
    }),
    Components({
      resolvers: [
        (componentName) => {
          if (
            [
              'Motion',
              'MotionGroup',
              'AnimatePresence',
              'LayoutGroup',
            ].includes(componentName)
          )
            return { name: componentName, from: 'motion-v' }
        },
      ],
    }),
    vueDevTools(),
    tailwindcss(),
  ],
})
4
