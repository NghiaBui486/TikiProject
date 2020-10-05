import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createAction } from '../../../Redux/Action';
import { DanhSachSanPhamTheoDanhMuc } from '../../../Redux/Action/product';
import { SREACHTHEODANHMUC } from '../../../Redux/Action/type';

class index extends Component {
    SreachTheoDanhMuc = (id) => {
        this.props.dispatch(DanhSachSanPhamTheoDanhMuc(id))
        // this.props.dispatch(DanhSachSanPhamTheoDanhMuc(id))
    }
    render() {
        const danhMucSanPham = this.props.danhMucSanPham.map((item, index) => {
            return (

                <NavLink to={`/sanPham/danhmuc/${item.Title}/${item._id}`} className="dropdown-item hover"
                    onClick={() => this.SreachTheoDanhMuc(item._id)} ><img src={item.Icon}
                        width={20} className="mr-1" alt="test" />
                    {item.Title}
                </NavLink>

            )
        })
        return (
            <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuOffset">
                {danhMucSanPham}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham,

})
export default connect(mapStateToProps)(index);