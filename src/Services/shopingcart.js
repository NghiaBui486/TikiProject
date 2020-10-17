import axios from 'axios';
import { linkAPI } from './routeAPI'
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = linkAPI

///////////// localhost:4000 https://cors-anywhere.herokuapp.com/ https://marketplacedata.herokuapp.com/
class shoppingServices {
    themGioHang(data,token) {
        return axios({
            url: `${APILink}api/cart/add`,
            method: "POST",
            data,
            headers:{'Authorization':  token},
        })
    }
    layDanhSachGioHangTheoUser(id,token) {
        return axios({
            url: `${APILink}api/cart?UserId=${id}`,
            method: "GET",
            headers:{'Authorization':  token}
        })
    }
    xoaGioHang(data,token){
        console.log("du lieu",data);
        return axios({
            url : `${APILink}api/cart/delete`,
            method: "POST",
            data,
            headers:{'Authorization':  token}

        })
    }
    giamSoLuongGioHang(data,token){
        return axios({
            url :`${APILink}api/cart/delete-quantity`,
            method: "POST",
            data,
            headers:{'Authorization':  token}

        })
    }
    oderGioHang(data,token){
        return axios({
            url : `${APILink}api/order/create`,
            method: "POST",
            data,
            headers:{'Authorization':  token}

        })
    }
    quanLyDonHang(id,token){
        return axios({
            url : `${APILink}api/order/getOrderByUsers?UserId=${id}`,
            method: "GET",
            headers:{'Authorization':  token}

        })
    }
    donHang(url){
        return axios({
            url:`${APILink}api/order/get/${url}`,
            method: "GET",
        })
    }
}
export default shoppingServices
