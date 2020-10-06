import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ProductsService } from '../../../Services';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachSanPhamShop: null
        }
    }

    componentWillMount(){
        const token = JSON.parse(localStorage.getItem('banHang')).token;
        let elementDanhSachSanPhamShop;
        ProductsService.danhSachSanPhamShop(token).then(res => {
            this.setState({
                danhSachSanPhamShop : res.data.data.products
            })
            console.log("Danh sach sp shop",this.state.danhSachSanPhamShop);
        });
    }

    render() {
        if(this.state.danhSachSanPhamShop){
            const elementDanhSachSanPhamShop = this.state.danhSachSanPhamShop.map((item, index) => {
                return (
                    <tr key={index}>
                        <td><NavLink to={`/adminbanhang/chitetsanpham/${item._id}`}>{item._id}</NavLink></td>
                        <td style={{ width:"20%"}}>{item.Name}</td>
                        <td>{item.Price}</td>
                        <td><img src={item.Image} atl={item.Image}></img></td>
                        <td>{item.Date}</td>
                        <td><NavLink to={`/adminbanhang/xoasanpham/${item._id}`}>Xóa</NavLink> | <NavLink to={`/adminbanhang/capnhat/${item._id}`}>Cập nhật</NavLink> | <NavLink to={`/adminbanhang/xemsanpham/${item._id}`}>Xem</NavLink></td>
                    </tr>
                )
            })
            return (
                <div>
                    {/* <button className="btn btn-success">Thêm sản phẩm shop</button> */}
                    <NavLink to="themsanpham" className="btn btn-success">Thêm sản phẩm shop</NavLink>
                    <h2>Danh sách sản phẩm</h2>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Ngày nhập</th>
                                    <th>Công cụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementDanhSachSanPhamShop}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div>
                    {/* <button className="btn btn-success">Thêm sản phẩm shop</button> */}
                    <NavLink to="themsanpham" className="btn btn-success">Thêm sản phẩm shop</NavLink>
                    <h2>Danh sách sản phẩm</h2>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                    <th>Id Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Ngày nhập</th>
                                    <th>Công cụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {elementDanhSachSanPhamShop} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps) (index);