import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../asset/admin/images/faces/face8.jpg'


export default class index extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {


    }
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="# " className="nav-link">
                            <div className="profile-image">
                                <img className="img-xs rounded-circle" src={avatar} alt="profile image" />
                                <div className="dot-indicator bg-success" />
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Kiên</p>
                                <p className="designation">Admin</p>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item nav-category">Main Menu</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Trang chủ</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/danhsachsanpham">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Quản lý sản phẩm</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/danhsachphim">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Quản lý phim</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/danhsachdanhmuc">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Quản lý danh mục</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/danhsachuser">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Quản lý người dùng</span>
                        </NavLink>
                    </li>




                </ul>
            </nav>

        )
    }
}
