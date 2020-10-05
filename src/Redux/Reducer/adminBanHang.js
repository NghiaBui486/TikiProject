import { DANGNHAPBANHANG, TEST } from "../Action/type"


const initialState = {
    loading:false,
    thongTinTaiKhoanBanHang : {}
}
const adminBanHangReducers = (state = initialState , action)=>{
    switch(action.type){
        case TEST:
            state.loading = action.payload
            return {...state}
        case DANGNHAPBANHANG:
            console.log("paylsddsoad",action.payload);
            state.thongTinTaiKhoanBanHang = action.payload
            return {...state}
        default : 
            return {...state}
    }
}
export default adminBanHangReducers