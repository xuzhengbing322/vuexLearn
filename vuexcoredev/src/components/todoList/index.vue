<template>
  <div>
    <todo-tab />
    <todo-form />
    <todos />
  </div>
</template>

<script setup>
// tab组件
import TodoTab from './Tab';
// form表单
import TodoForm from './Form';
// 列表
import Todos from './Todos';
</script>

<style lang="sass" scoped>
</style>