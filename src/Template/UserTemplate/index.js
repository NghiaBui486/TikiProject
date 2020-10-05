import React from 'react'
import { Route } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'
import Header from '../../Component/AdminUser'
import { LayoutHeader } from '../HomeTemplate/'
const TayoutHeader = (props) => {
    return (
        <>
            <LayoutHeader>
                <div className="bg-infomation">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 col-lg-3">
                                <Header />
                            </div>
                            <div className="col-12 col-md-9 col-lg-9 form-infor_update">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutHeader>


        </>
    )
}
export const UserTemplate = ({ Component, ...rest }) => {
    return (
        <Route {...rest} onUpdate={() => window.scrollTo(0, 0)} render={(props) => {
            return (
                <>
                    <ScrollMemory />
                    <TayoutHeader >
                        <Component {...props} />
                    </TayoutHeader>
                </>
            )
        }} />
    )
}