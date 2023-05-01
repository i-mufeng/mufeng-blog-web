import request from '@/utils/request'

/**
 * Blog对象接口
 */
export interface BlogInfo {
  id: number,
  name: string,
  createTime: string,
}

/**
 * Api集合
 */
enum Api {
  BLOG = '/blog',
  SEARCH_BLOG = 'searchBlog',
}

export const GetBlogById = (params: BlogInfo) => {
  return request.get<BlogInfo>(Api.BLOG, params)
}

export const getSearchBlogList = (params: BlogInfo) => {
  return request.get<BlogInfo>(Api.SEARCH_BLOG, params)
}

