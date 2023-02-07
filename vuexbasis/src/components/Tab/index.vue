<template>
  <div>
    <!-- 动态属性：判断current样式的值curIdx是否等于当前a标签的下标。如果相等则证明该标签是选中标签，
则给标签添加相应的样式。
    给标签绑定事件处理函数，处理curIdx属性的值。当标签被选中时，通过将curIdx改为该标签的下标，从而实现
该标签被选中的效果。
     -->
    <a
      href="javascript:;"
      :class="[{ current: curIdx === 0 }]"
      @click="setCurIdx(0, '选项1')"
      >选项1</a
    >
    <a
      href="javascript:;"
      :class="[{ current: curIdx === 1 }]"
      @click="setCurIdx(1, '选项2')"
      >选项2</a
    >
    <a
      href="javascript:;"
      :class="[{ current: curIdx === 2 }]"
      @click="setCurIdx(2, '选项3')"
      >选项3</a
    >
    <a
      href="javascript:;"
      :class="[{ current: curIdx === 3 }]"
      @click="setCurIdx(3, '选项4')"
      >选项4</a
    >
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  name: "Tab",
  setup() {
    let store = useStore();    
    let curIdx = computed(() => store.state.curIdx);
    let setCurIdx = (index, text) => {
      store.commit("SETCURIDX", {
            index,
            text
      });
    };

    return {
      curIdx,
      setCurIdx,
    };
  },
};
</script>
      
<style>
a {
  margin-right: 10px;
}

.current {
  text-decoration: none;
  color: #000;
}
</style>