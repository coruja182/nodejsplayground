import {
  HomeOutlined,
  InfoOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './AppLayout.module.scss';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, colorBgBase },
  } = theme.useToken();

  const { pathname: currentPathname } = useLocation();

  useEffect(() => { 
    document.body.style.backgroundColor = colorBgBase;
  }, []);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark"
          mode="inline"
          selectedKeys={[currentPathname]}
          items={[
            {
              key: `/`,
              icon: <HomeOutlined />,
              label: <Link to={"/"}>HOME</Link>,
              title: "Home Title",
            },
            {
              key: `/about`,
              icon: <InfoOutlined />,
              label: <Link to={"/about"}>ABOUT</Link>,
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: colorBgContainer,
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>One</Breadcrumb.Item>
            <Breadcrumb.Item>Two</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Content
          className={styles.mainContent}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;