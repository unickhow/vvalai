<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <p class="text-center text-lg font-bold color-[#757575]">{{ msg }}</p>
    <small class="block text-center">X: {{ x }}, Y: {{ y }}</small>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
