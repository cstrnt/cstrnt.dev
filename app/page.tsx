import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs.filter((p) => !p._raw.flattenedPath.includes('/de')))
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
