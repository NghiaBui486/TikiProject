import { LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import React, { Component } from 'react';

class index extends Component {
    render() {
        const { Step } = Steps;

        return (
            <>
                <Steps>
                    <Step status="finish" title="Đăng nhập" icon={<LoadingOutlined />} />
                    {/* <Step status="finish" title="Verification" icon={<SolutionOutlined />} /> */}
                    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps>
            </>
        );
    }
}

export default index;