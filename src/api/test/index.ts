import request from '@/utils/request'

export const GetTest = request.get('https://sd-trans.imufeng.cn').then(res => {
  console.log(res)
  return res
})
