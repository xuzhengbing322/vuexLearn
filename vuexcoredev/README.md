# 完成的任务
1、实现TodoList功能
   ### 所有/完成项/未完成项 切换  - Tab
   ### 列表项增加               - addTodo
   ### 切换列表项完成与未完成状态  - toggleTodo
   ### 删除列表项               - removeTodo

2、需要的state
   1、todos: Array
   2、filter: all/finished/unfinished -> string
   3、id: number ++

# Vuex解决的问题
  props实现父传子，多个子组件就要重复传递多次。如果子组件需要操作父组件传递过来的数据，则需要通过emit实
现数据子传父，然后根据父组件中的逻辑操作数据。因此，数据无法在多个组件中共享，而且必须由父组件传递和实现更改数据的逻辑。我们希望有一个容器，存储着数据和管理数据的各种方法。任何组件都可以直接使用这些数据和方法。

# Vuex的结构
      Vuex是由Vue components、state、getters、mutations、、actions、mudules构成。
      Vue components是vue组件。在组件中通过import {useStore} from 'vuex'导入useStore()方法，然
后在setup中，const store = useStore()执行方法得到具体的store仓库。
      state是存放数据的仓库。数据原本都是非响应式数据，如果使用store.state.xxx;得到的数据是非响应式数
据。如果使用computed(() => store.state.xxx得到的数据是响应式数据。当数据源被改变时，视图才会跟着发生相应的变化。
      getters存放计算state中的数据的方法。方法的参数为(state,getters)。方法返回值是计算结果。
getters的调用方式和state数据相同。
      mutations存放改变state中的数据的同步方法。mutations中的方法名是type，方法的参数是
(state,payload)。在组件中通过commit('type', payload)调用mutations中的方法。
      actions存放改变state中的数据的异步方法。actions中的方法名是type，方法的参数是
(context,payload)。context中可以解构出commit，因此actions中的方法常会使用mutations中的方法。例如，请求数据，并将请求到的数据放入vuex中，而非vue组件中。首先，vue组件先dispatch('type',payload)，调用actions中的方法。请求数据成功后actions中的方法再执行context.commit('type',payload)执行mutations中的方法，将数据放入state的属性中。
      mudules是当项目比较大的时候，存在很多的数据和方法，无法直接在同一个state等中。此时就要在mudules
中注册不同的仓库，每个仓库都开启命名空间namespaced:true。这样在获取仓库的数据时，参数1就是仓库的名称，参数2才是要取得数据或方法。


      
      
      

  