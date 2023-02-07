import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app');

/**因为使用use(store)，那么store -> index.js中就一定返回
 * {
 *    install(app)
 * }
 * */ 
