import axios from 'axios'
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://103.130.214.106:3005/`
class productsServices {
    capNhatSanPham(id,data){
        return axios({
            url: `${APILink}api/product/update/${id}`,
            method: `POST`,
            data

        })
    }
    xoaNhieuSanPhan(data){
        return axios({
            url:`${APILink}api/product/list/delete`,
            method:`POST`,
            data
        })
    }
    danhSachSanPhamPhanTrang(limit,page) {
        return axios({
            url: `${APILink}api/product/list?limit=${limit}&page=${page}`,
            method: `GET`,
            // headers: { 
            //     'x-apikey': '59a7ad19f5a9fa0808f11931',
            //     'Access-Control-Allow-Origin' : '*',
            //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //   }
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    danhSachDanhMucCon (id){
        return axios({
            url :`${APILink}api/category/detail/${id}`,
            method : `GET`,
        })
    }
    danhSachSanPham() {
        return axios({
            url: `${APILink}api/product/list`,
            method: `GET`,
            // headers: { 
            //     'x-apikey': '59a7ad19f5a9fa0808f11931',
            //     'Access-Control-Allow-Origin' : '*',
            //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //   }
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    themSanPham(data) {
        return axios({
            url: `${APILink}api/product`,
            method: `POST`,
            data,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    chiTietSanPham(id) {
        return axios({
            url: `${APILink}api/product?id=${id}`,
            method: `GET`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    themDanhMuc(data){
        return axios({
            url: `${APILink}api/category/create`,
            method: `POST`,
            data
        })
    }
    xoaSanPham(id) {
        return axios({
            url: `${APILink}api/product/delete/${id}`,
            method: `POST`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    xoaDanhMuc(id){
        return axios({
            url : `${APILink}api/category/delete`,
            method : `POST`,
            data : id
        })
    }
    timKiemSanPham(tenSanPham) {
        return axios({
            url: `${APILink}api/product/search?search=${tenSanPham}`,
            method: `GET`,
            data: tenSanPham

        })
    }
    danhMucSanPham() {
        return axios({
            url: `${APILink}api/category/get`,
            method: `GET`,
        })
    }
    danhSachSanPhamTheoDanhMuc(id) {
        return axios({
            url: `${APILink}api/product/category/search?IdCategory=${id}`,
            method: `GET`,
            data: id
        })
    }
    sreachDanhMucCon(id){
        return axios({
            url : `${APILink}api/product/search/query?idCategorySub=${id}`,
            method : `GET`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                
            }
        })
    }
    danhSachSanPhamShop(token){
        return axios({
            url : `${APILink}api/product/shop/search`,
            method : `GET`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token,  
            }
        })
    }

    danhSachSanPhamShopSearch(token, keysearch){
        if(keysearch || keysearch !== ''){
            console.log(keysearch)
            return axios({
                url : `${APILink}api/product/shop/search`,
                method : `GET`,
                params: {
                    search: keysearch},            
                headers: {
                    'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': token,  
                }
            })
        }
        else{
            console.log('Key search',keysearch)
            return axios({
                url : `${APILink}api/product/shop/search`,
                method : `GET`,         
                headers: {
                    'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': token,  
                }
            })
        }
    }

}
export default productsServices

// import axios from 'axios'
// const APICor = `https://cors-anywhere.herokuapp.com/`
// const APILink = `https://marketplacedata.herokuapp.com/`
// class productsServices {
//     danhSachSanPham (){
//         return axios({
//             url : `${APICor}${APILink}api/product/list?limit=20&page=1`,
//             method: `GET`,
//         })
//     }
//     themSanPham (data){
//         return axios({
//             url : `${APICor,APILink}api/product`,
//             method : `POST`,
//             data
//         })
//     }
//     chiTietSanPham(id){
//         return axios({
//             url : `${APICor,APILink}api/product?id=${id}`,
//             method: `GET`,
//         })
//     }
//     xoaSanPham (id){
//         return axios({
//             url :`${APICor,APILink}api/product/delete/${id}`,
//             method : `DELETE`,
//         })
//     }
// }
// export default productsServices