<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Top Album Catalog</h1>
  </header>
  <br/>
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
h1 {
  text-align: center;
  font-weight: bold;
}
</style>
