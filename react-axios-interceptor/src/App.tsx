import { App as AntApp } from 'antd'
import { AxiosRequestConfig } from 'axios'
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { AxiosContextProvider } from './context'
import { usePostsApi } from './hooks'
import About from './pages/About'
import HomePage from './pages/Home'
import IndexPage from './pages/Index'
import PostsListPage from './pages/Posts'

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3000',
}

const CustomApplicationRouter = () => {
  const postsApi = usePostsApi()

  const routes: RouteObject[] = [
    {
      path: '',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <IndexPage />,
        },
        {
          path: 'about',
          element: (
            <About
              apis={{
                postsApi,
              }}
            />
          ),
        },
        {
          path: 'posts',
          element: (
            <PostsListPage
              apis={{
                postsApi,
              }}
            />
          ),
        },
      ],
    },
  ]

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <AntApp>
      <AxiosContextProvider config={axiosConfig}>
        <CustomApplicationRouter />
      </AxiosContextProvider>
    </AntApp>
  )
}

export default App
