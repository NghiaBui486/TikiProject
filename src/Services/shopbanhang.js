import axios from 'axios'
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://103.130.214.106:3005/`

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
