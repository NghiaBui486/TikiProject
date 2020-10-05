import React, { Component } from 'react';
import { Roll } from 'react-reveal';
import SellTime from '../../SellTime';
import Slidebar from '../../Sidebar';
import {connect} from 'react-redux'
class index extends Component {
    render() {
        const danhSachSale = this.props.danhSachSanPham.filter(item => item.StatusSale == true)

        return (
            <>
                <div className="viewContent container" style={{ overflow: "hidden" }}>
                    <Roll top >
                        <img className="ml-4" src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="flash deal" />
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif" alt="flash deal" />
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="flash deal" />
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
                                <SellTime danhSachSanPham={danhSachSale} />
                            </div>
                        </div>


                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
}
const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,

})
export default connect(mapStateToProps) (index);