import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AlbumList from "../AlbumList.vue";

describe("AlbumList", () => {
    let mockAlbumList = [
        {
            title: 'Fiction Portfolio',
            artist: 'Begin at Zero'
        },
        {
            title: 'The Graveyard',
            artist: 'Captain SpaceTime'
        },
        {
            title: 'Breathing Ash',
            artist: 'Begin at Zero'
        }
    ];
    let mockItunesData = {
        "feed": {
            "author": {
                "name": {
                    "label": "iTunes Store"
                },
                "uri": {
                    "label": "http://www.apple.com/itunes/"
                }
            },
            "entry": [
                {
                    "im:name": {
                        "label": "Breathing Ash"
                    },
                    "im:artist": {
                        "label": "Fiction Portfolio"
                    }
                },
                {
                    "im:name": {
                        "label": "The Graveyard"
                    },
                    "im:artist": {
                        "label": "Captain SpaceTime"
                    }
                }
            ]
        }
    };
    it("sorts by artist", () => {
        mount(AlbumList, { albums: mockAlbumList })
        expect(AlbumList.sortByArtist()).toBe([
         
        {
            id: 1,
            title: 'Fiction Portfolio',
            artist: 'Begin at Zero'
        },
        {
            id: 3,
            title: 'Breathing Ash',
            artist: 'Begin at Zero'
        },
        {
            id: 2,
            title: 'The Graveyard',
            artist: 'Captain SpaceTime'
        }  
        ])
    });
    it("sorts by title", () => {
        mount(AlbumList, { albums: mockAlbumList })
        expect(AlbumList.sortByTitle()).toBe([
        {
            id: 3,
            title: 'Breathing Ash',
            artist: 'Begin at Zero'
        },
        {
            id: 1,
            title: 'Fiction Portfolio',
            artist: 'Begin at Zero'
        },
        {
            id: 2,
            title: 'The Graveyard',
            artist: 'Captain SpaceTime'
        }  
        ])
    });
});
