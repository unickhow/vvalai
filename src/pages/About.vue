<template>
  <section>
    About page

    <p>store count double: {{ counter.getCountDouble }}</p>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useCounter } from '../stores/counter'

useHead({
  // Can be static or computed
  title: 'About page | Van',
  meta: [
    {
      name: 'description',
      content: 'This is van about page.'
    }
  ]
})

const counter = useCounter()
</script>
