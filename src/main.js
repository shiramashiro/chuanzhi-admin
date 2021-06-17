import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

axios.defaults.baseURL = 'http://localhost:9000/api/admin/v1'
axios.interceptors.request.use(
    function(config) {
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)
Vue.prototype.$axios = axios

// 导入element-ui组件库
import Element, { Message, MessageBox } from 'element-ui'
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Element)

// 导入组件，并全局注册
import owlBookshelfForm from '@/components/owl-bookshelf-form.vue'
Vue.component('owl-bookshelf-form', owlBookshelfForm)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
