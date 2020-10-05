import axios from "axios"
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://103.130.214.106:3005/`
class userServices {
    dangNhap(data) {

        return axios({
            method: 'post',
            url: `${APILink}api/users/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        })
    }
    thongTinTaiKhoan(token){
        return axios({
            method: "GET",
            url : `${APILink}api/users/profile`,
            headers:{'Authorization':  token}
        })
    }
    xoaNguoiDung(id,token){
        console.log("??token",token);
        return axios({
            method: "POST",
            url: `${APILink}api/users/delete/${id}`,
            headers : {'Authorization':  token}
        })
    }
    dangKy(data){
        console.log(data);
        return axios({
            method : "POST",
            url : `${APILink}api/users`,
            data
        })
    }
    danhSachNguoiDung(){
        return axios({
            method: "GET",
            url : `${APILink}api/users/search`,
            
        })
    }
    capNhatThongTin(token,data,id){
        console.log(token);
        return axios({
            method : "POST",
            url : `${APILink}api/users/update/${id}`,
            headers:{'Authorization':  token},
            data
        })
    }

}
export default userServices