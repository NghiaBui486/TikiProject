import { faBars, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Menu, Modal, Popover } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo1 from '../../asset/data/img/header-logo.png';
import iconmarketship from "../../asset/data/img/iconmarketship.png";
import logoSale from '../../asset/data/imgHeader/khuyenmaihot.png';
import logoMarket from '../../asset/data/imgHeader/market.png';
import uuDaiDoiTac from '../../asset/data/imgHeader/uudaidoitac.png';
import { DanhSachSanPhamTheoDanhMuc } from '../../Redux/Action/product';
import Model from '../Model';
import Sreach from '../Sreach';
import DanhMucCon from './DanhMucCon';
import DanhMucSanPham from './DanhMucSanPham';
import DoiTra from '../../asset/data/img/doitra.png'

// import { LOGINFACEBOOK } from '../../Redux/Action/type';

class index extends Component {
    componentDidMount() {
        // const user = JSON.parse(localStorage.getItem("user"))
        // if (user) {
        //     this.props.dispatch(ThongTinTaiKhoan(user.token))
        // }

    }
    componentWillUnmount(){
    }
    state = { visible: false };

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

    DangXuat = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");

        } else if (this.props.loginFacebook.name != "") {
            let obj = {}
            // this.props.dispatch(LOGINFACEBOOK, obj)
        }
        window.location.reload(false);

    }
    Reload = (link) => {

    }
    SreachTheoDanhMuc = (id) => {
        this.props.dispatch(DanhSachSanPhamTheoDanhMuc(id))
    }
    onClickLink = (link) => {
        this.props.history.push(`/sanpham/${link}`)
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        //////// SẢN PHẨM ĐÃ XEM ////////////
        let elementSanPham;
        let sanPham = localStorage.getItem("sanPham")
        if (sanPham) {
            let sanPhamObj = JSON.parse(sanPham)
            elementSanPham = sanPhamObj.map((item, index) => {
                if (index < 5) {
                    return (
                        <NavLink to={`/chitietsanpham/${item._id}`} onClick={this.Reload} className="col-6 col-md-4 col-lg-2" key={index}>
                            <img className="card-img-top" src={item.Image} alt />

                        </NavLink>
                    )
                }
            })

        }
        const text = <span className="text-center">Sản phẩm đã xem</span>;
        const content = (
            <div className="row">
                {elementSanPham ? elementSanPham.length > 5 ?
                    /// NẾU SẢN PHẨM NHIỀU HƠN 5
                    <>
                        {elementSanPham}
                        <NavLink to="/sanphamdaxem" style={{ height: "39px", marginLeft: "30px", marginTop: "40px" }} className="btn btn-outline-primary">Xem tất cả</NavLink>
                    </>
                    :
                    ////// sản phẩm ít hơn 5
                    <>
                        {elementSanPham}
                    </>
                    : <>
                        <p className="viewSanPham">&nbsp; &nbsp; &nbsp;Bạn chưa xem sản phẩm nào.
                    Hãy tiếp tục khám phá QT-Data, các sản phẩm bạn đã xem sẽ hiển thị ở đây!</p>
                    </>}
            </div>
        );
        ////////////////////////// KIỂM TRA XEM NGƯỜI DÙNG CÓ ĐĂNG NHẬP HAY CHƯA ///////////////////////////////
        let showLogin
        //////////////// KIỂM TRA NGƯỜI DÙNG CÓ ĐĂNG NHẬP TÀI KHOÀN WEBSITE NÀO //////////////////////////
        let user = localStorage.getItem("user")

        ///////////////////// tài khoản của website ///////////////////
        if (user) {
            user = JSON.parse(localStorage.getItem("user"))
            showLogin = <>
                <div className="dropdown login item">
                    <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p>
                            <span> Chào {this.props.user.FullName}</span><br></br>
                            <small>Tài khoản</small>
                        </p>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink to="/user" className="dropdown-item">Thông tin tài khoản</NavLink>

                        <a className="dropdown-item view" href="#">Email : {this.props.user.Email}</a>
                        <a className="dropdown-item view" href="#">Điện thoại : {this.props.user.Phone}</a>
                        <a className="dropdown-item" onClick={this.DangXuat} href="#">Đăng xuất</a>

                    </div>
                </div>
            </>
        }
        ///////////////////// tài khoản của facebook ///////////////////

        // else if (this.props.loginFacebook.status != "unknown") {
        //     showLogin = <>
        //         <div className="dropdown login item">
        //             <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                 <p>
        //                     <span> Chào {this.props.loginFacebook.name}</span><br></br>
        //                     <small>Tài khoản</small>
        //                 </p>
        //             </div>
        //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //                 <a className="dropdown-item" href="#">Thông tin tài khoản</a>

        //                 <a className="dropdown-item view" href="#">Tài khoản : {this.props.user.Username}</a>
        //                 <a className="dropdown-item view" href="#">Email : {this.props.user.Email}</a>
        //                 <a className="dropdown-item view" href="#">Điện thoại : {this.props.user.Phone}</a>
        //                 <a className="dropdown-item" onClick={this.DangXuat} href="#">Đăng xuất</a>

        //             </div>
        //         </div>
        //     </>
        // }

        ///////////////////// Chưa đăng nhập ///////////////////

        else {
            showLogin = <Model />

        }



        function handleClick(e) {
            console.log('click', e);
        }

        const { SubMenu } = Menu;
        ////// Danh mục ///////////////
        const danhMucSanPham = this.props.danhMucSanPham?.map((item, index) => {
            return (

                <a href={`sanpham/danhmuc/${item.Title}/${item._id}`} key={index}>
                    <Menu onClick={handleClick} style={{ width: 256, height: 35 }} mode="vertical">
                        <SubMenu key="sub4"

                            con={
                                <img src={item.Icon}
                                    width={18} className="mr-1" alt="test" />
                            } title={
                                item.Title
                            }>

                            <DanhMucCon ListSubCategory={item.ListSubCategory} MenuItem={<Menu.Item></Menu.Item>} />

                        </SubMenu>
                    </Menu>
                </a >
            )
        })
        ///////////////////////////////// renderrr/////////////////////
        const height = 35 * this.props.danhMucSanPham.length
        const link = window.location.href
        
        console.log("daxem",this.props.danhSachSanPhamDaXem);
        return (
            //// HEADER //////
            <>

                <section className="container-fuild header">
                    <div className="headerTop ">
                        <div className="text-HeaderTop container row">

                            <NavLink to="/movie"  >
                                <img src={uuDaiDoiTac} alt="test" width={18} style={{ marginRight: 4 }} />
                            Ưu đãi đối tác
                         </NavLink>
                            <NavLink to="/khuyenmai" onClick={this.Reload} >
                                <img src={logoSale} width={18} alt="test" style={{ marginRight: 4 }} />
                            Khuyến mãi HOT
                         </NavLink>
                            <NavLink to="/dangkybanhang" >
                                <img src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png" alt="test" width={18} style={{ marginRight: 4 }} />
                            Bán hàng cùng QT-Data
                             </NavLink>
                            {/* <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />
                            Trợ lý Tiki
                            </a>
                        <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Ưu đãi đối tác
                        </a>
                        <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Đặt vé máy bay
                        </a>
                        <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Khuyến mãi HOT
                        </a>
                        <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Hàng quốc tế
                        </a>
                        <a href="/">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Bán hàng cùng Tiki
                        </a> */}
                        </div>
                    </div>
                    <div className="container headerMid">
                        <div className="midLeft row">
                            <div className="logo col-12 col-md-2 col-lg-1">

                                <NavLink to="/" onClick={this.Reload}>
                                    <img src={Logo1} height={33} alt="test" />
                                </NavLink>
                            </div>
                            <div className="form-sreach col-12 col-md-10 col-lg-6 mt-3" >
                                <Sreach />
                            </div>
                            <div className="header-link col-12 col-md-10 col-lg-5 mt-2">
                                <NavLink to="# " className="item">
                                    <i className="icon-tracking"></i>
                                Theo dõi <br></br>
                                đơn hàng
                            </NavLink>
                                <NavLink to="# " className="item">
                                    <i className="icon-tracking"></i>
                                Thông báo <br></br>
                                của tôi
                            </NavLink>

                                {/* MODEL */}
                                {showLogin}


                                <div className="header-cart">
                                    <NavLink to="/giohang" onClick={this.Reload} className="item">
                                        <i class="fa fa-shopping-cart"></i>
                                    Giỏ hàng
                                    <span className="card-count" style={{
                                            background: "rgb(253, 216, 53)",
                                            color: "rgb(74, 74, 74)",
                                            textAlign: "center",
                                            fontSize: "12px",
                                            marginLeft: "9px",
                                            height: "20px",
                                            lineHeight: "20px",
                                            padding: "0px 6px"
                                        }}>
                                            {this.props.danhSachGioHangTheoUser.ListProduct?.length > 0 ? this.props.danhSachGioHangTheoUser.ListProduct.length : 0}
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerBottom container">
                        <div className="row">
                            <div className="menu col-12 col-md-6 col-lg-2">
                                <div type="button" className="btn btn-primary dropdown-toggle" style={{ background: "none", border: "none" }} id="dropdownMenuOffset" data-toggle="dropdown">
                                    <FontAwesomeIcon icon={faBars} /> Danh mục sản phẩm
                                 </div>
                                <DanhMucSanPham />
                            </div>
                            <div className="viTri col-12 col-md-6 col-lg-2" style={{ margin: "0" }}>
                                <Button type="primary" style={{ padding: 0, boxShadow: "none" }} className=" viTriGiaoHang" onClick={this.showModal}>
                                    &nbsp;
                                    &nbsp;
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "red" }} />
                                &nbsp;
                                <span>Bạn muốn giao hàng tới đâu</span>

                                </Button>
                                <Modal
                                    title="Basic Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <p>Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng phí đóng gói, vận chuyển một
                                                cách chính xác nhất.</p>
                                    <div className="button-sign">
                                        <Model />
                                        <div className="text_sign d-flex">
                                            <p>hoặc</p>
                                        </div>
                                    </div>
                                    <div className="form-check check-sign_form">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Chọn khu vực giao hàng
            </label>
                                    </div>
                                    <form className="form-sign_in">
                                        <div className="form-group row">
                                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Tỉnh/Thành phố</label>
                                            <div className="col-sm-9">
                                                <select id="inputState" className="form-control">
                                                    <option selected>Vui lòng chọn tỉnh/thành phố</option>
                                                    <option>Hồ Chí Minh</option>
                                                    <option>Hà Nội</option>
                                                    <option>Đà Nẵng</option>
                                                    <option>An Giang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <fieldset disabled>
                                            <div className="form-group row">
                                                <label htmlFor="disabledTextInput" className="col-sm-3 col-form-label">Quận/Huyện</label>
                                                <div className="col-sm-9">
                                                    <select id="disabledSelect" className="form-control">
                                                        <option>Vui lòng chọn quận/huyện</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="disabledTextInput" className="col-sm-3 col-form-label">Phường/Xã</label>
                                                <div className="col-sm-9">
                                                    <select id="disabledSelect" className="form-control">
                                                        <option>Vui lòng chọn phường/xã</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </Modal>
                            </div>
                            <div style={{ paddingTop: "0px" }} className="sanPhamDaXem col-12 col-md-6 col-lg-2">
                                <Popover placement="bottom" title={text} content={content} trigger="click">
                                    <Button>Sản phẩm bạn đã xem</Button>
                                </Popover>
                            </div>
                            <div className="link col-12 col-md-6 col-lg-6">
                                <a href="/movie" onClick={this.Reload}>
                                    <img src={iconmarketship} alt="test" />
                                    <span>Giao hàng</span>
                                </a>
                                <a href="/sanphammoi" onClick={this.Reload}>
                                    <img src={logoMarket} alt="test" />
                                    <span>
                                        Sản phẩm Mới
                                </span>
                                </a>
                                <a href="/doitra">
                                    <img src={DoiTra} alt="test" />
                                    <span>
                                        Đổi trả
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </>
        );
    }
}
const mapStateToProps = state => ({
    user: state.userReducers.thongTinTaiKhoan,
    loginFacebook: state.userReducers.loginFacebook,
    thongTinTaiKhoan: state.userReducers.thongTinTaiKhoan,
    danhMucSanPham: state.productReducers.danhMucSanPham,
    danhSachSanPhamDaXem: state.productReducers.danhSachSanPhamDaXem,

    danhSachGioHangTheoUser: state.shoppingcartReducers.danhSachGioHangTheoUser,


})
export default connect(mapStateToProps)(index);