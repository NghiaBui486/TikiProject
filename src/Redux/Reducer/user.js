import { DANHSACHUSER, LAYTHONGTINUSER, LOGINFACEBOOK, THONGTINTAIKHOAN } from "../Action/type"

const initialState = {
    thongTinTaiKhoan : {},
    loginFacebook : {},
    danhSachUser : [],
    layThongTinUser : {}
}
const userReducers = (state = initialState, action)=>{
    switch(action.type){
        case THONGTINTAIKHOAN:
            state.thongTinTaiKhoan = action.payload
            return{...state}
        case LOGINFACEBOOK: 
            state.loginFacebook = action.payload
            return {...state}
        case DANHSACHUSER:
            console.log("payload",action.payload);
            state.danhSachUser = action.payload
            return {...state}
        case LAYTHONGTINUSER:
            state.layThongTinUser = action.payload
            return{...state}
        default:
            return {...state}
    }
}
export default userReducers