import request from '@/utils/request'

/**
 * 请求上下文
 */
enum LoginUri {
  LOGIN_URI = '/login',
}

/**
 * 请求表单对象
 */
export interface LoginForm{
  username: string,
  password: string
}

/**
 * 登录结果返回
 */
export interface LoginResult{
  token: string
}

export const Login = (params:LoginForm) => {
  return request.get<LoginResult>(LoginUri.LOGIN_URI, params)
}
