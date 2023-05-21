import { Layout, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { IApplicationApis } from '../../types/application-apis.type'
import { IPost } from '../../types/post.type'

export interface IPostsListPageProps {
  apis: IApplicationApis
}

const PostsListPage = ({ apis }: IPostsListPageProps) => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setLoading] = useState(true)
  const { postsApi } = apis

  useEffect(() => {
    console.log(`PostsListPage > useEffect`)
    if (postsApi) {
      console.log(`PostsListPage > useEffect > getPosts (${postsApi.instanceId})`)
      postsApi
        .getPosts()
        .then(setPosts)
        .finally(() => {
          console.log('finished loading posts')
          setLoading(false)
        })
    }
  }, [postsApi?.instanceId])

  return (
    <Layout>
      <Spin spinning={isLoading}>
        <h1>PostsListPage Page</h1>
        {posts.map(({ title, author }, index) => {
          return (
            <p key={index}>
              {title} by {author}
            </p>
          )
        })}
      </Spin>
    </Layout>
  )
}

export default PostsListPage
