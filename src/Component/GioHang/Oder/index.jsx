import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../../asset/data/img/FONT-3.png';
import hotline from '../../../asset/data/img/hotline.png';
import { createAction } from '../../../Redux/Action';
import { THONGTINGIAOHANG } from '../../../Redux/Action/type';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {


            Name: "",
            Phone: "",
            Address: "",


        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    onChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value,

        }, () => {
            // console.log(this.state.oder);
        })
    }
    onClick = (e) => {
        e.preventDefault();
        const data = {
            ...this.state,
            //  IdCart : this.props.danhSachGioHangTheoUser._id ,
            //  Products : this.props.danhSachGioHangTheoUser.ListProduct,
            //  UserId : this.props.thongTinTaiKhoan._id
        }

        this.props.dispatch(createAction(THONGTINGIAOHANG, data))
        this.props.history.push("thanhtoan")
    }
    render() {
        // const nextDay = new Date(this.state.now.getFullYear(), this.state.now.getMonth(), this.state.now.getDate() + 2)
        // let str = ` ${nextDay}`
        console.log("user", this.props.thongTinTaiKhoan);
        return (
            <div className="oder">
                <header className="header-shipping">
                    <div className="container header-col">
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-3 logo d-flex">
                                <a href="# " className="logo-shipping">
                                    <img src={logo} alt="test" />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 progress_custom d-flex">
                                <div className="bar-progress_1">
                                    <div className="text">Đăng nhập</div>
                                    <div className="progress_bar" role="progressbar">
                                        <div className="fill-color" />
                                    </div>
                                    <div className="circle">1</div>
                                </div>
                                <div className="bar-progress_2">
                                    <div className="text">Địa chỉ giao hàng  </div>
                                    <div className="progress_bar" role="progressbar">
                                        <div className="fill-color" />
                                    </div>
                                    <div className="circle">2</div>
                                </div>

                                <div className="bar-progress_3">
                                    <div className="text">Thanh toán &amp; Đặt mua</div>
                                    <div className="progress_bar" role="progressbar" style={{ margin: 0 }}>
                                        <div className="fill-color" />
                                    </div>
                                    <div className="circle">3</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 hotline d-flex">
                                <img src={hotline} alt="test" />
                            </div>
                        </div>
                    </div>
                </header>
                <section className="main-address">
                    <div className="container">
                        {/* <Button type="primary" onClick={this.showModal}>
                            Thêm thông tin
                                        </Button>
                        <Modal
                            title="Thông tin giao hàng"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <div className="container formUser mb-3">

                                <div className="form-group add__account-form">
                                    <label htmlFor="inputEmail4">Họ tên</label>
                                    <input type="text" className="form-control" name="FullName" onChange={this.onChange} id="inputEmail4" placeholder="Nhập họ tên" />
                                </div>
                                <div className="form-group add__account-form-number ">
                                    <label htmlFor="inputNumber4">SĐT</label>
                                    <input type="text" className="form-control " name="Phone" onChange={this.onChange} placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group add__account-form-number  " style={{ clear: "both" }}>
                                    <label htmlFor="inputNumber4">Địa chỉ</label>
                                    <textarea rows="4" cols="50" className="form-control " placeholder="Nhập đỉa chỉ giao hàng">

                                    </textarea>
                                </div>


                            </div>
                        </Modal> */}
                        {/* <div className="row">
                            <div className="main-address_text">
                                <h3 className="title">2. Địa chỉ giao hàng</h3>
                                <p className="text">Chọn địa chỉ giao hàng có sẵn bên dưới:</p>
                                <div className="address-text_list">
                                    <p className="name">Name Title</p>
                                    <p className="address">Địa chỉ: 205A Nguyễn Xí, Phường 26, Quận Bình Thạnh, Hồ Chí Minh</p>
                                    <p className="address">Việt Nam</p>
                                    <p className="phone">Điện thoại: 0123456789</p>
                                    <p className="button">
                                        <button type="button" className="btn btn--address_1">Giao đến địa chỉ này</button>

                                    </p>
                                    <span className="defaut-title">Mặc định</span>
                                </div>
                                Ngày giao hàng : {str}

                                <p className="title-address_custom">Bạn muốn giao hàng đến địa chỉ khác? <a href="/">Thêm địa chỉ giao hàng mới</a></p>
                            </div>
                        </div> */}
                        <div className="container formUser mb-3 py-5">
                            <form action="" className="w-50 pb-5" >
                                <div className="row">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor=""><b>Họ và tên  : </b></label>
                                    </div>
                                    <div className="col-12 col-md-9 ">
                                        <input className="form-control" name="Name" onChange={this.onChange} value={this.state.Name} type="text" placeholder="Nguyễn Văn A" />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor=""><b>Số điện thoại  : </b></label>
                                    </div>
                                    <div className="col-12 col-md-9 ">
                                        <input className="form-control" type="text" name="Phone" onChange={this.onChange} value={this.state.Phone} placeholder="Số điện thoại" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 col-md-3">
                                        <label htmlFor="" ><b>Địa chỉ  : </b></label>
                                    </div>
                                    <div className="col-12 col-md-9 ">
                                        <textarea rows="4" cols="50" className="form-control " onChange={this.onChange} value={this.state.Address} name="Address" placeholder="Nhập đỉa chỉ giao hàng">

                                        </textarea>
                                    </div>

                                </div>
                                {/* MODEL */}
                                {/* <div className="form-group add__account-form">
                                    <label htmlFor="inputEmail4">Họ tên</label>
                                    <input type="text" className="form-control" name="FullName" onChange={this.onChange} id="inputEmail4" placeholder="Nhập họ tên" />
                                </div>
                                <div className="form-group add__account-form-number ">
                                    <label htmlFor="inputNumber4">SĐT</label>
                                    <input type="text" className="form-control " name="Phone" onChange={this.onChange} placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group add__account-form-number  " style={{ clear: "both" }}>
                                    <label htmlFor="inputNumber4">Địa chỉ</label>
                                    <textarea rows="4" cols="50" className="form-control " placeholder="Nhập đỉa chỉ giao hàng">

                                    </textarea>
                                </div> */}
                                <button onClick={this.onClick} className="btn btn-primary float-right mt-3">Tiếp theo</button>

                            </form>

                        </div>

                    </div>
                </section>
                <footer className="footer-shipping">
                    <div className="container">
                        <p className="text-footer_shipping">
                            Bằng việc tiến hành Đặt Mua, khách hàng đồng ý với các Điều Kiện Giao Dịch Chung được ban hành bởi Marketplace:
      </p>
                        <p className="term">
                            <a href="/">Quy chế hoạt động</a>
                            <a href="/">Chính sách giải quyết khiếu nại</a> |
                            <a href="/">Chính sách bảo hành</a> |
                            <a href="/">Chính sách bảo mật thanh toán</a> |
                            <a href="/">Chính sách bảo mật thông tin cá nhân</a>
                        </p>
                        <p className="copyright">© 2019 - Bản quyền của Công Ty Cổ Phần Marketplace</p>
                    </div>
                </footer>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    thongTinTaiKhoan: state.userReducers.thongTinTaiKhoan,
    danhSachGioHangTheoUser: state.shoppingcartReducers.danhSachGioHangTheoUser,
})
export default connect(mapStateToProps)(index);