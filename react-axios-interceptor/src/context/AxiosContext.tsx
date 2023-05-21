import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

export const AxiosContext = createContext<AxiosInstance | undefined>(undefined)

interface IAxiosInstanceProviderProps {
  config?: AxiosRequestConfig
  requestInterceptors?: []
  responseInterceptors?: []
  children: ReactNode
}

const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}: IAxiosInstanceProviderProps) => {
  const axiosInstanceRef = useRef<AxiosInstance | undefined>(undefined)
  const [ready, setReady] = useState(axiosInstanceRef.current !== undefined)

  if (axiosInstanceRef.current === undefined) {
      axiosInstanceRef.current = axios.create(config)
      console.log(`axios client created! ${Date.now()}`)
    }

  useEffect(() => {
    console.log(`useEffect`)
    if (axiosInstanceRef.current === undefined) {
      axiosInstanceRef.current = axios.create(config)
      console.log(`axios client created! ${Date.now()}`)
    }

    requestInterceptors.forEach((interceptor) => {
      axiosInstanceRef.current!.interceptors.request.use(interceptor)
    })

    responseInterceptors.forEach((interceptor) => {
      axiosInstanceRef.current!.interceptors.response.use(interceptor)
    })

    setReady(true)
  }, [config])

  return (
    <AxiosContext.Provider value={axiosInstanceRef.current}>
      {ready && children}
    </AxiosContext.Provider>
  )
}

export const useAxios = () => {
  const axiosInstance = useContext(AxiosContext)

  if (!axiosInstance) {
    throw new Error(
      'useAxios must be used from children of <AxiosContextProvider>',
    )
  }

  return {
    axiosInstance,
  }
}

export default AxiosInstanceProvider
