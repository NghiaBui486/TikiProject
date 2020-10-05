import axios from "axios";
const API = `http://api.giaohangthutien.com/`
class tinhThanhSerivices {
    layDanhSachTinh() {
        return axios({
            url: `${API}province`,
            method: `GET`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
}
export default tinhThanhSerivices