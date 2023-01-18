import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Album from "../Album.vue";

describe("Album", () => {
  it("renders html properly", () => {
    const wrapper = mount(Album, { props: { title: "Breathing Ash", artist: "Begin at Zero" } });
    expect(wrapper.text()).toContain('Begin at Zero');
    expect(wrapper.text()).toContain('Breathing Ash')
  });
});
