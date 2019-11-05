// test/PokeTable.spec.js

// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';

// Utilities
import { shallowMount } from '@vue/test-utils';

// Components
import PokeTable from '../PokeTable';

describe('PokeTable.vue', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify({});
  });
  it('should have a unique id attribute', () => {
    const wrapper = shallowMount(PokeTable, {
      Vue,
      vuetify,
    });
    expect(wrapper.contains('#PokeTable')).toBeTruthy();
  });
});
