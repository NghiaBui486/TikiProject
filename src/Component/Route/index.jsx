import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import Component from './Component';
import Admin from './Component/Admin';
import DanhSachDanhMucSanPham from './Component/Admin/Page/DanhSachDanhMuc';
import ThemDanhMuc from './Component/Admin/Page/DanhSachDanhMuc/ThemDanhMuc';
import DanhSachUser from './Component/Admin/Page/DanhSachUser';
import SuaNguoiDung from './Component/Admin/Page/DanhSachUser/SuaThongTin';
import ThemUser from './Component/Admin/Page/DanhSachUser/ThemUser';
import DanhSachPhim from './Component/Admin/Page/Phim';
import SanPham from './Component/Admin/Page/SanPham';
import SuaSanPham from './Component/Admin/Page/SanPham/SuaSanPham';
import ThemSanPham from './Component/Admin/Page/SanPham/ThemSanPham';
import ThemPhim from './Component/Admin/Page/ThemPhim';
import TrangChuAdmin from './Component/AdminBanHang';
import DangKyBanHang from './Component/AdminBanHang/FormDangKy';
import DonHang from './Component/AdminUser/DonHang';
import QuanLyDonHangCom from './Component/AdminUser/QuanLyDonHang';
import AddDiaChi from './Component/EditUser/DiaChi';
import User from './Component/EditUser/ThongTinTaiKhoan';
import GioHang from './Component/GioHang';
import Oder from './Component/GioHang/Oder';
import ThanhToan from './Component/GioHang/ThanhToan';
import BanHang from './Component/Screens/BanHang';
import KhuyenMai from './Component/Screens/KhuyenMaiHot';
import PageSanPham from './Component/Screens/SanPham';
import SanPhamMoi from './Component/Screens/SanPhamMoi';
import SanPhamDaXem from './Component/ShowSanPhamDaXem';
import Test from './Component/Test/Content';
import { DanhMucSanPham, DanhSachSanPham, DanhSachSanPhamPhanTrang } from './Redux/Action/product';
import { LayDanhSachGioHangUser, QuanLyDonHang } from './Redux/Action/shopingcart';
import { DanhSachNguoiDung, ThongTinTaiKhoan } from './Redux/Action/user';
import { AdminBanHangTemplate } from './Template/AdminBanHangTemplate/index';
import { AdminTemplate } from './Template/AdminTemplate';
import { HomeTemplate } from './Template/HomeTemplate';
import { UserTemplate } from './Template/UserTemplate';
class App extends Component {
    render() {
        return (
            <>



                        <HomeTemplate path="/giohang" exact Component={GioHang} /> 
                        <HomeTemplate path="/sanphamdaxem" exact Component={SanPhamDaXem} />
                        <Route path="/banhang" exact component={BanHang} />
                        <HomeTemplate path="/sanpham" exact Component={PageSanPham} />
                        <HomeTemplate path="/sanpham/danhmuc/:title/:id" exact Component={PageSanPham} />
                        <HomeTemplate path="/sanpham/sreach/:keyWord" exact Component={PageSanPham} />
                        <HomeTemplate path="/khuyenmai" exact Component={KhuyenMai} />
                        <Route path="/checkout/oder" exact component={Oder} />
                        <Route path="/dangkybanhang" exact component={DangKyBanHang} />
                        <Route path="/checkout/thanhtoan" exact component={ThanhToan} />
                        <UserTemplate path="/user" exact Component={User} />
                        <UserTemplate path="/diachi" exact Component={AddDiaChi} />
                        <HomeTemplate path="/test" exact Component={Test} />
                        <HomeTemplate path="/sanphammoi" exact Component={SanPhamMoi} />
                        <UserTemplate path="/user/quanlydonhang" exact Component={QuanLyDonHangCom} />
                        <UserTemplate path="/user/thongtindonhang/:_id" exact Component={DonHang} />
                        <AdminTemplate path="/admin/themdanhmuc" exact Component={ThemDanhMuc} />
                        <AdminTemplate path="/admin/themuser" exact Component={ThemUser} />
                        <AdminTemplate path="/admin/themsanpham" exact Component={ThemSanPham} />
                        <AdminTemplate path="/admin/suasanpham/:id" Component={SuaSanPham} />
                        <AdminTemplate path="/admin/danhsachuser" Component={DanhSachUser} />
                        <AdminBanHangTemplate path="/adminbanhang/trangchu" exact Component={TrangChuAdmin} />
                        <AdminTemplate path="/admin/themphim" Component={ThemPhim} />
                        <AdminTemplate path="/admin" exact Component={Admin} />
                        <AdminTemplate path="/admin/danhsachphim" exact Component={DanhSachPhim} />
                        <AdminTemplate path="/admin/danhsachsanpham" exact Component={SanPham} />
                        <AdminTemplate path="/admin/danhsachdanhmuc" exact Component={DanhSachDanhMucSanPham} />
                        <AdminTemplate path="/admin/suanguoidung/:id" exact Component={SuaNguoiDung} />

            </>

        );
    }
    componentDidMount() {
        this.props.dispatch(DanhMucSanPham())
        this.props.dispatch(DanhSachSanPham())
        this.props.dispatch(DanhSachNguoiDung())
        this.props.dispatch(DanhSachSanPhamPhanTrang(8, 1))

        let user = localStorage.getItem("user")
        if (user) {
            let userObj = JSON.parse(user)
            this.props.dispatch(ThongTinTaiKhoan(userObj?.token))
            this.props.dispatch(LayDanhSachGioHangUser(userObj?.user.id))
            this.props.dispatch(QuanLyDonHang(userObj?.user.id))

        }

    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(App);