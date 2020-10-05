import axios from 'axios';
class moviesServices {
    danhSachPhim(){
        return axios({
            url : `https://5f474cbc95646700168d9187.mockapi.io/danhSachPhim`,
            method : `GET`,
        })
    }
    themSanPham(data){
        return axios({
            url:`https://5f474cbc95646700168d9187.mockapi.io/danhSachPhim`,
            method : `POST`,
            data
        })
    }
    xoaPhim(id){
        return axios({
            url:`https://5f474cbc95646700168d9187.mockapi.io/danhSachPhim/${id}`,
            method :`DELETE`,
        })
    }
    chiTietPhim(id){
        return axios({
            url :   `https://5f474cbc95646700168d9187.mockapi.io/danhSachPhim/${id}`,
            method : `GET`
        })
    }
}
export default moviesServices ;