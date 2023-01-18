<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>DJ Japan Rabbit</h1>
  </header>
  <Suspense>
    <template #default>
    <RouterView />
    </template>
    <template #fallback>
      Loading, please wait...
    </template>
  </Suspense>
</template>

<style scoped>
</style>
