import React from 'react'
import { Route } from 'react-router-dom';
import HeaderAdmin from '../../Component/Admin/HeaderAdmin'
import FoterAdmin from '../../Component/Admin/FoterAdmin'
import BotFoter from '../../Component/Admin/BotAdmin'

import "../../asset/admin/vendors/iconfonts/mdi/css/materialdesignicons.min.css"
import '../../asset/admin/vendors/iconfonts/ionicons/css/ionicons.css'
import '../../asset/admin/vendors/iconfonts/typicons/src/font/typicons.css'
import '../../asset/admin/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css'
import '../../asset/admin/vendors/css/vendor.bundle.base.css'
import '../../asset/admin/vendors/css/vendor.bundle.addons.css'
import '../../asset/admin/css/shared/style.css'
import '../../asset/admin/css/demo_1/style.css'
import '../../asset/admin/images/favicon.png'
import '../../Sass/main.scss'
const LayoutAdmin = (props) => {
    return (
        <div className="container-scroller">
            <HeaderAdmin />
            <div className="container-fluid page-body-wrapper admin">
                <FoterAdmin />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {props.children}
                    </div>
                    <BotFoter />
                                                            
                </div>
            </div>

        </div>
    )
}
export const AdminTemplate = ({ Component, ...rest }) => {
    return (

        <Route {...rest} render={(props) => {
            
            return (

                <LayoutAdmin>
                    <Component {...props} />
                </LayoutAdmin>
            )

        }
        } />
    )
}