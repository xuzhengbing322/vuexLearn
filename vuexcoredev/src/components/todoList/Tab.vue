<template>
  <div>
    <a
      href="javascript:;"
      @click="setFilter('all')"
      :class="{ active: $store.state.filter === 'all' }"
      >All</a
    >
    <a
      href="javascript:;"
      @click="setFilter('finished')"
      :class="{ active: $store.state.filter === 'finished' }"
      >Finished</a
    >
    <a
      href="javascript:;"
      @click="setFilter('unfinished')"
      :class="{ active: $store.state.filter === 'unfinished' }"
      >Unfinished</a
    >
  </div>
</template>

<script setup >
import { useStore } from '@/vuex';

const store = useStore();

// 设置状态
const setFilter = (filter) => {
      store.commit('setFilter', filter);
}

</script>

<style scoped>
a {
      margin-right: 15px;
}

.active {
      text-decoration: none;
      color: #000;
}
</style>