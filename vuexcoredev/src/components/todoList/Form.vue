<template>
  <div>
        <input 
          type="text"
          placeholder="Please input something ..."
          v-model="inputRef"
        />
        <button @click="addTodo">ADD TODO</button>
  </div>
</template>

<script setup >
import { ref } from "@vue/reactivity";
import { useStore } from '@/vuex';

const store = useStore();
// 双向绑定响应式数据，封装了获取DOM节点的过程。 
const inputRef = ref('');

// 添加任务项
const addTodo = () => {
      store.dispatch('addTodo', inputRef.value);
      inputRef.value = '';
}
</script>

<style scoped>
</style>