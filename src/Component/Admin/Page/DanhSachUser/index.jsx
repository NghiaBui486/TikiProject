import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createAction } from '../../../../Redux/Action';
import { DanhSachSanPham } from '../../../../Redux/Action/product';
import { LAYTHONGTINUSER } from '../../../../Redux/Action/type';
import { UserServices } from '../../../../Services';

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachTimKiem: [],
            keyWord: ""
        }
    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let danhSachTimKiem = this.props.danhSachSanPham.filter(item =>
                item.tenSanPham.toLowerCase().indexOf(this.state.keyWord) !== -1
            )
            this.setState({
                danhSachTimKiem,

            })
        })

    }
    xoaNguoiDung = (id) => {
        const user = localStorage.getItem('user')
        if (user) {
            let objUser = JSON.parse(user)
            let token = objUser.token
            UserServices.xoaNguoiDung(id, token).then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Xóa thành công ! ',
                    showConfirmButton: false,
                    timer: 1200
                });
                this.props.history.push("/admin")
            }).catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Xóa thất bại ! ',
                    showConfirmButton: false,
                    timer: 1200
                });
            })
        }

    }
    LayThongTinUser = (user) =>{
        this.props.dispatch(createAction(LAYTHONGTINUSER,user))
    }
    renderSanPham = (item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.FullName?.length > 44 ? item.FullName.slice(0, 44)
                    + "...." : item.FullName}</td>
                <td><img src={item.Address} alt="test" /></td>
                <td>{item.Phone} </td>
                <td>{item.Email}</td>
                <td>{item.Gender == 0 ? "Nam" : "Nữ"}</td>
                <td>
                    <NavLink to={`/admin/suanguoidung/${item._id}`} onClick={()=>this.LayThongTinUser(item)} className="btn btn-warning">Sửa</NavLink>
                    <button className="btn btn-danger ml-3" onClick={() => this.xoaNguoiDung(item._id)}>Xóa</button>
                </td>

            </tr>
        )
    }
    render() {
        const eleDachSachNguoiDung = this.props.danhSachNguoiDung.map((item, index) => {
            return this.renderSanPham(item, index)
        })
        // const eleSreachSanPham = this.state.danhSachTimKiem.map((item, index) => {
        //     return this.renderSanPham(item, index)

        // })
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <div className="col-10">
                            <input onChange={this.onChange} name="keyWord" type="text" className="form-control" placeholder="Nhập vào tên hoặc sản phẩm cần tìm ..." />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Tìm</button>
                        </div>
                    </div>
                </form>
                <NavLink to="admin/themuser" className="btn btn-success my-2">Thêm User </NavLink>

                <table className="table">

                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Họ tên</td>
                            <td>Địa chỉ</td>
                            <td>Số điện thoại</td>
                            <td>Email</td>
                            <td>Giới tính</td>
                            <td>Thao tác</td>
                        </tr>
                        {/* {this.state.keyWord ? eleSreachSanPham : eleSanPham} */}
                        {eleDachSachNguoiDung}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    danhSachNguoiDung: state.userReducers.danhSachUser
})
export default connect(mapStateToProps)(index);