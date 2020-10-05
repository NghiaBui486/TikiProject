import React, { Component } from 'react';
import { Roll } from 'react-reveal';
import SanPhamNew from '../../SanPhamNew';
import Slidebar from '../../Sidebar';
class index extends Component {
    componentDidMount(){
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <div className="viewContent container" style={{ overflow: "hidden" }}>
                    <Roll top >
                        <h3 className="text-primary text-center my-2">Sản phẩm mới</h3>
                    </Roll>
                    <div className="content col-12 col-lg-12">
                        <div className="option">
                            {/* {
                                this.props.keyWord != "" ?

                                    <h3 className="text-sreach">Kết quả tìm kiếm cho '{this.props.keyWord}': <span>{this.props.sreachKeyWord.length} sản phẩm</span></h3>
                                    : ""
                            } */}
                            <div className="button-option">

                                <ul className="sort-list">
                                    {/* <li>
                                    <a href="/">HÀNG MỚI</a>
                                </li>
                                <li>
                                    <a href="/">BÁN CHẠY</a>
                                </li>
                                <li>
                                    <a href="/">GIẢM GIÁ NHIỀU</a>
                                </li> */}
                                    <li>
                                        <a href="# " >Đang bán</a>
                                    </li>
                                    <li>
                                        <a href="# " >Sắp bán</a>
                                    </li>
                                    <li>
                                        <a href="# " >Theo dõi</a>
                                    </li>
                                    <li>
                                        <a href="# " >Cháy hàng</a>
                                    </li>
                                    {/* <li>
                                    <a href="/">CHỌN LỌC</a>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                        <div style={{ paddingLeft: "20px" }}>
                            <div className="row">
                                <SanPhamNew />
                            </div>
                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default index;