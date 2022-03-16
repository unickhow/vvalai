<template>
  <section>
    About page

    <p>store count double: {{ counter.getCountDouble }}</p>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '../stores/counter'

const counter = useCounter()
</script>
