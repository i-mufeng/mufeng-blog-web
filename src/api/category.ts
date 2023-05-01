import type { BlogInfo } from '@/api/blog'

export interface CategoryInfo {
  id:number,
  name: string,
  blogs: Array<BlogInfo>
}
