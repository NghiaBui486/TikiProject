import Swal from 'sweetalert2';
import { createAction } from ".";
import { MoviesServices } from "../../Services";
import { CHITIETPHIM, DANHSACHPHIM } from "./type";







export const DanhSachPhim = () => {
    return dispatch => {
        MoviesServices.danhSachPhim().then(res => {
            dispatch(createAction(DANHSACHPHIM, res.data))
        }).catch(err => {
        })
    }
}
export const ChiTietPhim = (id) => {
    return dispatch => {
        MoviesServices.chiTietPhim(id).then(res => {
            dispatch(createAction(CHITIETPHIM, res.data))
        }).catch(err => {
        })
    }
}
export const ThemPhim = (data)=>{
    MoviesServices.themSanPham(data).then(res=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm phim thành công ! ',
            showConfirmButton: false,
            timer: 500
        });
    }).catch(err => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Thêm phim thất bại ! ',
            showConfirmButton: false,
            timer: 500
        });
    })
}
