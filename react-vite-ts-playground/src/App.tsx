import { HomeOutlined, InfoOutlined } from "@ant-design/icons";
import {
  App as AntdApp,
  Breadcrumb,
  Col,
  Layout,
  Menu,
  Row,
  theme,
} from "antd";
import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "./App.module.scss";

const { Header, Content, Footer, Sider } = Layout;

const App = (): React.ReactElement => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = useLocation();

  return (
    <AntdApp style={{ height: "100vh" }}>
      <Layout className={styles.App}>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
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
        <Layout>
          <Header style={{ background: colorBgContainer }} />
          <Content className={styles.MainContent}>
            <Row gutter={[24, 8]}>
              <Col span={24}>
                <Breadcrumb className={styles.BreadCrumbs}>
                  <Breadcrumb.Item>One</Breadcrumb.Item>
                  <Breadcrumb.Item>Two</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
            <Row gutter={[24, 8]} style={{ border: "1px solid red" }}>
              <Col span={24}>
                <Outlet />
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Luís Henrique Rocha ©2023
          </Footer>
        </Layout>
      </Layout>
    </AntdApp>
  );
};

export default App;
