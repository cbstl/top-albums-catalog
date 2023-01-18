<script setup lang="ts">
  import Album from '../components/Album.vue';
  import axios from 'axios'
  import { request } from 'http';

  let itunesError = null;

  async function getItunesData() {
    try {
      const itunesRequest = await axios.get(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
      )
      return itunesRequest.data;
    } catch (error) {
      console.log('error retrieving itunes data', error);
      itunesError = error;
    }
  }

  const itunesData = await getItunesData();
  const entries = itunesData.feed.entry;

  const albums = entries.map(entry => {
    return { 
      id: entry.id.attributes["im:id"],
      title: entry.title.label,
      artist: entry["im:artist"].label
    }
  })

  console.log('albums', albums)
</script>

<template>
  <main>
    <Album
      v-for="album in albums"
      v-bind:id="album.id"
      v-bind:title="album.title"
      v-bind:artist="album.artist"
    ></Album>
  </main>
</template>