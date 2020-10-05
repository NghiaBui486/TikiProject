import React, { Component } from 'react';
import { SreachTheoDanhMucCon } from '../../../Redux/Action/product';
import { ProductsService } from '../../../Services';

class index extends Component {
    sreachDanhMucCon = (id) =>{
        console.log("?????");
        SreachTheoDanhMucCon(id)
    }
    render() {
        const elementList = this.props.ListSubCategory?.map((item, index) => {
            return (
                <li className="ant-menu-item ant-menu-item-only-child" key="9">
                    {item.Title}
                </li>
            )
        })
        const elementSideBar = this.props.sideBar?.map((item, index) => {
            return (
                <div className="element" key={index}>
                    <a href=" #" onClick={()=>this.sreachDanhMucCon(item._id)} className="item">
                        {item.Title}
                        {/* <span>(47)</span> */}
                    </a>
                </div>
            )
        })
        return (
            <>
                {this.props.sideBar?elementSideBar:elementList}
            </>
        );
    }
}

export default index;