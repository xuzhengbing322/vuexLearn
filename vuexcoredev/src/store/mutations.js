export default {
      addTodo (state, text) {
            state.todos.push({
                  id: state.id ++,
                  text,
                  isFinished: false
            })
      },
      // 更改选中的项的状态。
      toggleTodo (state, id) {
            state.todos = state.todos.map(todo => {
                  if (todo.id === id) {
                        todo.isFinished = !todo.isFinished;
                  }
                  return todo;
            })
      },
      removeTodo (state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
      },
      setFilter (state, filter) {
            state.filter = filter;
      }
}