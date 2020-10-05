import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DangNhapBanHangAdmin } from '../../../../Redux/Action/shopbanhang';
import style from '../Mid/css.module.css';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Email: "",
            Password: ""
        }
    }

    onChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClick = (e) => {
        e.preventDefault();
        const data = {
            Email: this.state.Email,
            Password: this.state.Password
        }
        this.props.dispatch(DangNhapBanHangAdmin(data))
        setTimeout(() => {
            let adminBanHang = localStorage.getItem('banHang')

            if (adminBanHang) {
                this.props.history.push('/adminbanhang/trangchu')
            }

        }, 500)

    }
    render() {
        return (
            <div>

                <div className={style.mid}>
                    <h2 className={style.title}>Đăng nhập bán hàng</h2>
                    <form action="" className={style.loginForm} style={{ background: "white" }}>
                        <div className="form-group">
                            <input type="text" name="Email" onChange={this.onChange} placeholder="Tài khoản Shop bán hàng, Email hoặc số điện thoại" className={style.form} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="Password" onChange={this.onChange} placeholder="Mật khẩu" className={style.form} />
                        </div>
                        <div className="form-group">
                            <button className={style.btn} style={{ background: "rgb(24, 158, 255);" }} onClick={this.onClick}>Đăng nhập</button>
                        </div>
                        <div className={style.def}>
                            <p className={style.span}>Hoặc</p>
                        </div>
                        <div className="form-group">
                            <button style={{ background: "#282525", marginTop: "0px" }} className={style.btn}>Tạo tài khoản mới</button>
                        </div>
                    </form>
                    <div className="text-center mt-5">
                        <a href="# " style={{ fontSize: "12px" }} >Quên mật khẩu?</a>

                    </div>
                </div>

            </div >
        );
    }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(index);