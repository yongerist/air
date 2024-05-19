import request from '@/utils/request'
//用户登录请求数据
type LoginInfo = {
  roomId: string
  userId: string
}
// 用户登录响应数据
type LoginResponse = {
  code: number
  msg: string
  data: string
}
// 用户登录请求
export const login = (loginInfo: LoginInfo) => {
  return request<LoginResponse>({
    url: '/room_air/user/login',
    method: 'post',
    data: loginInfo
  })
}
