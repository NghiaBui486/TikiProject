import React, { Component } from 'react';
import Pagination from '../../Pagination'
import { connect } from 'react-redux'
import DanhSachSanPhamm from '../../DanhSachSanPham'
import { DanhSachSanPhamPhanTrang } from '../../../Redux/Action/product';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            limit: 8,
        }
    }
    componentDidMount(){
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
    pageOnChange = (page) => {
        this.setState({
            page,
        }, () => {
            this.props.dispatch(DanhSachSanPhamPhanTrang(8, page))

        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center my-4">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <DanhSachSanPhamm />
                    {/* <Pagination defaultCurrent={this.state.page} onChange={this.pageOnChange} total={50} /> */}
                </div>
                <Pagination page={this.state.page} danhSachSanPham={this.props.danhSachSanPham}
                    limit={this.state.limit} pageOnChange={this.pageOnChange} total={Math.ceil(this.props.danhSachSanPham.length / 8)} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,

})
export default connect(mapStateToProps)(index);