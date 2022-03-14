import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui组件库
import ElementUI from 'element-ui'

// 导入elementUI组件库样式
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false

// 使用elementUI组件库
Vue.use(ElementUI)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')