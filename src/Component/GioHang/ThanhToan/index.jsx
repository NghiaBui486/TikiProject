import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import logo from '../../../asset/data/img/FONT-3.png';
import hotline from '../../../asset/data/img/hotline.png';
import { ShopingServices } from '../../../Services';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            now: new Date(),
            Payment: "",
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
    giaoHang = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state.Payment);
        })
    }
    onClick = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))

        const data = {
            ...this.props.thongTinGiaoHang,

            IdCart: this.props.danhSachGioHangTheoUser._id,
            Products: this.props.danhSachGioHangTheoUser.ListProduct,
            UserId: this.props.thongTinTaiKhoan._id,
            Price: this.props.danhSachGioHangTheoUser.SubPrice,
            Payment: this.state.Payment,
            Email : user.user.Email
        }
        console.log(data,"email");
        ShopingServices.oderGioHang(data,user.token).then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Thanh toán thành công ! ",
                showConfirmButton: false,
                timer: 1500
            });
            this.props.history.push("/user/quanlydonhang")
            window.location.reload(false);
        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    render() {
        const nextDay = new Date(this.state.now.getFullYear(), this.state.now.getMonth(), this.state.now.getDate() + 2)
        let str = ` ${nextDay}`
        const elementOder = this.props.danhSachGioHangTheoUser.ListProduct?.map((item, index) => {
            let gia = item.Quantity
            let tongTien = item.Quantity * item.Price

            return (
                <div className="sanPham" key={index}>
                    <div className="flex">
                        <div className="info">
                            {gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}x &nbsp; {item.Name}
                        </div>
                        <div className="price">
                            {tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                    </div>
                </div>
            )
        })
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
                                        <div className="fill-color" style={{ width: "100%" }} />
                                    </div>
                                    <div className="circle">2</div>
                                </div>

                                <div className="bar-progress_3">
                                    <div className="text">Thanh toán &amp; Đặt mua</div>
                                    <div className="progress_bar" style={{ margin: 0 }} role="progressbar">
                                        <div className="fill-color" style={{ background: "#006d90", width: "100%" }} />
                                    </div>
                                    <div className="circle" style={{ background: "#006d90", color: "white" }}>3</div>
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
                        <div className=" formUser mb-3 py-5">
                            <div className="row test">

                                <div className="col-12 col-md-8">
                                    <div className="main-address_text">
                                        <h3 className="title">2. Địa chỉ giao hàng</h3>
                                        <p className="text">Chọn địa chỉ giao hàng có sẵn bên dưới:</p>
                                        <div className="address-text_list">
                                            <p className="name">{this.props.thongTinGiaoHang.Name}</p>
                                            <p className="address">Địa chỉ: {this.props.thongTinGiaoHang.Address}</p>
                                            <p className="address">Việt Nam</p>
                                            <p className="phone">Điện thoại: {this.props.thongTinGiaoHang.Phone}</p>

                                            <span className="defaut-title">Mặc định</span>
                                        </div>
                                       Ngày giao hàng : {str}

                                        <p className="title-address_custom">Bạn muốn giao hàng đến địa chỉ khác? <a href="/">Thêm địa chỉ giao hàng mới</a></p>
                                    </div>
                                    <div className="bg-left">
                                        <h4>Hình thức thanh toán</h4>
                                        <form action="">
                                            <input type="radio" value="Giao Hàng" name="Payment" onClick={this.giaoHang} /> &nbsp;
                                      Thanh toán tiền mặt khi nhận hàng
                                        </form>

                                    </div>
                                </div>
                                <div className="col-12 col-md-4 tinhTien">
                                    <div className="title">
                                        <span>Đơn hàng (0 sản phẩm)</span>
                                        <button>Sửa</button>
                                    </div>
                                    <div className="oder">
                                        {/* <div className="sanPham">
                                            <div className="flex">
                                                <div className="info">
                                                    dây sạc
                                             </div>
                                                <div className="price">
                                                    100.000 đ
                                               </div>
                                            </div>
                                        </div> */}
                                        {elementOder}
                                        <div className="total">
                                            {/* <div className="tamTinh">
                                                <div className="inlineFlex">
                                                    <div className="name">
                                                        Tạm tính
                                                </div>
                                                    <div className="value">
                                                        2.585.222 đ
                                                </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="tamTinh">
                                                <div className="inlineFlex">
                                                    <div className="name">
                                                        Phí vận chuyễn
                                                </div>
                                                    <div className="value">
                                                        4.000 đ
                                                </div>
                                                </div>
                                            </div> */}
                                            <div className="thanhToan">
                                                <div className="name">
                                                    <b>Thành tiền</b>
                                                </div>
                                                <div className="value">
                                                    {this.props.danhSachGioHangTheoUser
                                                        .SubPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    <i>
                                                        (Đã bao gồm VAT nếu có)
                                                    </i>
                                                </div>
                                            </div>
                                            <button className="btn btn-danger float-right mt-3" onClick={this.onClick} >Thanh toán</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
    thongTinGiaoHang: state.shoppingcartReducers.thongTinGiaoHang
})
export default connect(mapStateToProps)(index);