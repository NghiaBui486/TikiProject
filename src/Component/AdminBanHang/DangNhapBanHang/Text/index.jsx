import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/action';
import { LUADAO } from '../../Redux/action/type';
class index extends Component {
    componentDidMount(){
        axios({
            url: "https://5f30e4b5373bc7001635ef6c.mockapi.io/postluadao/luadao",
            method : "get",
            
        }).then(res=>{this.props.dispatch(createAction(LUADAO,res.data));}).catch(err=>{console.log(err);})
        
    }
    render() {
        const ele = this.props.data.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                </tr>
            )
        })
        return (
            <table className="table">
                <th>
                        <tr>
                            <td>STT</td>
                            <td>Tài khoản</td>
                            <td>Mật khẩu</td>
                        </tr>
                        {ele}
                    </th>
            </table>

        );
    }
}
const mapStateToProps= (state)=> ({
    
    data : state.textReducers.data
})
export default connect(mapStateToProps)(index)