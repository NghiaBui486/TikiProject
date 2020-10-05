import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Mid from './Mid';
import style from './Mid/css.module.css';

class index extends Component {

   
    render() {
        return (
            <div className={style.bg}>
                    <Header />
                    <Mid history={this.props.history}/>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    loading : state.adminBanHangReducers?.loading
})
export default connect(mapStateToProps) (index);