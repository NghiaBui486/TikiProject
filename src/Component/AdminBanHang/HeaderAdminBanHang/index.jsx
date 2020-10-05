import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
    render() {
        const userObj = JSON.parse(localStorage.getItem('banHang'))
        const user = userObj.shop
        //console.log("User Ban hang" + user)
        const { Header } = Layout;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Thay đổi mật khẩu
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        Quản lý người dùng
                </a>
                </Menu.Item>
          
            </Menu>
        );
        return (
            <Header className="site-layout-sub-header-background thongTinBanHang" style={{ padding: 0 }}>
                <Dropdown overlay={menu} className="float-right formThongTin" placement="bottomRight">
                    <Button>{user.EmailOwner}<DownOutlined /></Button>
                </Dropdown>
            </Header>
        );
    }
}
const mapStateToProps = state => ({
    thongTinTaiKhoan : state.adminBanHangReducers.thongTinTaiKhoanBanHang
})
export default connect(mapStateToProps)(index);