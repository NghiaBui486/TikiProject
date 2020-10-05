import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class index extends Component {
    render() {
        // const elementDonHang = this.props.quanLyDonHang.map((item, index) => {
        //     return (
        //         <tr key={index}>
        //             {/* <input type="radio" onChange={this.onChange} name="radio"/> */}
        //             <td>{index + 1}</td>
        //             <td>{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</td>
        //             <td><img src={item.Image} alt="test" /> </td>
        //             <td>{item.Price} Đồng</td>
        //             <td>
        //                 <button className="btn btn-danger" onClick={() => this.xoaSanPham(item._id)}>Xóa</button>
        //                 <NavLink to={`/admin/suasanpham/${item._id}`} className="btn btn-warning ml-2">Sửa</NavLink>
        //             </td>
        //         </tr>
        //     )
        // })
        console.log(this.props.quanLyDonHang.order, "view don hang");
        const elmDonHang = this.props.quanLyDonHang.order?.map((item, index) => {
            return (
                //  Address Name
                <tr key={index}>
                    {/* <input type="radio" onChange={this.onChange} name="radio"/> */}
                    <td>{index + 1}</td>
                    <td>{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</td>
                    <td>{item.Address}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone}</td>
                    <td>{item.Payment}</td>
                    <td>{item.IntoMoney}</td>
                    <td>
                        <NavLink to={`/user/thongtindonhang/${item._id}`} className="btn btn-info ml-2">Xem thông tin</NavLink>
                        <NavLink to={`/user/thaydoithongtin/${item._id}`} className="btn btn-warning ml-2">Thay đổi</NavLink>

                    </td>
                </tr>
            )
        })
        return (
            <table className="table">

                <th>
                    <tr>
                        <td>STT</td>
                        <td>Tên người nhận</td>
                        <td>Địa chỉ nhận</td>
                        <td>Email</td>
                        <td>Số điện thoại</td>
                        <td>Hình thức thanh toán</td>
                        <td>Tổng tiền</td>
                        <td>Thao tác</td>
                    </tr>
                    {elmDonHang}
                </th>
                <tbody>

                </tbody>
                {/* <div className="address-text_list">
                    <p className="name">{this.props.quanLyDonHang.Name}</p>
                    <p className="address">Địa chỉ: {this.props.quanLyDonHang.Address}</p>
                    <p className="address">Việt Nam</p>
                    <p className="phone">Điện thoại: {this.props.quanLyDonHang.Phone}</p>

                    <span className="defaut-title">Mặc định</span>
                </div> */}
            </table>
        );
    }
}
const mapStateToProps = state => ({
    quanLyDonHang: state.shoppingcartReducers.quanLyDonHang,

})
export default connect(mapStateToProps)(index);