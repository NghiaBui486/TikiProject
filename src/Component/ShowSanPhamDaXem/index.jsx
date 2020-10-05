import React, { Component } from 'react';
import DanhSachSanPham from '../DanhSachSanPham';

class index extends Component {
    render() {

        return (
            <div className="my-5">
                <h3 className="text-center btn btn-outline-primary w-100">Các sản phẩm đã xem</h3>
                <div className="container">
                    <div className="row">
                        <DanhSachSanPham statusShow={true} />

                    </div>
                </div>
            </div>
        );
    }
}

export default index;