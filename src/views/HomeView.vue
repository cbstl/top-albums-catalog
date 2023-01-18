<script setup lang="ts">
  import { computed } from 'vue';
  import Album from '../components/Album.vue';
  import axios from 'axios'

  async function getItunesData() {
    try {
      const itunesRequest = await axios.get(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
      )
      return itunesRequest.data;
    } catch (error) {
      console.log('error retrieving itunes data', error);
      throw error;
    }
  }

  const sortArtist = computed(() => {
    return albums.sort((a1, a2) => a1.artist > a2.artist);
  });

  const sortTitle = computed(() => {
    return albums.sort((a1, a2) => a1.title > a2.title);
  });

  const itunesData = await getItunesData();
  const entries = itunesData.feed.entry;

  let albums = entries.map(entry => {
    return { 
      id: entry.id.attributes["im:id"],
      title: entry["im:name"].label,
      artist: entry["im:artist"].label
    }
  })

  console.log('albums', albums)
</script>

<template>
  <main>
    <div id="sort-buttons">
      <p>Here are today's top {{ albums.length }} iTunes albums! Feel free to <i>sort</i> through them :)</p>
      <div class="btn-group">
        <button @click="sortArtist" type="button" class="btn btn-success btn-rounded">Sort Artist A-Z</button>
        <button @click="sortTitle" type="button" class="btn btn-success btn-rounded">Sort Title A-Z</button>
      </div>
    </div>
    <br/>
    <Album
      v-for="album in albums"
      v-bind:id="album.id"
      v-bind:title="album.title"
      v-bind:artist="album.artist"
    ></Album>
  </main>
</template>

<style scoped>
#sort-buttons {
  text-align: center;
}
</style>