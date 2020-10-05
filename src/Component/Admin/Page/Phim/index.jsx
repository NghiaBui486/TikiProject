import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { DanhSachPhim } from '../../../../Redux/Action/movie';
import { MoviesServices } from '../../../../Services';

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachTimKiem: [],
            keyWord: ""
        }
    }
    componentDidMount() {
        this.props.dispatch(DanhSachPhim())
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let danhSachTimKiem = this.props.danhSachPhim.filter(item =>
                item.tenPhim.toLowerCase().indexOf(this.state.keyWord) !== -1
            )
            this.setState({
                danhSachTimKiem,

            })
        })

    }
    xoaSanPham = (id) => {
        MoviesServices.xoaPhim(id).then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Xóa thành công ! ',
                showConfirmButton: false,
                timer: 1200
            });
            this.props.history.push("/admin")
        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Xóa thất bại ! ',
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
    renderSanPham = (item, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.tenPhim}</td>
                <td><img src={item.img} alt="test" /></td>
                <td>{item.theLoai} </td>
                <td><button className="btn btn-danger" onClick={()=>this.xoaSanPham(item.id)}>Xóa</button></td>
            </tr>
        )
    }
    render() {
        const eleSanPham = this.props.danhSachPhim.map((item, index) => {
            return this.renderSanPham(item, index)
        })
        const eleSreachSanPham = this.state.danhSachTimKiem.map((item, index) => {
            return this.renderSanPham(item, index)

        })
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <div className="col-10">
                            <input onChange={this.onChange} name="keyWord" type="text" className="form-control" placeholder="Nhập vào tên hoặc sản phẩm cần tìm ..." />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Tìm</button>
                        </div>
                    </div>
                </form>
                <NavLink to="./themphim" className="btn btn-success my-2">Thêm phim</NavLink>

                <table className="table">
                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Tên Phim</td>
                            <td>Hình ảnh</td>
                            <td>Thể loại</td>
                            <td>Thao tác</td>
                        </tr>
                        {this.state.keyWord ? eleSreachSanPham : eleSanPham}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    danhSachPhim: state.movieReducers.danhSachPhim

})
export default connect(mapStateToProps)(index);