import Swal from "sweetalert2";
import { createAction } from ".";
import { ShopBanHangServices } from "../../Services";
import { DANGNHAPBANHANG, THEMSANPHAMBANHANG } from "./type";

export const DangNhapBanHangAdmin = (data) =>{
    return dispatch=>{
        ShopBanHangServices.dangNhap(data).then(res=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Đăng nhập thành công ! ",
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(createAction(DANGNHAPBANHANG,res.data.data.user))
            //console.log(res.data.data)
            let banHang = JSON.stringify(res.data.data)
            localStorage.setItem("banHang",banHang)

        }).catch(err=>{
            console.log("err",err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response?.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
}
