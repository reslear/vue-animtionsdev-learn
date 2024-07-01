import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: [
        {
          // src: 'src/lessons',
          src: 'src/lessons',
          extensions: ['.page.vue'],
        },
      ],
      // logs: true,
    }),
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          '@vueuse/motion': [
            'reactiveStyle',
            'reactiveTransform',
            'useElementStyle',
            'useElementTransform',
            'useMotion',
            'useMotionControls',
            'useMotionProperties',
            'useMotions',
            'useMotionTransitions',
            'useMotionVariants',
            'useSpring',
            'useReducedMotion',
          ],
        },
      ],
    }),
    Components({
      resolvers: [
        // example of importing Vant
        (componentName) => {
          // where `componentName` is always CapitalCase
          if (['Motion', 'MotionGroup'].includes(componentName))
            return { name: componentName, from: '@vueuse/motion' }
        },
      ],
    }),
    vueDevTools(),
  ],
})
4
