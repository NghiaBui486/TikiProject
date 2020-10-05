import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createAction } from '../../../../Redux/Action';
import { DanhSachSanPham } from '../../../../Redux/Action/product';
import { THONGTINSANPHAM } from '../../../../Redux/Action/type';
import { ProductsService } from '../../../../Services';
import Sreach from '../Sreach';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachTimKiem: [],
            keyWord: "",
            flag: false,
            radio: "",
            deteleAll: false

        }
    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    xoaNhieuSanPham = () => {
        this.setState({ flag: true })
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let danhSachTimKiem = this.props.danhSachSanPham.filter(item =>
                item.Name?.toLowerCase().indexOf(this.state.keyWord) != -1
            )
            this.setState({
                danhSachTimKiem,

            })
        })

    }
    xoaSanPham = (id) => {
        ProductsService.xoaSanPham(id).then(res => {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Xóa thành công",
                showConfirmButton: false,
                timer: 1200
            });
            this.props.history.push('/admin')

        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
    // onChange = (e)=>{
    //     this.setState({
    //         [e.input.name] : e.input.value
    //     },()=>{
    //     })
    // }
    capNhatThongTin = (sanPham) => {
        this.props.dispatch(createAction(THONGTINSANPHAM, sanPham))
    }
    updateStatusDetele = (sanPham) => {
        if (sanPham.Serial == false) {
            sanPham.Serial = true
        } else {
            sanPham.Serial = false
        }
    }
    huyXoaNhieuSanPham = () => {
        ///// Hủy xoóa
        this.setState({ flag: false, deteleAll: false }, () => {
            //thay đổi trạng thái xóa
            for (let i = 0; i < this.props.danhSachSanPham.length; i++) {
                this.props.danhSachSanPham[i].Serial = false
            }

        })

    }
    deteleAll = () => {
        let ListId = [];
        const danhSachXoa = this.props.danhSachSanPham.filter(item => item.Serial == true)
        for(let i = 0 ; i< danhSachXoa.length; i++){
            ListId.push(danhSachXoa[i]._id)
        }
        const obj = {
            ListId : ListId
        }
        ProductsService.xoaNhieuSanPhan(obj).then(res => {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1200
            });
            this.props.history.push('/admin')

        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
    renderSanPham = (item, index) => {
        return (
            <tr key={index}>
                {/* <input type="radio" onChange={this.onChange} name="radio"/> */}
                <td>{index + 1}</td>
                <td>{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</td>
                <td><img src={item.Image} alt="test" /> </td>
                <td>{item.Price} Đồng</td>
                <td>
                    {this.state.flag == false ?
                        <>
                            <button className="btn btn-danger" onClick={() => this.xoaSanPham(item._id)}>Xóa</button>
                            <NavLink to={`/admin/suasanpham/${item._id}`} onClick={() => this.capNhatThongTin(item)} className="btn btn-warning ml-2">Sửa</NavLink>

                        </> :
                        <input type="checkbox" onClick={() => this.updateStatusDetele(item)} />

                    }
                </td>
            </tr>
        )
    }
    render() {
        const eleSanPham = this.props.danhSachSanPham?.map((item, index) => {
            return this.renderSanPham(item, index)
        })
        const eleSreachSanPham = this.props.sreachProductApi.map((item, index) => {
            return this.renderSanPham(item, index)

        })
        return (
            <div>
                <Sreach status="sanPham" />
                <NavLink to="./themsanpham" className="btn btn-info my-2">Thêm sản phẩm</NavLink>
                {this.state.flag == false ?
                    <button className="btn btn-danger ml-3" onClick={this.xoaNhieuSanPham} name="detele">
                        Xóa nhiều sản phẩm
                   </button> :
                    <>
                        <button onClick={this.deteleAll} className="btn btn-success ml-5">Đồng ý</button>
                        <button onClick={this.huyXoaNhieuSanPham} className="btn btn-danger ml-2">Hủy</button>
                    </>
                }

                <table className="table">

                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Tên Sản Phẩm</td>
                            <td>Hình ảnh</td>
                            <td>Giá Sản Phẩm</td>
                            <td>Thao tác</td>
                        </tr>
                        {this.props.sreachProductApi != "" ? eleSreachSanPham : eleSanPham}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
    sreachProductApi: state.productReducers.sreachProductApi

})
export default connect(mapStateToProps)(index);