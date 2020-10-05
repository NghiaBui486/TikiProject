import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
import CapNhatThongTinBanHang from './Component/AdminBanHang/CapNhatThongTinBanHang';
import DangNhapBanHang from './Component/AdminBanHang/DangNhapBanHang';
import DangKyBanHang from './Component/AdminBanHang/FormDangKy';
import ShopSanPham from './Component/AdminBanHang/ShopSanPham';
import ThemSanPhamBanHang from './Component/AdminBanHang/ShopSanPham/ThemSanPham';
import DonHang from './Component/AdminUser/DonHang';
import QuanLyDonHangCom from './Component/AdminUser/QuanLyDonHang';
import ChiTietPhim from './Component/ChiTietPhim';
import ChiTietSanPham from './Component/ChiTietSanPham';
import DoiTra from './Component/DoiTra';
import AddDiaChi from './Component/EditUser/DiaChi';
import User from './Component/EditUser/ThongTinTaiKhoan';
import GioHang from './Component/GioHang';
import GioHangRong from './Component/GioHang/GioHangRong';
import Oder from './Component/GioHang/Oder';
import ThanhToan from './Component/GioHang/ThanhToan';
import BanHang from './Component/Screens/BanHang';
import KhuyenMai from './Component/Screens/KhuyenMaiHot';
import HomeMovie from './Component/Screens/Movie';
import PageSanPham from './Component/Screens/SanPham';
import SanPhamMoi from './Component/Screens/SanPhamMoi';
import ScrollToTop from './Component/ScrollToTop';
import SanPhamDaXem from './Component/ShowSanPhamDaXem';
import Test from './Component/Test/Content';
import { DanhMucSanPham, DanhSachSanPham, DanhSachSanPhamPhanTrang, SaveDanhMucCon } from './Redux/Action/product';
import { LayDanhSachGioHangUser, QuanLyDonHang } from './Redux/Action/shopingcart';
import { DanhSachNguoiDung, ThongTinTaiKhoan } from './Redux/Action/user';
import { AdminBanHangTemplate } from './Template/AdminBanHangTemplate/index';
import { AdminTemplate } from './Template/AdminTemplate';
import { HomeTemplate } from './Template/HomeTemplate';
import { UserTemplate } from './Template/UserTemplate';
import TatCaSanPham from './Component/Screens/TatCaSanPham'
import ThongBao from './Component/EditUser/ThongBao';
import NhanXetCuaToi from './Component/EditUser/NhatXetCuaToi';
import NhatXetSanPhamDaMua from './Component/EditUser/NhanXetSanPhamDaMua';
import HoiDap from './Component/EditUser/HoiDap';
import SanPhamMuaSau from './Component/EditUser/SanPhamMuaSau';
import SanPhamYeuThich from './Component/EditUser/SanPhamYeuThich';
import ThongTinThanhToan from './Component/EditUser/ThongTinThanhToan'
import SanPhamDaXemUser from './Component/EditUser/SanPhamDaXem';
import ThayDoiDonHang from './Component/AdminUser/QuanLyDonHang/Update'
import Header from './Component/Header'
class App extends Component {
  render() {
    let render
    if (localStorage.getItem("user")) {
      console.log(this.props.thongTinTaiKhoan, "admintaikhoan");
      if (this.props.thongTinTaiKhoan.Role == "admin") {
        render =
          <>
            <HomeTemplate path="/giohang" exact Component={GioHang} />
            <Route path="/checkout/oder" exact component={Oder} />
            <Route path="/dangkybanhang" exact component={DangKyBanHang} />
            <Route path="/checkout/thanhtoan" exact component={ThanhToan} />
            <UserTemplate path="/user" exact Component={User} />
            <UserTemplate path="/diachi" exact Component={AddDiaChi} />
            <AdminTemplate path="/admin/suasanpham/:id" Component={SuaSanPham} />
            <AdminTemplate path="/admin/danhsachuser" Component={DanhSachUser} />
            <AdminTemplate path="/admin/themphim" Component={ThemPhim} />
            <AdminTemplate path="/admin" exact Component={Admin} />
            <AdminTemplate path="/admin/danhsachphim" exact Component={DanhSachPhim} />
            <AdminTemplate path="/admin/danhsachsanpham" exact Component={SanPham} />
            <AdminTemplate path="/admin/danhsachdanhmuc" exact Component={DanhSachDanhMucSanPham} />
            <AdminTemplate path="/admin/suanguoidung/:id" exact Component={SuaNguoiDung} />
            <UserTemplate path="/user/quanlydonhang" exact Component={QuanLyDonHangCom} />
            <UserTemplate path="/user/thongtindonhang/:_id" exact Component={DonHang} />
            <UserTemplate path="/user/thongbao" exact Component={ThongBao} />
            <AdminTemplate path="/admin/themdanhmuc" exact Component={ThemDanhMuc} />
            <AdminTemplate path="/admin/themuser" exact Component={ThemUser} />
            <UserTemplate path="/user/nhanxetcuatoi" exact Component={NhanXetCuaToi} />
            <UserTemplate path="/user/nhanxetsanphamdamua" exact Component={NhatXetSanPhamDaMua} />
            <UserTemplate path="/user/hoidap" exact Component={HoiDap} />
            <UserTemplate path="/user/sanphammuasau" exact Component={SanPhamMuaSau} />
            <UserTemplate path="/user/sanphamyeuthich" exact Component={SanPhamYeuThich} />
            <UserTemplate path="/user/thongtinthanhtoan" exact Component={ThongTinThanhToan} />
            <UserTemplate path="/user/sanphamdaxem" exact Component={SanPhamDaXemUser} />
            <UserTemplate path="/user/thaydoithongtin/:id" exact Component={ThayDoiDonHang} />
          </>
      }
      else if (this.props.thongTinTaiKhoan.Role == "user") {
        render =
          <>
            <HomeTemplate path="/giohang" exact Component={GioHang} />
            <Route path="/checkout/oder" exact component={Oder} />
            <Route path="/checkout/thanhtoan" exact component={ThanhToan} />
            <UserTemplate path="/user" exact Component={User} />
            <UserTemplate path="/diachi" exact Component={AddDiaChi} />
            <AdminBanHangTemplate path="/adminbanhang/trangchu" exact Component={TrangChuAdmin} />
            <AdminBanHangTemplate path="/adminbanhang/themsanpham" exact Component={ThemSanPhamBanHang} />
            <UserTemplate path="/user/quanlydonhang" exact Component={QuanLyDonHangCom} />
            <UserTemplate path="/user/thongtindonhang/:_id" exact Component={DonHang} />
            <UserTemplate path="/user/nhanxetcuatoi" exact Component={NhanXetCuaToi} />
            <UserTemplate path="/user/nhanxetsanphamdamua" exact Component={NhatXetSanPhamDaMua} />
            <UserTemplate path="/user/hoidap" exact Component={HoiDap} />
            <UserTemplate path="/user/sanphammuasau" exact Component={SanPhamMuaSau} />
            <UserTemplate path="/user/sanphamyeuthich" exact Component={SanPhamYeuThich} />
            <UserTemplate path="/user/thongtinthanhtoan" exact Component={ThongTinThanhToan} />
            <UserTemplate path="/user/sanphamdaxem" exact Component={SanPhamDaXemUser} />
            <UserTemplate path="/user/thongbao" exact Component={ThongBao} />


          </>

      }

    } else {
      render =
        <>
          <HomeTemplate path="/giohang" exact Component={GioHangRong} />

        </>
    }
    return (
      <>
        <ScrollToTop >
          <Switch>
            <HomeTemplate path="/tatcasanpham" exact Component={TatCaSanPham} />

            <HomeTemplate path="/" exact Component={Component} />
            <AdminBanHangTemplate path="/adminbanhang/capnhatthongtin" exact Component={CapNhatThongTinBanHang} />
            <AdminBanHangTemplate path="/adminbanhang/trangchu" exact Component={TrangChuAdmin} />
            <AdminBanHangTemplate path="/adminbanhang/sanpham" exact Component={ShopSanPham} />
            <AdminBanHangTemplate path="/adminbanhang/themsanpham" exact Component={ThemSanPhamBanHang} />
            <HomeTemplate path="/test" exact Component={Test} />
            <HomeTemplate path="/chitietsanpham/:id" exact Component={ChiTietSanPham} />
            <HomeTemplate path="/movie" exact Component={HomeMovie} />
            <HomeTemplate path="/movie/chitietphim/:id" exact Component={ChiTietPhim} />
            <Route path="/doitra" exact component={DoiTra} />
            <Route path="/dangnhapbanhang" exact component={DangNhapBanHang} />
            <HomeTemplate path="/sanphamdaxem" exact Component={SanPhamDaXem} />
            <Route path="/banhang" exact component={BanHang} />
            <HomeTemplate path="/sanpham" exact Component={PageSanPham} />
            <HomeTemplate path="/sanpham/danhmuc/:title/:id" exact Component={PageSanPham} />
            <HomeTemplate path="/sanpham/sreach/:keyWord" exact Component={PageSanPham} />
            <HomeTemplate path="/khuyenmai" exact Component={KhuyenMai} />
            <HomeTemplate path="/sanphammoi" exact Component={SanPhamMoi} />
            <Route path="/dangkybanhang" exact component={DangKyBanHang} />

            {render}


          </Switch>
        </ScrollToTop>
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
      console.log("userrr", userObj);
      this.props.dispatch(ThongTinTaiKhoan(userObj?.token))
      this.props.dispatch(QuanLyDonHang(userObj?.user._id))
      this.props.dispatch(SaveDanhMucCon("5f60727110312900173437a0"))
      this.props.dispatch(LayDanhSachGioHangUser(userObj?.user._id, userObj?.token))

    }
    let banHang = localStorage.getItem('banHang')
    if (banHang) {

    }
  }
}
const mapStateToProps = state => ({
  thongTinTaiKhoan: state.userReducers.thongTinTaiKhoan
})
export default connect(mapStateToProps)(App);