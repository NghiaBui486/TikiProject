
import { BarChartOutlined, HomeOutlined, LaptopOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import '../../../node_modules/antd/dist/antd.css';
import TopHeader from '../../Component/AdminBanHang/HeaderAdminBanHang';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;
const LayoutAdmin = (props) => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                }}
                onCollapse={(collapsed, type) => {
                }}
            >
                <div className="logo text-white text-center pt-1" >
                    Sller Center
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        <NavLink to="/">Trang Chủ</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                        <NavLink to="/">Đơn hàng</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<LaptopOutlined />}>
                        <NavLink to="/adminbanhang/sanpham">Sản phẩm</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HomeOutlined />}>
                        <NavLink to="/">Quản lý kho</NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <TopHeader/>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
export const AdminBanHangTemplate = ({ Component, ...rest }) => {
    return (

        <Route {...rest} render={(props) => {

            return (

                <LayoutAdmin>
                    <Component {...props} />
                </LayoutAdmin>
            )

        }
        } />
    )
}