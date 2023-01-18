<script lang="ts">
  import { defineComponent, ref } from "vue";
  import axios from 'axios';
  import Album from '../components/Album.vue';

  interface Album {
    id: number,
    title: string,
    artist: string
  }

  interface AlbumListSetup {
    albums: Album[],
    sortByArtist: void,
    sortByTitle: void,
    sortByRating: void
  }

  export default defineComponent({
    components: {
      Album
    },
    async setup() {
      // initialize list of albums to iterate over
      const albums = ref(await createAlbumList()) as Array<Album>;

      // orders albums by artist alphabetically
      const sortByArtist = function (this: AlbumListSetup) {
        this.albums = this.albums.sort((a1: Album, a2: Album) => {
          return a1.artist < a2.artist ? -1 : 1;
        });
      }
      
      // orders albums by title alphabetically
      const sortByTitle = function(this: AlbumListSetup) {
        this.albums = this.albums.sort((a1: Album, a2: Album) => {
          return a1.title < a2.title ? -1 : 1;
        })
      }
      
      // reverts back to original album list from api
      const sortByRating = function(this: AlbumListSetup) {
        this.albums = this.albums.sort((a1: Album, a2: Album) => {
          return a1.id < a2.id ? -1 : 1;
        })
      }
      return { albums, sortByArtist, sortByTitle, sortByRating }
    }
  })

  // retrieves up to 100 top rated albums from apple itunes api
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

  // formats album data into array for Album component
  async function createAlbumList() {
    const itunesData = await getItunesData();
    const entries = itunesData.feed.entry;
    return entries.map((entry, index) => {
      return {
        id: index,
        title: entry["im:name"].label,
        artist: entry["im:artist"].label
      }
    })
  }
</script>

<template>
  <main>
    <div id="sort-buttons">
      <p>Here are today's top 100 iTunes albums! Feel free to <i>sort</i> through them :)</p>
      <div class="btn-group">
        <button @click="sortByArtist" type="button" class="btn btn-success btn-rounded">Sort by Artist A-Z</button>
        <button @click="sortByTitle" type="button" class="btn btn-success btn-rounded">Sort by Title A-Z</button>
        <button @click="sortByRating" type="button" class="btn btn-success btn-rounded">Sort by Rating</button>
      </div>
    </div>
    <br/>
    <Album
      v-for="album in albums"
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