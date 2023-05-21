import { FormOutlined, HomeOutlined, InfoOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { useCallback, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const HomePage = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const navigate = useNavigate()

  const menuItems = useCallback(
    (): MenuItem[] => [
      {
        label: 'Home',
        key: 'menu-home',
        icon: <HomeOutlined />,
        onClick: () => navigate('/'),
      },
      {
        label: 'Entities',
        key: 'menu-entities',
        icon: <FormOutlined />,
        children: [
          {
            label: 'Posts',
            key: 'menu-entities-posts',
            onClick: () => navigate('/posts'),
          },
        ],
      },
      {
        label: 'About',
        key: 'menu-about',
        icon: <InfoOutlined />,
        onClick: () => navigate('/about'),
      },
    ],
    [navigate],
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='demo-logo-vertical' />
        <Menu defaultSelectedKeys={['1']} mode='inline' items={menuItems()} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 1em', border: '1px solid red' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              border: '1px dashed blue',
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2023 Created by coruja182
        </Footer>
      </Layout>
    </Layout>
  )
}

export default HomePage
