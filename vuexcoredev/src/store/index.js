import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// vuex提供createStore方法创建仓库
import { createStore } from '@/vuex';

export default createStore({
      state,
      getters,
      mutations,
      actions
})