import {
  createStore
} from 'vuex'

import axios from 'axios'
import state from '@/store/state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  // 存储数据
  state,
  // 计算state中的属性
  getters,
  // 更改state，只能写同步函数。
  mutations,
  actions,
  modules: {}
})

export default store