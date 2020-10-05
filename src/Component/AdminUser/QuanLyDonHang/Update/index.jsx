import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FullName: "",
            Email: "",
            Phone: "",
            Password: "",
            Gender: 0,
        }

    }
    onChange = (e) => {
        let input = e.target
        this.setState({
            [input.name]: input.value
        }, () => {
        })
    }
    onClick = (e) => {
        e.preventDefault();
        let user = localStorage.getItem("user")
        
    }
    render() {
        return (
            <>
                <h3>Thông tin tài khoản</h3>

                    <div className="container formUser">
                        <div className="form-group add__account-form">
                            <label htmlFor="inputEmail4">Tên người nhận</label>
                            <input type="text" className="form-control" name="FullName" onChange={this.onChange} id="inputEmail4" placeholder="Nhập họ tên" />
                        </div>
                        <div className="form-group add__account-form-number ">
                            <label htmlFor="inputNumber4">Địa chỉ nhận</label>
                            <input type="text" className="form-control " name="Phone" onChange={this.onChange} placeholder="Nhập số điện thoại" />

                        </div>

                        <div className="form-group add__account-form" style={{ clear: 'both' }}>
                            <label htmlFor="inputEmail2">Email</label>
                            <input type="email" className="form-control" name="Email" onChange={this.onChange} id="inputEmail2" placeholder="Nhập email" />
                        </div>
                        <div className="form-group add__account-form">
                            <label htmlFor="inputPassword">Số điện thoại</label>
                            <input type="password" className="form-control" id="inputPassword" name="Password" onChange={this.onChange} placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                        </div>
                        <div className="form-group add__account-form">
                            <label htmlFor="inputPassword">Tổng tiền</label>
                            <input type="password" className="form-control" id="inputPassword" name="Password" onChange={this.onChange} placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                        </div>
                        <div className="form-group add__account-form">
                            <label htmlFor="inputPassword">Thao tác</label>
                            <input type="password" className="form-control" id="inputPassword" name="Password" onChange={this.onChange} placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                        </div>
                        <div className="form-group add__account-form">
                            <label htmlFor="customRadioInline">Hình thức thanh toán</label>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" value={0} id="customRadioInline1" onClick={this.onChange} name="Gender" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadioInline1">Nam</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" value={1} onClick={this.onChange} name="Gender" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customRadioInline2">Nữ</label>
                        </div>
                     
                    </div>
                    {/* <div className="form-group add__account-form">
                        <label htmlFor="inputCity">Ngày sinh</label>
                        <div className="form-row">
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Ngày</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Tháng</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Năm</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                </select>
                            </div>
                        </div>
                    </div> */}

                    <button onClick={this.onClick} className="btn btn-warning float-right">Cập nhật</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    thongTinTaiKhoan: state.userReducers.thongTinTaiKhoan
})
export default connect(mapStateToProps)(index);