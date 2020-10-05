
import Swal from 'sweetalert2';
import { createAction } from '.';
import { ProductsService, UserServices } from '../../Services';
import { DANHSACHUSER, THONGTINTAIKHOAN } from './type';
export const DangNhap = (data) => {

    UserServices.dangNhap(data).then(res => {

        if (res.data.status == false) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Sai mật khẩu",
                showConfirmButton: false,
                timer: 1200
            });
        } else {
            console.log(res.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Đăng nhập thành công ! ",
                showConfirmButton: false,
                timer: 1500
            });
            const user = JSON.stringify(res.data.data)
            console.log("user>", user);
            localStorage.setItem("user", user)
            window.location.reload(false);

        }
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
export const CapNhatThongTin = (token, data, id) => {


}
export const ThongTinTaiKhoan = (token) => {
    return dispatch => {
        UserServices.thongTinTaiKhoan(token).then(res => {
            dispatch(createAction(THONGTINTAIKHOAN, res.data.data.user))
            console.log("thongtinthanhcong");
        }).catch(err => {
            console.log("Errr", err);
        })
    }
}

export const DanhSachNguoiDung = ()=>{
    return dispatch=>{
        UserServices.danhSachNguoiDung().then(res=>{
            console.log("danhsachuser",res.data.data.users);
            dispatch(createAction(DANHSACHUSER,res.data.data.users))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const DangKy = (data) => {
    UserServices.dangKy(data).then(res => {
        console.log("thanhcong");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng ký thành công ! ',
            showConfirmButton: false,
            timer: 1500
        });
        window.location.reload(false);


    }).catch(err => {
        Swal.fire({
            position: 'center',
            showConfirmButton: false,
            icon: 'error',
            title: err.response.data.message,

            timer: 1200
        });
    })
}