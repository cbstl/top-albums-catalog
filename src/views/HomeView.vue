<script lang="ts">
  import { defineComponent } from 'vue';
  import AlbumList from '../components/AlbumList.vue';
  export default defineComponent({
    components: {
      AlbumList
    }
  })
</script>

<template>
  <main>
    <AlbumList />
  </main>
</template>