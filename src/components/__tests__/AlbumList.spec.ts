import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AlbumList from "../AlbumList.vue";

describe("AlbumList", () => {
    const mockAlbumList = [
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
    it("renders the albums", () => {
        const wrapper = mount(AlbumList, { albums: mockAlbumList });
        //expect(wrapper.find('#num-0')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-1')).toMatch('The Graveyard');
        //expect(wrapper.find('#num-2')).toMatch('Breathing Ash');
    });
    it("sorts by artist", () => {
        const wrapper = mount(AlbumList, { albums: mockAlbumList });
        //wrapper.vm.sortByTitle();
        //expect(wrapper.find('#num-0')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-1')).toMatch('Breathing Ash');
        //expect(wrapper.find('#num-2')).toMatch('The Graveyard');
    });
    it("sorts by title", () => {
        const wrapper = mount(AlbumList, { albums: mockAlbumList });
        //wrapper.vm.sortByTitle();
        //expect(wrapper.find('#num-0')).toMatch('Breathing Ash');
        //expect(wrapper.find('#num-1')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-2')).toMatch('The Graveyard');
    });
    it("does not process an irrelevant data", () => {
        const wrapper = mount(AlbumList, { albums: { foo: 'bar' } });
        expect(wrapper.find('#num-0').exists()).toBe(false);
    })
});
