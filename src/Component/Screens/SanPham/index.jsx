import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flip, Slide } from 'react-reveal';
import { createAction } from '../../../Redux/Action';
import { DanhSachDanhMucCon, DanhSachSanPhamTheoDanhMuc, SreachSanPham } from '../../../Redux/Action/product';
import { SREACHAZ, SREACHZA } from '../../../Redux/Action/type';
import DanhSachSanPham from '../../DanhSachSanPham';
import Slidebar from '../../Sidebar';
class index extends Component {
    constructor(props) {
        super(props)

    }
    sreachAZ = (ds) => {
        ///// Sắp xếp sản phẩm theo giá từ a -> z
        const az = ds.sort((a, b) => {
            return a.giaSanPham - b.giaSanPham
        })
        this.props.dispatch(createAction(SREACHAZ, az))
    }
    sreachZA = () => {
        ///// Sắp xếp sản phẩm theo giá từ a -> z
        const za = this.props.danhSachSanPham.sort((a, b) => {
            return b.giaSanPham - a.giaSanPham
        })
        this.props.dispatch(createAction(SREACHZA, za))
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.idDanhMuc !== nextProps.idDanhMuc) {
    //         return true;
    //     }

    //     return false;
    // }
    componentDidMount() {
        // this.props.dispatch()
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
        if (this.props.match.params.keyWord) {
            this.props.dispatch(SreachSanPham(this.props.match.params.keyWord))

        }
        else if (this.props.match.params.title != "") {

            this.props.dispatch(DanhSachSanPhamTheoDanhMuc(this.props.match.params.id))
            this.props.dispatch(DanhSachDanhMucCon(this.props.match.params.id))

        }
    }
    render() {
        return (
            <div className="viewContent" style={{ overflow: "hidden" }}>
                <Flip>
                    <Slidebar title={this.props.match.params.title} danhSachDanhMucCon={this.props.danhSachDanhMucCon} />
                </Flip>
                <Slide top>
                    <div className="content col-12 col-lg-9">
                        <div className="option">
                            {
                                this.props.match.params.keyWord ?

                                    <h3 className="text-sreach">Kết quả tìm kiếm cho '{this.props.match.params.keyWord}': <span>{this.props.sreachProductApi.length} sản phẩm</span></h3>
                                    :

                                    <h3 className="text-sreach">Kết quả tìm kiếm danh mục cho '{this.props.match.params.title}': <span>{this.props.idDanhMuc.data?.count} sản phẩm</span></h3>

                            }
                            <div className="button-option">
                                <span>Ưu tiên xem : </span>
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
                                        <a href="# " onClick={() => this.sreachAZ(this.props.danhSachSanPham)}>GIÁ THẤP ĐẾN CAO</a>
                                    </li>
                                    <li>
                                        <a href="# " onClick={this.sreachZA}>GIÁ CAO ĐẾN THẤP</a>
                                    </li>
                                    {/* <li>
                                    <a href="/">CHỌN LỌC</a>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                        <div style={{ paddingLeft: "20px" }}>
                            <div className="row">
                                <DanhSachSanPham
                                    sreachPrice={this.props.sreachPrice} keyWordPage={this.props.match.params.keyWord}
                                    status={true} sreachTheoDanhMuc={this.props.idDanhMuc.data?.products}
                                    sreachProductApi={this.props.sreachProductApi} />

                            </div>
                        </div>


                    </div>
                </Slide>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sreachPrice: state.productReducers.sreachPrice,
    danhSachSanPham: state.productReducers.danhSachSanPham,
    sreachKeyWord: state.productReducers.sreachKeyWord,
    keyWord: state.productReducers.keyWord,
    sreachProductApi: state.productReducers.sreachProductApi,
    idDanhMuc: state.productReducers.idDanhMuc,
    danhSachDanhMucCon: state.productReducers.danhSachDanhMucCon



})
export default connect(mapStateToProps)(index);