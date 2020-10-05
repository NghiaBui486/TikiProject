import { CHITIETPHIM, DANHSACHPHIM } from '../Action/type';


const initialState = {
    danhSachPhim : [],
    chiTietPhim : {}
}
const moviesReducers = (state = initialState , action)=>{
    switch(action.type){
        case DANHSACHPHIM:
            state.danhSachPhim = action.payload;
            return {...state}
        
        case CHITIETPHIM:
            state.chiTietPhim = action.payload
            return {...state}
        default : 
            return {...state}
    }
}
export default moviesReducers