import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flip } from 'react-reveal';
import { Link } from 'react-router-dom';
import { DanhSachPhim } from '../../Redux/Action/movie';
class index extends Component {

    render() {
        const elementDanhSachPhim = this.props.danhSachPhim.map((item, index) => {
            return (

                <Link to={`/movie/chitietphim/${item.id}`} className="col-12 col-md-6 col-lg-3 card-phim" key={index}>
                    <div className="card text-left" >
                        <div className="hinhAnh">
                            <img className="card-img-top image" src={item.img} alt />
                            <div className="button">
                                <div className="center">
                                    <button className="btn btn-outline detail">Xem chi tiết</button>
                                </div>
                                <div className="center">
                                    <button className="btn btn-outline-success muaVe">Mua vé</button>

                                </div>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text ">{item.theLoai.length > 22 ? item.theLoai.slice(0, 22) + "...." : item.theLoai}&nbsp; </p>
                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <div className="container">
                <Flip top>
                    <>
                        <div className="row">
                            {elementDanhSachPhim}

                        </div>

                    </>
                </Flip>
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(DanhSachPhim())
    }
}



const mapStateToProps = state => ({
    danhSachPhim: state.movieReducers.danhSachPhim
})
export default connect(mapStateToProps)(index);