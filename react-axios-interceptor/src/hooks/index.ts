import { useRef } from 'react'
import { PostsApi } from '../api'
import { useAxios } from '../context/AxiosContext'

const usePostsApi = () => {
  const apiRef = useRef<PostsApi | undefined>(undefined)
  const { axiosInstance } = useAxios()

  if (!apiRef.current) {
    return (apiRef.current = new PostsApi(axiosInstance))
  }

  console.log(`Reused PostsApi ${apiRef.current.instanceId}`)
  return apiRef.current
}

export { usePostsApi }
