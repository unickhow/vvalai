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
        <p>{{ prepacks.join(', ') }}</p>
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
  'Vite',
  'Vue 3',
  'Typescript',
  'Unocss',
  'Carbon Icons',
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
