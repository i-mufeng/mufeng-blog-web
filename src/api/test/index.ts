import request from '@/utils/request'

export const GetTest = (data: any) =>
  request.get('https://sd-trans.imufeng.cn', data)
