<template>
  <section>
    Home page

    <p>store count: {{ counter.count }}</p>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useCounter } from '../stores/counter'

useHead({
  // Can be static or computed
  title: 'Home page | VValai',
  meta: [
    {
      name: 'description',
      content: 'This is VValai home page.'
    }
  ]
})

const counter = useCounter()
</script>
