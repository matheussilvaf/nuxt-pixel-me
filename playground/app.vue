<template>
  <div>Nuxt module playground!</div>
</template>

<script setup lang="ts">
const { $pixelMe } = useNuxtApp()

$pixelMe.track('Lead')
</script>
