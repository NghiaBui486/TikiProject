import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { createAction } from '../../../../Redux/Action';
import { SreachSanPham } from '../../../../Redux/Action/product';
import { SREACHDANHMUC } from '../../../../Redux/Action/type';
class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyWord: ""
        }
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

        })

    }
    onClick = () => {
        // this.props.dispatch(KEYWORD,this.state.keyWord)
        if (this.props.status == "sanPham") {
            this.props.dispatch(SreachSanPham(this.state.keyWord))
        } else if (this.props.status == "danhMuc") {
            const sreachDanhMuc = this.props.danhMucSanPham.filter(item =>
                item.Title?.toLowerCase().indexOf(this.state.keyWord) != -1)
            this.props.dispatch(createAction(SREACHDANHMUC, sreachDanhMuc))
            if (sreachDanhMuc.length <= 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Tìm kiếm với từ khóa "${this.state.keyWord}" không có ! `,
                    showConfirmButton: false,
                    timer: 1200
                });
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tìm kiếm sản phẩm thành công ! ',
                    showConfirmButton: false,
                    timer: 1200
                });
            }
        }
    }
    render() {
        return (
            <div className="form-group row">
                <div className="col-10">
                    <input onChange={this.onChange} name="keyWord" type="text" className="form-control" placeholder="Nhập vào tên hoặc sản phẩm cần tìm ..." />
                </div>
                <div className="col-2">
                    <button onClick={this.onClick} className="btn btn-success">Tìm</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham
})
export default connect(mapStateToProps)(index);