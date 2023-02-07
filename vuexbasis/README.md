# Vuex解决的问题
  通过props和emit实现组件间的数据传递。curIdx并不是Page和Tab组件共享的属性，而是父组件传递过来的数据。如果子组件想改变父组件中的数据curIdx，需要使用自定义事件emit实现，更改curIdx的逻辑在父组件中完成。这就导致一个问题，Page和Tab组件在改变值的时候，并不能联动更改，而是必须得靠父组件来实现更改数据的逻辑，然后再通过父组件将改后的值传给Tab和Page。
  我们希望在程序当中有一个容器，去帮我们管理状态数据，并还存在更改状态数据的方法。状态数据和响应的方法共享给所有的组件。组件只需要调用这些数据和方法即可。那么数据就和父组件完全没有关系了。
  
# Vuex的结构
      Vuex是由Vue components、state、mutations、getters、actions、mudules构成。
      Vue components是vue组件。
      state是存放数据的仓库。
      mutations存放改变state中的数据的同步方法。mutations中的方法，即type的参数是state,payload.
mutations中的方法通过commit(type, payload)调用。
      getters存放计算state中的数据的方法，方法的参数为state和getters，方法返回值是计算结果。
      actions中存放更改数据时的异步操作方法，方法的参数是context和payload。例如请求数据，并将请求到的
数据放入vuex中，而非vue组件中。首先，vue组件先dispatch action，执行actions中的异步请求函数。请求到数据后再context.commit执行mutations中方法，将数据放入state的属性中。
actions中的方法，即type的参数是store,payload。actions中的方法是通过dispatch(type, payload)调用。
      mudules是当项目比较大的时候，存在很多的数据和方法，无法直接在同一个state等中。此时就要在mudules
中注册不同的仓库，每个仓库都开启命名空间namespaced:true。这样在获取仓库的数据时，参数1就是仓库的名称，参数2才是要取得数据或方法。

# 在vue组件中使用数据和方法
      首先在组件中import {useStore} from 'vuex'引入useStore()。然后在setup()中
const store = useStore()得到具体的store仓库。
      state/getters中的数据都是非响应式数据。如果直接使用store.state.xxx/store.getters.xxx;得到
的数据是非响应式数据。需要通过computed(() => store.state.xxx/store.getters.xxx);才能得到响应式数据。这样当数据源被改变时，视图才能跟着发生相应的改变。
      mutations中的方法通过store.commit("SETCURIDX", {index,text});来调用。参数1是mutations中
的方法名，参数2是该方法的参数。如果只有一个参数，则直接写。如果方法有多个参数，则需要以对象的形式来写。因为mutations中的方法只有两个参数。
      actions中的方法通过store.dispatch('increateAsync',1);来调用。参数1是actions中的方法名，参
数2是方法的参数。
      

  