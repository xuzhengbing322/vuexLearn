export default {
      finishedTodos (state) {
            return state.todos.filter(todo => todo.isFinished);
      },
      unfinishedTodos (state) {
            return state.todos.filter(todo => !todo.isFinished)
      },
      // 根据不同情况返回不同的项数组
      filteredTodos (state, getters) {
            switch (state.filter) {
                  case 'finished':
                        return getters.finishedTodos;
                  case 'unfinished':
                        return getters.unfinishedTodos;
                  default:
                        return state.todos;
            }
      }
}