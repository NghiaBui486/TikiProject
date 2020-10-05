import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DonHang } from '../../../Redux/Action/shopingcart';
class index extends Component {
    componentDidMount() {
        this.props.dispatch(DonHang(this.props.match.params._id))
    }
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


        const elmDonHang = this.props.donHang.Products?.map((item, index) => {
            let tongTien = item.Price * item.Quantity

            return (
                //  Address Name
                <tr key={index}>
                    {/* <input type="radio" onChange={this.onChange} name="radio"/> */}
                    <td>{index + 1}</td>
                    <td>{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</td>
                    <td>{item.Price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")}</td>
                    <td>{item.Quantity}</td>
                    <td>{tongTien.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")}</td>
                </tr>
            )
        })
        return (
            <table className="table">

                <th>
                    <tr>
                        <td>STT</td>
                        <td>Tên sản phẩm</td>
                        <td>Giá</td>
                        <td>Số lượng</td>
                        <td>Tổng tiền</td>
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
    donHang: state.shoppingcartReducers.donHang

})
export default connect(mapStateToProps)(index);