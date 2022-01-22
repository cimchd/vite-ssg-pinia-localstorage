import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useTestStore = defineStore({
  id: 'test',
  state: () => {
    return {
      test: useStorage('test', true)
    };
  },
});
