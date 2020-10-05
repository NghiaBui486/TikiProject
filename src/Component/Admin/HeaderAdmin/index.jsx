import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import avatar from '../../../asset/admin/images/faces/face8.jpg'


class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
    }
    
    componentDidMount() {
      
    }
    render() {
        return (
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <NavLink className="navbar-brand brand-logo" to="/">
                    <i class="fi-eye"></i> Xem trang website
                    </NavLink>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center">
                    <ul className="navbar-nav ml-auto">
                        
                        Hi,&nbsp; <strong>Kiên</strong>
                        <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
                            <a className="nav-link dropdown-toggle" id="UserDropdown" href="# " data-toggle="dropdown" aria-expanded="false">
                                <img className="img-xs rounded-circle" src={avatar} alt="Profile image" /> </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <div className="dropdown-header text-center">
                                    <img className="img-md rounded-circle" src={avatar} alt="Profile image" />
                                    <p className="mb-1 mt-3 font-weight-semibold">Kiên</p>
                                    <p className="font-weight-light text-muted mb-0">dvkien2803@gmail.com</p>
                                </div>
                                <NavLink to="" className="dropdown-item">Cập nhật thông <i className="dropdown-item-icon ti-dashboard" /></NavLink>
                                <NavLink to="/"  className="dropdown-item">Đăng xuất<i className="dropdown-item-icon ti-comment-alt" /></NavLink>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu" />
                    </button>
                </div>
            </nav>

        )
    }
}
const mapStateToProps = state => ({
   
})
export default connect(mapStateToProps)(index)