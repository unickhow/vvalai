<template>
  <main class="mt-[5rem]">
    <div class="container mx-auto">
      <h1 class="flex items-center justify-center">
        <i class="text-5xl i-carbon-chat-bot mr-2 color-[#ff7800]"></i>
        <b>VAN starter template</b>
      </h1>
      <HelloWorld class="mb-16" slogan="Focus on idea instead scaffolding." />

      <div class="text-center mb-16">
        <h2 class="flex items-center justify-center color-[#2E4052]">
          <i class="i-carbon-tool-box mr-2"></i>
          <b>Prepacks</b>
        </h2>
        <div class="flex flex-wrap justify-center">
          <a
            v-for="pack in prepacks"
            :key="pack.name"
            class="p-2 decoration-none opacity-50 hover:opacity-100 hover:font-bold transition-opacity"
            :style="{ color: pack.brandColor }"
            :href="pack.url"
            target="_blank">{{ pack.name }}</a>
        </div>
      </div>

      <div class="text-center">
        <div class="inline-flex mb-8">
          <router-link to="/" class="page-link px-4 color-[#078abc] underline-none decoration-none">Home</router-link>
          <router-link to="/about" class="page-link px-4 color-[#078abc] underline-none decoration-none">About</router-link>
        </div>
        <div class="shadow bg-[#fff] py-12">
          <router-view />
        </div>
      </div>

      <div class="text-center flex justify-center mt-20">
        <a
          href="https://github.com/unickhow"
          class="i-carbon-logo-github text-5 transition-colors color-[#666] hover:color-[#333]"></a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const prepacks = ref([
  {
    name: 'Vite',
    url: 'https://vitejs.dev/',
    brandColor: '#bd35fe'
  },
  {
    name: 'Vue 3',
    url: 'https://vuejs.org/',
    brandColor: '#42b883'
  },
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    brandColor: '#3178c6'
  },
  {
    name: 'Unocss',
    url: 'https://unocss.antfu.me/',
    brandColor: '#888'
  },
  {
    name: 'Carbon Icons',
    url: 'https://icon-sets.iconify.design/carbon/',
    brandColor: '#000'
  }
])
</script>

<style>
html, body {
  background: #fafafa;
}
</style>

<style scoped>
h1 b {
  background: -webkit-linear-gradient(45deg, #FF7800, #2E4052);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-link.router-link-active {
  @apply font-bold;
}
</style>
