import React, { Component } from 'react';
import Model from '../../Model';
class index extends Component {
    render() {
        return (
            <div className="container text-center gioHang my-5">
                <h2 className="title text-left"> Giỏ hàng <span>(0 Sản phẩm)</span></h2>
                <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" className="my-3" width={190} alt="test"  />

                {this.props.login == true ?
                    <>
                        <p className="text-center mb-3">Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                        <a href="/" className="btn btn-warning mt-5">Tiếp tục mua sắm</a>
                    </>
                    :
                    <>
                        <p className="text-center mb-3">Vui lòng đăng nhập để mua hàng.</p>
                      
                            
                            <Model/>
                       
                    </>

                }

            </div>
        );
    }
}

export default index;