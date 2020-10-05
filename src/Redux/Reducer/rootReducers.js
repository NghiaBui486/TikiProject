import { combineReducers } from 'redux'
import adminBanHangReducers from './adminBanHang'
import movieReducers from './movieReducers'
import productReducers from './productReducers'
import shoppingcartReducers from './shopingcartReducers'
import userReducers from './user'
const rootReducer = combineReducers({
    productReducers,
    movieReducers,
    userReducers,
    shoppingcartReducers,
    adminBanHangReducers,
})
export default rootReducer;