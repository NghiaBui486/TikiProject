import Swal from 'sweetalert2'
import { createAction } from "."
import { ProductsService } from "../../Services"
import { CHITIETSANPHAM, DANHMUCSANPHAM, DANHSACHDANHMUCCON, DANHSACHSANPHAM, DANHSACHSANPHAMPHANTRANG, SAVEDANHMUCCON, SREACHPRODUCTAPI, SREACHTHEODANHMUC, DANHSACHSANPHAMSHOP } from "./type"


export const DanhSachSanPham = () => {
    return dispatch => {
        ProductsService.danhSachSanPham().then(res => {
            console.log(res.data);
            dispatch(createAction(DANHSACHSANPHAM, res.data.data.products))
        }).catch(err => {
            console.log(err);
        })
    }
}
export const DanhSachDanhMucCon = (id) =>{
    return dispatch => {
        ProductsService.danhSachDanhMucCon(id).then(res => {
            dispatch(createAction(DANHSACHDANHMUCCON,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const SaveDanhMucCon = (id = "5f60727110312900173437a0") =>{

    return dispatch => {
        ProductsService.danhSachDanhMucCon(id).then(res => {
            console.log(id)
            dispatch(createAction(SAVEDANHMUCCON,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const DanhSachSanPhamPhanTrang = (limit,page) => {
    return dispatch => {
        ProductsService.danhSachSanPhamPhanTrang(limit,page).then(res => {
            console.log(res.data);
            dispatch(createAction(DANHSACHSANPHAMPHANTRANG, res.data.data.products))
        }).catch(err => {
            console.log(err);
        })
    }
}

// export const XoaSanPham = (id) => {
//         ProductsService.xoaSanPham(id).then(res => {
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Xóa thành công ! ',
//                 showConfirmButton: false,
//                 timer: 1200
//             });
//         }).catch(err => {
//             console.log(err);
//             Swal.fire({
//                 position: 'center',
//                 icon: 'error',
//                 title: 'Xóa thất bại ! ',
//                 showConfirmButton: false,
//                 timer: 1200
//             });
//         })
// }
export const ThemSanPham = (data) => {

    ProductsService.themSanPham(data).then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm sản phẩm thành công ! ',
            showConfirmButton: false,
            timer: 1200
        });

    }).catch(err => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })

}
export const CapNhatSanPham = (id,item)=>{
    ProductsService.capNhatSanPham(id,item).then(res=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sửa sản phẩm thành công ! ',
            showConfirmButton: false,
            timer: 1200
        });
    }).catch(err=>{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })
}
export const ChiTietSanPham = (id) => {
    return dispatch => {
        ProductsService.chiTietSanPham(id).then(res => {
           

            dispatch(createAction(CHITIETSANPHAM, res.data.data))
        }).catch(err => {
            console.log(err);
        })
    }
}
export const ThemDanhMuc = (data) =>{
    ProductsService.themDanhMuc(data).then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm danh mục thành công ! ',
            showConfirmButton: false,
            timer: 1200
        });

    }).catch(err => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })
}
export const SreachSanPham = (keyWord) =>{
    return dispatch => {
        ProductsService.timKiemSanPham(keyWord).then(res =>{
            dispatch(createAction(SREACHPRODUCTAPI,res.data.data.products))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tìm kiếm sản phẩm thành công ! ',
                showConfirmButton: false,
                timer: 1200
            });
        }).catch(err =>{
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
export const DanhMucSanPham = ()=>{
    return dispatch =>{
        ProductsService.danhMucSanPham().then(res=>{
            dispatch(createAction(DANHMUCSANPHAM,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const DanhSachSanPhamTheoDanhMuc = (id)=>{
    return dispatch =>{
        ProductsService.danhSachSanPhamTheoDanhMuc(id).then(res=>{
            dispatch(createAction(SREACHTHEODANHMUC,res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const SreachTheoDanhMucCon = (id) =>{
    
        ProductsService.sreachDanhMucCon(id).then(res=>{
            // dispatch()
            console.log(res.data, "test sreach danh mc");
        }).catch(err=>{
            console.log(err);
        })
    
}

export const DanhSachSanPhamShop = (token = "5f769f88b3f91149cae757e0") =>{
    console.log("Token.............",token)
    return dispatch =>{
        ProductsService.danhSachSanPhamShop(token).then(res=>{
            dispatch(createAction(DANHSACHSANPHAMSHOP,res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}