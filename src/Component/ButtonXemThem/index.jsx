import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAction } from '../../Redux/Action';
import { FLAG } from '../../Redux/Action/type';
import { NavLink } from 'react-router-dom';
class index extends Component {
    flag = ()=>{
        this.props.dispatch(createAction(FLAG,true))
    }
    render() {
        return (
            <>
                <NavLink to="/sanpham" className="btn btn-primary my-3" style={{ display: "block", margin: "auto", transition: "0.5s all", width:"150px" }} onClick={this.flag}>Xem thêm</NavLink>

            </>
        );
    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(index);