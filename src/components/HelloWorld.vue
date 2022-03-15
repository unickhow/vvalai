<template>
  <p class="text-center text-lg font-bold color-[#757575]">{{ slogan }}</p>
</template>

<script setup lang="ts">
defineProps<{ slogan: string }>()

const count = ref(0)
</script>

<style scoped>
</style>
