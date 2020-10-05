import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class index extends Component {
    constructor(props) {
        super(props)
    }

    renderDanhSachSanPhamShop = ()=>{
        return (
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
        );
    }

    render() {

        return (
            <div>
                {/* <button className="btn btn-success">Thêm sản phẩm shop</button> */}
                <NavLink to="themsanpham" className="btn btn-success">Thêm sản phẩm shop</NavLink>
                <h2>Danh sách sản phẩm</h2>
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {renderDanhSachSanPhamShop} */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps) (index);