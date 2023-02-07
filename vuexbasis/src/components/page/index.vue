<template>
  <div>
        {{context[curIdx]}}
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';

export default {
  name: "Page",
  setup() {
    const context = ["页面1", "页面2", "页面3", "页面4"];
    const store = useStore();
    let curIdx = computed(() => store.state.curIdx)

    return {
      context,
      curIdx
    };
  },
};
</script>

<style>
</style>