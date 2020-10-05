import { Button, Modal, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sticky, StickyContainer } from 'react-sticky';
import SignUp from './DangKy';
import Login from './DangNhap';
class index extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        const { TabPane } = Tabs;

        const renderTabBar = (props, DefaultTabBar) => (
            <Sticky bottomOffset={80}>
                {({ style }) => (
                    <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
                )}
            </Sticky>
        );
        return (
            <>
                <Button type="primary" className="designButton" style={{boxShadow:"none"}} onClick={this.showModal}>
          
                                Đăng nhập <br></br>
                                tài khoản
                </Button>
                <Modal
                   
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                            <TabPane tab="Đăng nhập" key="1" >
                                <Login/>
                             </TabPane>
                            <TabPane tab="Tạo khoản" key="2">
                                <SignUp/>
                           </TabPane>

                        </Tabs>
                    </StickyContainer>,
                </Modal>
            </>
        );
    }
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps)(index);





