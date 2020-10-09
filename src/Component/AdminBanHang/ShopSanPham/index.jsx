import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductsService } from '../../../Services';
import { DANHSACHSANPHAMSHOP } from '../../../Redux/Action/type';
import { DanhSachSanPhamShop } from '../../../Redux/Action/product';
import { createAction } from '../../../Redux/Action';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachSanPhamShop: null
        }
    }
    // Nhận state danh sách sản phẩm
    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('banHang')).token;
        let elementDanhSachSanPhamShop;
        ProductsService.danhSachSanPhamShop(token).then(res => {
            this.setState({
                danhSachSanPhamShop: res.data.data.products
            })
        });

    }
    // Xóa sản phẩm
    xoaSanPhamShop(id, nameProduct) {
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa ' + nameProduct + '?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Xóa`,
        }).then((result) => {
            if (result.isConfirmed) {
                ProductsService.xoaSanPham(id).then(res => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Xóa thành công",
                        showConfirmButton: false,
                        timer: 1200
                    });
                    this.props.history.push('/adminbanhang/sanpham')
                    ProductsService.danhSachSanPhamShop(JSON.parse(localStorage.getItem('banHang')).token).then(res => {
                        this.setState({
                            danhSachSanPhamShop: res.data.data.products
                        })
                    });

                }).catch(err => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: err.response.data.message,
                        showConfirmButton: false,
                        timer: 1200
                    });
                })
            }
        })
    }

    render() {
        // Render danh sách sản phẩm
        if (this.state.danhSachSanPhamShop) {
            var elementrenderDanhSachSanPham;
            const elementDanhSachSanPhamShop = this.state.danhSachSanPhamShop.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="text-center" style={{ width: "10%" }}><NavLink style={{ width: "10%" }} to={`/chitietsanpham/${item._id}`}>{item._id}</NavLink></td>
                        <td className="text-center" style={{ width: "20%" }}>{item.Name}</td>
                        <td className="text-center" style={{ width: "15%" }}>{item.Price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")}</td>
                        <td className="text-center" style={{ width: "15%" }}><img style={{ width: "150px" }} src={item.Image} atl={item.Image}></img></td>
                        <td>{item.Date}</td>
                        <td style={{ alignItems: "center" }}>
                            <button className="btn btn-danger" style={{ marginRight: "5px" }} onClick={() => this.xoaSanPhamShop(item._id, item.Name)} >Xóa</button>
                            <NavLink className="btn btn-primary" style={{ marginRight: "5px" }} to={`/adminbanhang/capnhat/${item._id}`}>Cập nhật</NavLink>
                        </td>
                    </tr>
                )
            })
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col" style={{"marginLeft": "-12.5px"}}>
                            <NavLink to="themsanpham" className="btn btn-success">Thêm sản phẩm shop</NavLink>
                            </div>
                            {/* Tìm kiếm sản phẩm */}
                            <div className="col-md-auto"  style={{"marginLeft": "-12.5px", "marginTop": "5px"}}>
                            <Formik
                                initialValues={{
                                    keysearch: ''
                                }}
                                onSubmit={(values) => {
                                    console.log(values)
                                    if(values.keysearch != ''){
                                        console.log(values.keysearch)
                                        ProductsService.danhSachSanPhamShopSearch(JSON.parse(localStorage.getItem('banHang')).token, values.keysearch).then(res => {
                                            this.setState({
                                                danhSachSanPhamShop: res.data.data.products,
                                                keysearch : values.keysearch
                                            })
                                        });
                                    }
                                }}>

                                {({ values }) => (
                                    <Form >
                                        <Field style={{ width: "300px", "border": "none","fontSize": "14px" }} type="text" name="keysearch" className="form-control" placeholder="Từ khóa tìm kiếm"></Field>
                                        <button style={{}} type="submit" className="btn btn-primary">Tìm kiếm</button>
                                    </Form>
                                )}
                            </Formik>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn btn-success">Thêm sản phẩm shop</button> */}
                    <h2>Danh sách sản phẩm</h2>
                    {/* {elementrenderDanhSachSanPham} */}
                    {/* Render danh sách sản phẩm shop */}
                    <RenderDanhSachSanPham 
                        elementDanhSachSanPhamShop = {elementDanhSachSanPhamShop}
                        countListProduct = {this.state.danhSachSanPhamShop.length}
                        keysearch = {this.state.keysearch}
                    ></RenderDanhSachSanPham>
                </div>
            );
        }
        else {
            return (
                <div>
                    {/* <button className="btn btn-success">Thêm sản phẩm shop</button> */}
                    <NavLink to="themsanpham" className="btn btn-success">Thêm sản phẩm shop</NavLink>
                    <h2>Danh sách sản phẩm</h2>
                    <div>
                        <img style={{
                            "display": "block", "marginLeft": "auto",
                            "marginRight": "auto", "width": "200px"
                        }}
                            src="https://img.idesign.vn/2018/10/23/id-loading-1.gif"></img>
                    </div>
                </div>
            );
        }
    }
}

function RenderDanhSachSanPham ( props ){
    
    console.log(props)
    if(props.countListProduct >0){
        if(props.keysearch){
            return (
                <div>
                <div>Kết quả tìm kiếm với từ khóa: '{ props.keysearch}' {props.countListProduct} kết quả được tìm thấy </div>
                <table className="" style={{ fontSize: "14px" }}>
                    <thead>
                        <tr>
                            <th className="text-center">Id Sản phẩm</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Giá sản phẩm (VNĐ)</th>
                            <th className="text-center">Hình ảnh</th>
                            <th className="text-center">Ngày nhập</th>
                            <th className="text-center">Công cụ</th>
                            <th className="text-center">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.elementDanhSachSanPhamShop}
                    </tbody>
                </table>
            </div>
            )
        }
        return (
            <div>
                <table className="" style={{ fontSize: "14px" }}>
                    <thead>
                        <tr>
                            <th className="text-center">Id Sản phẩm</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Giá sản phẩm (VNĐ)</th>
                            <th className="text-center">Hình ảnh</th>
                            <th className="text-center">Ngày nhập</th>
                            <th className="text-center">Công cụ</th>
                            <th className="text-center">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.elementDanhSachSanPhamShop}
                    </tbody>
                </table>
            </div>
        )
    }
    else if(props.keysearch){
        return (
            <div>
                Không tìm thấy kết quả với từ khóa: '{props.keysearch}'
            </div>
        )
    }
    return (
        <div>
            <center>Somthing wrong :(</center>
        </div>
    )
}


const mapStateToProps = state => ({
    danhSachSanPhamShopBanHang: state.productReducers.danhSachSanPhamShop,
})
export default connect(mapStateToProps)(index);