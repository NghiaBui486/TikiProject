import axios from 'axios'
import { linkAPI } from './routeAPI'
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = linkAPI

///////////// localhost:4000 https://cors-anywhere.herokuapp.com/ https://marketplacedata.herokuapp.com/
class shopBanHangServices {
    dangKy(data){
        return axios({
            url : `${APILink}api/shop/add`,
            method: 'POST',
            data
        })
    }
    dangNhap(data){
        return  axios({
            url : `${APILink}api/shop/login`,
            method : "POST",
            data
        })
    }
    capNhatThongTinBanHang(data,id){
        return axios({
            url: `${APILink}api/shop/update/${id}`,
            method: `POST`,
            data
        })
    }
    danhSachSanPhamShop(data){
        return axios({
            
        })
    }
}
export default shopBanHangServices
