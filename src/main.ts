import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import store from './store'
import router from './router/index'
import '@/components/ants/index.scss'
import App from './App.vue'

createApp(App).use(Antd).use(store).use(router).mount('#app')
