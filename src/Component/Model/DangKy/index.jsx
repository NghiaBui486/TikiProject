import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { DangKy } from '../../../Redux/Action/user';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: "",

            Password: "",
            Phone: "",
            Email: "",
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


    onClickDangKy = (e) => {
        e.preventDefault();
        let messenger, validation
        validation = /^\d{10}$/
        if (this.state.Phone.match(/^\d{10}$/)) {
            // messenger = true
            DangKy(this.state)

        } else {
            messenger = "Số điện thoại không hợp lệ"
            Swal.fire({
                title : messenger,
                time : 1200,
                icon : "error",
                position: 'center',
                showConfirmButton: true,
            })
        }

    }
    render() {
        return (
            <form>
                <div className="form-group add__account-form">
                    <label htmlFor="inputEmail4">Họ tên</label>
                    <input type="text" className="form-control " value={this.state.FullName} onChange={this.onChange} name="FullName" id="inputEmail4" placeholder="Nhập họ tên" />
                </div>
                <div className="form-group add__account-form">
                    <label htmlFor="inputEmail2">Số điện thoại</label>
                    <input type="text" className="form-control" id="inputEmail2" value={this.state.Phone} onChange={this.onChange} name="Phone" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group add__account-form">
                    <label htmlFor="inputEmail2">Email</label>
                    <input type="email" className="form-control" id="a" value={this.state.Email} onChange={this.onChange} name="Email" placeholder="Nhập email" />
                </div>
                <div className="form-group add__account-form">
                    <label htmlFor="inputPassword">Mật khẩu</label>
                    <input type="password" className="form-control" id="inputPassword" name="Password" value={this.state.Password} onChange={this.onChange} placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                </div>
                <div className="form-group add__account-form">
                    <label htmlFor="customRadioInline">Giới tính</label>
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

                <button onClick={this.onClickDangKy} className="btn btn--yellow-1 btn-info">Tạo tài khoản</button>
            </form>
        );
    }
}

export default index;