<script setup lang="ts">
  //import axios from 'axios'

  const albums = [
    {
      "im:name": {
          "label": "Episode 41 - Thor’s Angels"
      },
      "im:image": [
          {
              "label": "https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/46/04/15/46041510-d51e-a612-adf1-f1b2ae8be388/859714807661_cover.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/46/04/15/46041510-d51e-a612-adf1-f1b2ae8be388/859714807661_cover.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/46/04/15/46041510-d51e-a612-adf1-f1b2ae8be388/859714807661_cover.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "1"
      },
      "im:price": {
          "label": "$2.99",
          "attributes": {
              "amount": "2.99",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "℗ 2012 Dan Carlin"
      },
      "title": {
          "label": "Episode 41 - Thor’s Angels - Dan Carlin"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/episode-41-thors-angels/995162070?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/episode-41-thors-angels/995162070?uo=2",
          "attributes": {
              "im:id": "995162070"
          }
      },
      "im:artist": {
          "label": "Dan Carlin",
          "attributes": {
              "href": "https://music.apple.com/us/artist/dan-carlin/75845963?uo=2"
          }
      },
      "category": {
          "attributes": {
              "im:id": "50000061",
              "term": "Spoken Word",
              "scheme": "https://music.apple.com/us/genre/music-spoken-word/id50000061?uo=2",
              "label": "Spoken Word"
          }
      },
      "im:releaseDate": {
          "label": "2012-01-19T00:00:00-07:00",
          "attributes": {
              "label": "January 19, 2012"
          }
      }
  },
  {
      "im:name": {
          "label": "Memory Lane (Sampler) - EP"
      },
      "im:image": [
          {
              "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/e3/88/57/e3885745-dda5-ad82-1e5b-fd0dcba33852/196589774057.jpg/55x55bb.png",
              "attributes": {
                  "height": "55"
              }
          },
          {
              "label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e3/88/57/e3885745-dda5-ad82-1e5b-fd0dcba33852/196589774057.jpg/60x60bb.png",
              "attributes": {
                  "height": "60"
              }
          },
          {
              "label": "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/e3/88/57/e3885745-dda5-ad82-1e5b-fd0dcba33852/196589774057.jpg/170x170bb.png",
              "attributes": {
                  "height": "170"
              }
          }
      ],
      "im:itemCount": {
          "label": "4"
      },
      "im:price": {
          "label": "$3.49",
          "attributes": {
              "amount": "3.49",
              "currency": "USD"
          }
      },
      "im:contentType": {
          "im:contentType": {
              "attributes": {
                  "term": "Album",
                  "label": "Album"
              }
          },
          "attributes": {
              "term": "Music",
              "label": "Music"
          }
      },
      "rights": {
          "label": "℗ 2023 Sony Music Entertainment. All rights reserved."
      },
      "title": {
          "label": "Memory Lane (Sampler) - EP - Old Dominion"
      },
      "link": {
          "attributes": {
              "rel": "alternate",
              "type": "text/html",
              "href": "https://music.apple.com/us/album/memory-lane-sampler-ep/1662661465?uo=2"
          }
      },
      "id": {
          "label": "https://music.apple.com/us/album/memory-lane-sampler-ep/1662661465?uo=2",
          "attributes": {
              "im:id": "1662661465"
          }
      },
      "im:artist": {
          "label": "Old Dominion",
          "attributes": {
              "href": "https://music.apple.com/us/artist/old-dominion/495761008?uo=2"
          }
      },
      "category": {
          "attributes": {
              "im:id": "6",
              "term": "Country",
              "scheme": "https://music.apple.com/us/genre/music-country/id6?uo=2",
              "label": "Country"
          }
      },
      "im:releaseDate": {
          "label": "2023-01-09T00:00:00-07:00",
          "attributes": {
              "label": "January 9, 2023"
          }
      }
  }
  ]
</script>

<template>
  <main>
    <div>
      <li v-for="album in albums">
        <p>{{album.title.label}} by {{album["im:artist"].label}}</p>
      </li>
    </div>
  </main>
</template>