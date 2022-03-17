<template>
  <p class="text-center text-lg font-bold color-[#757575]">{{ slogan }}</p>
  <small class="block text-center">X: {{ x }}, Y: {{ y }}</small>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()

defineProps<{ slogan: string }>()
const count = ref(0)
</script>

<style scoped>
</style>
