import Axios from 'axios'
import { message } from 'ant-design-vue'

const baseURL = ''
const axios = Axios.create({
    baseURL,
    timeout: 3000
})
// 前置拦截器
axios.interceptors.request.use(
    (response) => {
        // do something
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 后置拦截器 ,获取到数据后的操作
axios.interceptors.response.use(
    (response) => {
        // code 准确的操作
        return response
    },
    (error) => {
        // code 报错的处理
        return Promise.reject(error)
    }
)

export default axios
