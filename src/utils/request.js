// 封装axios
import store from '@/store'
import axios from 'axios'
import { getToken } from './auth'

// 创建一个axios实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    // // 超时时间
    // timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    // config => {
    //     // 判断有无token
    //     if (store.getters.token) {
    //         // 统一注入token
    //         config.headers['X-Token'] = getToken()
    //     }
    //     return config
    // },
    // error => {
    //     console.log(error);
    //     return Promise.reject(error)
    // }
)
// 响应拦截器
service.interceptors.response.use()

export default service