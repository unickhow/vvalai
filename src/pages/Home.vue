<template>
  <section>
    Home page

    <p>store count: {{ counter.count }}</p>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '../stores/counter'

const counter = useCounter()
</script>
