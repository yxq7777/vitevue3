import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
class http {
  stance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.stance = axios.create(config)
    // 添加请求拦截器
    this.stance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.stance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  get(url: string, params = {}) {
    return this.stance.get(url, { params })
  }
  post(url: string, data = {}) {
    return this.stance.post(url, data)
  }
  put(url: string, data = {}) {
    return this.stance.put(url, data)
  }
  delete(url: string, data = {}) {
    return this.stance.delete(url, data)
  }
}
export default new http({
  baseURL: 'https://eladmin.vip',
  timeout: 5000
})
