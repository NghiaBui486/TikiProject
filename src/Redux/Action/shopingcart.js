import Swal from "sweetalert2";
import { createAction } from ".";
import { ShopingServices } from "../../Services";
import { DANHSACHGIOHANGTHEOUSER, DONHANG, QUANLYDONHANG } from "./type";





export const XoaDanhGioHang = (data, token) => {
    return dispatch => {
        ShopingServices.xoaGioHang(data, token).then(res => {
            dispatch(createAction(DANHSACHGIOHANGTHEOUSER, res.data.data.ListProduct));
            window.location.reload(false);

        }).catch(err => {
            console.log(err);
        })
    }
}
export const ThemGioHang = (data, token) => {
    console.log("buoc 0");
    return dispatch => {
        console.log("buoc 1");
        ShopingServices.themGioHang(data, token).then(res => {
            console.log("them gio hangdddddddddddddddddd", res.data.data);
            dispatch(createAction(DANHSACHGIOHANGTHEOUSER, res.data.data))


            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Thêm giỏ hàng thành công ! ',
                showConfirmButton: false,
                timer: 1200
            });


        }).catch(err => {
            console.log(err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response?.data.message,
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
}
export const LayDanhSachGioHangUser = (id, token) => {
    return dispatch => {
        console.log("API giỏ hàng");
        ShopingServices.layDanhSachGioHangTheoUser(id, token).then(res => {
            console.log("redux", res.data.data.ListProduct);
            dispatch(createAction(DANHSACHGIOHANGTHEOUSER, res.data.data))
        }).catch(err => {
            console.log("kthanhcong");
            console.log("al", err);
        })
    }
}
export const QuanLyDonHang = (id, token) => {
    return dispatch => {
        ShopingServices.quanLyDonHang(id, token).then(res => {
            console.log(res.data);

            dispatch(createAction(QUANLYDONHANG, res.data.data))
        }).catch(err => {
            console.log(err);
        })
    }
}
export const DonHang = (url) => {
    return dispatch => {
        ShopingServices.donHang(url).then(res => {
            console.log(res.data);

            dispatch(createAction(DONHANG, res.data.data))
        }).catch(err => {
            console.log(err);
        })
    }
}