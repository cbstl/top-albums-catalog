<script lang="ts">
  import { defineComponent, ref } from "vue";
  import axios from 'axios';
  import Album from '../components/Album.vue';
  const ITUNES_API_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  interface Album {
    id: number,
    title: string,
    artist: string
  }

  interface AlbumListSetup {
    albums: Album[],
    searchTerm: string,
    sortByArtist: void,
    sortByTitle: void,
    sortByRating: void
  }

  interface ItunesEntry {
    "im:name": EntryObj,
    "im:artist": EntryObj
  }

  interface EntryObj {
    label: string
  }

  export default defineComponent({
    components: {
      Album
    },
    props: {
      albums: Array<Album>,
      searchTerm: String
    },
    async setup(props) {
      // initialize data
      const createdAlbums = await createAlbumList();
      const albums = ref(props.albums ? props.albums : createdAlbums) as Array<Album>;
      const searchTerm = props.searchTerm;

      // search for artist or album
      const searchForTerm = async function (this: AlbumListSetup, theSearchTerm: string) {
        if (!theSearchTerm) {
          this.albums = await createAlbumList();
        } else {
          const upperSearchTerm = theSearchTerm.toUpperCase();
          this.albums = this.albums.filter(album => 
            album.artist.toUpperCase().includes(upperSearchTerm)
            || album.title.toUpperCase().includes(upperSearchTerm)
          );
        }
      }

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

      return { albums, searchTerm, searchForTerm, sortByArtist, sortByTitle, sortByRating }
    }
  })

  // retrieves up to 100 top rated albums from apple itunes api
  async function getItunesData() {
    try {
      const itunesRequest = await axios.get(
        ITUNES_API_URL
      );
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
    return entries.map((entry: ItunesEntry, index: Number) => {
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
    <div id="navigation">
      <p>Here are today's top {{albums.length}} iTunes albums! Feel free to <i>sort</i> through them :)</p>
      <div class="btn-group">
        <button @click="sortByArtist" type="button" class="btn btn-success btn-rounded">Sort by Artist A-Z</button>
        <button @click="sortByTitle" type="button" class="btn btn-success btn-rounded">Sort by Title A-Z</button>
        <button @click="sortByRating" type="button" class="btn btn-success btn-rounded">Sort by Rating</button>
      </div>
      <br/><br/>
      <div class="input-group">
          <div class="form-outline">
            <table>
            <tr>
              <td>
                <input v-model="searchTerm" type="search" placeholder="Search artist or title" id="search-input" class="form-control" />
              </td>
              <td>
                <button @click="searchForTerm(searchTerm)" type="button" id="search-button" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </td>
            </tr>
            </table>
          </div>
        </div>
    <p>Click righthand button to search. Searching empty will revert to original list.</p>
    </div>
    <br/>
    <Album
      v-for="album, index in albums"
      v-bind:id="'num-'+index"
      v-bind:title="album.title"
      v-bind:artist="album.artist"
    ></Album>
  </main>
</template>

<style scoped>
#navigation {
  text-align: center;
}

.form-outline {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>