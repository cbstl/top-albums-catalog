import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AlbumList from "../AlbumList.vue";

describe("AlbumList", () => {
    const mockAlbumList = [
        {
            id: 1,
            title: 'Fiction Portfolio',
            artist: 'Begin at Zero'
        },
        {
            id: 2,
            title: 'The Graveyard',
            artist: 'Captain SpaceTime'
        },
        {
            id: 3,
            title: 'Breathing Ash',
            artist: 'Begin at Zero'
        }
    ];
    it("renders the albums", () => {
        const wrapper = mount(AlbumList, { props: { albums: mockAlbumList, searchTerm: '' } });
        //expect(wrapper.find('#num-0')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-1')).toMatch('The Graveyard');
        //expect(wrapper.find('#num-2')).toMatch('Breathing Ash');
    });
    it("sorts by artist", () => {
        //const wrapper = mount(AlbumList, { albums: mockAlbumList, searchTerm: '' });
        //wrapper.vm.sortByTitle();
        //expect(wrapper.find('#num-0')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-1')).toMatch('Breathing Ash');
        //expect(wrapper.find('#num-2')).toMatch('The Graveyard');
    });
    it("sorts by title", () => {
        const wrapper = mount(AlbumList, { props: { albums: mockAlbumList, searchTerm: '' } });
        //wrapper.vm.sortByTitle();
        //expect(wrapper.find('#num-0')).toMatch('Breathing Ash');
        //expect(wrapper.find('#num-1')).toMatch('Fiction Portfolio');
        //expect(wrapper.find('#num-2')).toMatch('The Graveyard');
    });
    it("searches by term", () => {
        const wrapper = mount(AlbumList, { props: { albums: mockAlbumList, searchTerm: '' } });
        //wrapper.vm.searchForTerm('begin');
        //expect(wrapper.props().albums.length).toBe(2);
    });
    it("does not process irrelevant data", () => {
        const wrapper = mount(AlbumList, { albums: { foo: 'bar' }, searchTerm: 12 });
        expect(wrapper.find('#num-0').exists()).toBe(false);
    })
});
