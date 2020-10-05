import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/Action';
import { DanhSachSanPham } from '../../Redux/Action/product';
import { DANHSACHSANPHAM } from '../../Redux/Action/type';
import DanhMucCon from '../Header/DanhMucCon'
import SreachTheoKhoangGia from '../SreachTheoKhoangGia'
class index extends Component {
    
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    render() {
        console.log("elementmucocn", this.props.danhSachDanhMucCon);
        // const elementDanhMucCon = this.props.danhSachDanhMucCon?.map((item, index) => {
        //     return (
        //         <>

        //         </>
        //     )
        // })
        return (
            <div className="side-bar col-12 col-lg-3" style={{ borderRight: "2px solid #f7f7f7" }}>
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <a href="# " className="panel-link">
                                Danh Sách Danh Mục
                            </a>
                        </h3>
                    </div>
                    <div className="panel-content">
                        <div className="list-group">
                            <div className="top" key={index}>
                                <a href="#" className="item">
                                    {this.props.danhSachDanhMucCon[0]?.Title}
                                    {/* <span>(428)</span> */}
                                </a>
                            </div>
                            <DanhMucCon sideBar={this.props.danhSachDanhMucCon[0]?.ListSubCategory} />



                        </div>
                    </div>
                </div>
                <div className="panel" style={{ borderTop: "2px solid #f7f7f7" }}>
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <a href="# " className="panel-link">
                                Giá
                            </a>
                        </h3>
                    </div>
                    {/* sreach khoảng giá */}
                    <SreachTheoKhoangGia/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
})
export default connect(mapStateToProps)(index);