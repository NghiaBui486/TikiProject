import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductsService } from '../../../../Services';
import Sreach from '../Sreach';
class index extends Component {
    xoaDanhMuc = (id) => {
        const data = {
            id : id
        }
        ProductsService.xoaDanhMuc(data).then(res => {

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
    renderDanhMuc = (item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td><img src={item.Icon} alt="a" /></td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.xoaDanhMuc(item._id)}>Xóa</button>
                    <button className="btn btn-success">Xem danh sách danh mục con</button>
                </td>
            </tr>
        )
    }
    render() {
        const elementDanhMuc = this.props.danhMucSanPham.map((item, index) => {
            return this.renderDanhMuc(item, index)
        })
        const elementSreachDanhMuc = this.props.sreachDanhMuc.map((item, index) => {
            return this.renderDanhMuc(item, index)
        })
        return (
            <div>
                <Sreach status="danhMuc" />
                <NavLink to="/admin/themdanhmuc" className="btn btn-info">Thêm danh mục</NavLink>
                <table className="table">

                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Tên danh mục</td>
                            <td>Icon</td>
                            <td>Thao tác</td>
                        </tr>
                        {/* {this.state.keyWord ? eleSreachSanPham : eleSanPham} */}
                        {this.props.sreachDanhMuc != "" ? elementSreachDanhMuc : elementDanhMuc}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham,
    sreachDanhMuc: state.productReducers.sreachDanhMuc
})
export default connect(mapStateToProps)(index);