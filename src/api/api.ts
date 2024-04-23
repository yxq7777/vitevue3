import http from '../ults/http'
//登录
interface LoginType {
  username: string
  password: string
  code: string
}
export const loginApi = (data: LoginType) => {
  return http.post('/auth/login', data)
}
