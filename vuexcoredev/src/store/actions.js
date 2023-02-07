export default {
      // context解构出commit
      addTodo ({commit}, text) {
            // 添加一个项的时候，需要将文本、状态和id形成的对象，放入todos中。因此要获取输入框中的text。
            commit('addTodo', text);
      },
      toggleTodo({ commit }, id) {
            commit('toggleTodo', id);
      },
      removeTodo({ commit }, id) {
            commit('removeTodo', id)
      }
}