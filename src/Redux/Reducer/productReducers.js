import { act } from "react-dom/test-utils"
import { CHITIETSANPHAM, DANHMUCSANPHAM, DANHSACHDANHMUCCON, DANHSACHSANPHAM, DANHSACHSANPHAMDAXEM, DANHSACHSANPHAMPHANTRANG, FLAG, KEYWORD, SAVEDANHMUCCON, SREACHAZ, SREACHDANHMUC, SREACHPRICE, SREACHPRODUCTAPI, SREACHSANPHAMDANHMUCCON, SREACHTHEODANHMUC, SREACHZA, THONGTINSANPHAM, DANHSACHSANPHAMSHOP } from "../Action/type"

const initialState = {
    danhSachSanPham: [],
    chiTietSanPham: {},
    flag: false,
    sreachPrice: [],
    sreachAz: [],
    sreachZa: [],
    keyWord: "",
    sreachKeyWord: [],
    sreachProductApi: [],
    danhMucSanPham: [],
    idDanhMuc: "",
    thongTinSanPham: {},
    sreachDanhMuc: [],
    danhSachSanPhamPhanTrang: [],
    danhSachDanhMucCon: {},
    saveDanhMucCon: [],
    sreachSanPhamDanhMucCon: [],
    danhSachSanPhamDaXem: [],
    danhSachSanPhamShop: [],

}
const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case DANHSACHSANPHAMPHANTRANG:
            state.danhSachSanPhamPhanTrang = action.payload
            return { ...state }
        case SREACHDANHMUC:
            state.sreachDanhMuc = action.payload
            return { ...state }
        case SREACHPRODUCTAPI:
            state.sreachProductApi = action.payload
            return { ...state }
        case KEYWORD:
            state.keyWord = action.payload
            console.log(state.danhSachSanPham, "Rsd");
            state.sreachKeyWord = state.danhSachSanPham.filter(
                item => item.Name?.toLowerCase().indexOf(state.keyWord) !== -1
            )
            return { ...state }
        case DANHSACHSANPHAM:
            state.danhSachSanPham = action.payload
            return { ...state }
        case FLAG:
            state.flag = action.payload;
            return { ...state }
        case CHITIETSANPHAM:
            state.chiTietSanPham = action.payload
            return { ...state }
        case SREACHPRICE:
            state.sreachPrice = action.payload
            state.sreachZa = []
            state.sreachAz = []
            return { ...state }
        case SREACHAZ:
            state.sreachAz = action.payload
            if (state.sreachZa.length >= 1) {
                state.sreachZa = []
            }
            return { ...state }
        case DANHMUCSANPHAM:
            state.danhMucSanPham = action.payload
            return { ...state }
        case SREACHZA:
            state.sreachZa = action.payload
            if (state.sreachAz.length >= 1) {
                state.sreachAz = []
            }
            return { ...state }
        case SREACHTHEODANHMUC:
            console.log("thanhcongne");
            state.idDanhMuc = action.payload
            return { ...state }
        case THONGTINSANPHAM:
            state.thongTinSanPham = action.payload
            return { ...state }
        case DANHSACHDANHMUCCON:
            console.log("resdux", action.payload);
            state.danhSachDanhMucCon = action.payload
            return { ...state }
        case SAVEDANHMUCCON:
            state.saveDanhMucCon = action.payload
            return { ...state }
        case SREACHSANPHAMDANHMUCCON:
            state.sreachSanPhamDanhMucCon = action.payload
            return { ...state }
        case DANHSACHSANPHAMDAXEM:
            state.danhSachSanPhamDaXem = action.payload
            return { ...state }
        case DANHSACHSANPHAMSHOP:
            state.danhSachSanPhamShop = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}
export default productReducers