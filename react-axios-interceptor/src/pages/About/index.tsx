import { message } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { usePostsApi } from '../../hooks'
import { IApplicationApis } from '../../types/application-apis.type'

const About = ({ apis }: { apis: IApplicationApis }) => {
  const postsApi = usePostsApi()
  const [randomUuid, setRandomUuid] = useState<string | undefined>(undefined)

  const handleButtonClick = useCallback(() => {
    const newUuid = uuid()
    setRandomUuid(newUuid)
    postsApi.getPosts().then(console.log)
    message.success(`generated UUID is ${newUuid}`)
  }, [postsApi])

  useEffect(() => {
    apis.postsApi?.getPosts().then((posts) => {
      console.log(`About page loaded ${posts.length} posts`)
    })
  }, [apis.postsApi?.instanceId])

  return (
    <div>
      <h1>About</h1>
      <pre>
        In this page I am testing if the PostsApi I am getting via hook gets
        updated or if it will get the same instance (same UUID)
      </pre>
      <p>This component's state: {randomUuid}</p>
      <p>Posts API instance UUID: {postsApi.instanceId}</p>
      <button type='button' onClick={handleButtonClick}>
        Update state
      </button>
    </div>
  )
}

export default About
