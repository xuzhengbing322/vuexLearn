<template>
  <div>
    <Tab />
    <Page/>
    {{myInfo}}
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import Tab from "./components/Tab";
import Page from "./components/page";
import {useStore} from 'vuex'
import { computed } from '@vue/runtime-core';

export default {
  name: "App",
  components: {
    Tab,
    Page,
  },
  setup() {
    const store = useStore()
    const myInfo = computed(() => store.getters.getMyInfo)

    const actionsFn = () => {
      store.dispatch('increateAsync',1)
    }

    return {
      myInfo,
      actionsFn
    }
  },
};
</script>


