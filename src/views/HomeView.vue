<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useCounterStore } from '../stores/counter'

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

const counter = useCounterStore()
</script>

<template>
  <section>
    Home page

    <p>store count: {{ counter.count }}</p>
  </section>
</template>
