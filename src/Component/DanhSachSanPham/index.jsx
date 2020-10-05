import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Sass/main.scss';
import Time from '../Time'
import New from '../../asset/data/img/logomoi.png';
import { NavLink } from 'react-router-dom';

class index extends Component {

    componentDidMount() {

    }

    onClickSave = (sanPham) => {
        let array, flag
        ///// Kiểm tra có chuỗi JSON sản phẩm không
        if (localStorage.getItem('sanPham')) {
            // chuyển từ chuỗi JSON sang array chứa object sản phẩm
            array = JSON.parse(localStorage.getItem('sanPham'))
            /////Kiểm tra những sản phẩm có trong array hay không
            flag = true
            for (let i = 0; i < array.length; i++) {
                if (sanPham._id == array[i]._id) {
                    flag = false
                }
            }
            //// Nếu không bằng sẽ thêm vào array
            if (flag == true) {
                // thêm vô 1 object sản phẩm vào array chứa object sản phẩm
                array.push(sanPham)
            }

            /////// chuyển từ array sang chuỗi json =>>> đưa chuỗi json lên localStorage 
            localStorage.setItem('sanPham', JSON.stringify(array))
        }
        ///// Nếu không có thì tạo 1 cái array mới
        else {
            array = []
            array.push(sanPham)
            localStorage.setItem('sanPham', JSON.stringify(array))

        }
        // setTimeout(() => {
        //     window.location.reload(false);
        // }, 1)
        setTimeout(() => {
            localStorage.removeItem('sanPham')
        }, 1800)

    }
    renderDanhSachSanPhamSell = (item, index) => {
        const giaGiam = (item.Price - (item.Price / 100 * item.Sale)).toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
        const giaSanPham = item.Price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

        return (
            <NavLink to={`/chitietsanpham/${item._id}`} onClick={() => this.onClickSave(item)} className="col-12 col-md-6 col-lg-3 card-tiki" style={{ position: "relative" }} key={index}>
                <div className="card text-left" >
                    <img className="card-img-top" src={item.Image} alt />
                    <div className="card-body">

                        <h4 className="card-title">{item.Name.length > 44 ? item.Name.slice(0, 44) + "...." : item.Name}</h4>
                        <div className="price">
                            <p className="card-text text-danger gia-hover">{giaGiam}&nbsp; ₫</p>

                            <p className="sellPrice">{giaSanPham} ₫</p>

                        </div>
                        <span className="giamGia">-{item.Sale}%</span>
                        <div className="bottom">
                            <div className="sellTime">
                                <div className="sell">
                                    <div className="products">
                                        <div className="width-sell" style={{ width: "20%" }}></div>
                                        <div className="content-sell">
                                            <span><i class="fa fa-fire"></i></span>
                                            <p className="text">Đã bán 1</p>
                                        </div>
                                    </div>
                                    <Time time={item.ExpirationDateSale} id={item._id} item={item} />
                                </div>
                            </div>
                        </div>
                        {/* <Time /> */}

                    </div>
                </div>
            </NavLink>
        )
    }
    renderDanhSachSanPhamNew = (item, index) => {
        const giaGiam = (item.Price - (item.Price / 100 * item.Sale)).toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
        const giaSanPham = item.Price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

        return (
            <NavLink to={`/chitietsanpham/${item._id}`} onClick={() => this.onClickSave(item)} className="col-12 col-md-6 col-lg-3 card-tiki" style={{ position: "relative" }} key={index}>
                <div className="card text-left" >
                    <img className="card-img-top" src={item.Image} alt />
                    <div className="card-body">

                        <h4 className="card-title">{item.Name.length > 44 ? item.Name.slice(0, 44) + "...." : item.Name}</h4>
                        <div className="price">
                            <p className="card-text text-danger text-center gia-hover">{giaGiam}&nbsp; ₫</p>

                            {item.StatusSale == true ?
                                <p className="sellPrice">{giaSanPham} ₫</p>
                                : <> </>
                            }
                        </div>
                        <span className="new">
                            <img src={New} width={40} height={36} alt="test" />
                        </span>
                        {item.StatusSale == true ?
                            <span className="giamGia">-{item.Sale}%</span> : ""
                        }

                        <div className="bottom">
                            <div className="sellTime">
                                <div className="sell">
                                    <div className="products">
                                        <div className="width-sell" style={{ width: "20%" }}></div>
                                        <div className="content-sell">
                                            <span><i class="fa fa-fire"></i></span>
                                            <p className="text">Đã bán 1</p>
                                        </div>
                                    </div>
                                    {item.StatusSale == true ?
                                        <Time time={item.ExpirationDateSale} id={item._id} item={item} />
                                        : ""
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <Time /> */}

                    </div>
                </div>
            </NavLink>
        )
    }
    renderDanhSachSanPham = (item, index) => {
        const giaSanPham = item.Price?.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

        return (
            <NavLink onClick={() => this.onClickSave(item)} to={`/chitietsanpham/${item._id}`} className="col-12 col-md-6 col-lg-3 card-tiki" key={index}>
                <div className="card text-left" >
                    <img className="card-img-top" src={item.ImageList[0]} alt />
                    <div className="card-body">

                        <h4 className="card-title">{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</h4>
                        <p className="card-text text-danger gia-hover">{giaSanPham}&nbsp; ₫</p>

                        {/* <Time /> */}

                    </div>
                </div>

            </NavLink>
        )
    }
    render() {
        const danhSachSale = this.props.danhSachSanPham.filter(item => item.StatusSale == false)
        const danhSachPhanTrang = this.props.danhSachSanPhamPhanTrang.filter(item => item.StatusSale == false)
        const danhSachSanPhamPhanTrang = danhSachPhanTrang.map((item, index) => {
            return (

                this.renderDanhSachSanPham(item, index)

            )
        })
        const danhSachSanPham = this.props.danhSachSanPhamPhanTrang.map((item, index) => {
            let render;
            if (item.StatusSale == true) {
                render = this.renderDanhSachSanPhamSell(item, index)
            } else if (item.Warranty == true) {
                render = this.renderDanhSachSanPhamNew(item,index)
            }
            else {
                render = this.renderDanhSachSanPham(item, index)
            }
            return (

                render

            )
        })
        let softPrice, sreachPrice, sreachKeyWord, renderKeyWord, sreachTheoDanhMuc;

        // softPrice = this.props.sreachPrice.sort((a, b) => {
        //     return a.giaSanPham - b.giaSanPham;
        // })
        // sreachPrice = this.props.sreachPrice.map((item, index) => {
        //     return (
        //         this.renderDanhSachSanPham(item, index)
        //     )
        // })
        sreachKeyWord = this.props.sreachProductApi?.map((item, index) => {
            return (
                this.renderDanhSachSanPham(item, index)
            )
        })
        ///// Tìm kiếm trên client
        // danhSach.filter(
        //     ///////// Sreach chữ viết hoa và thường
        //     item => item.Name.toLowerCase().indexOf(this.props.keyWord) != -1
        // )
        // renderKeyWord = sreachKeyWord.map((item, index) => {
        //     return (
        //         this.renderDanhSachSanPham(item, index)
        //     )
        // })
        sreachTheoDanhMuc = this.props.sreachTheoDanhMuc?.map((item, index) => {
            return (
                this.renderDanhSachSanPham(item, index)
            )
        })
        let render, sanPhamSreach
        // if (this.props.sreachPrice.length >= 1) {
        //     //// render khi người dùng sreach giá từ a -> b
        //     render = sreachPrice
        // } else if (this.props.sreachPrice.length <= 0) {
        //     //// render khi không có yêu cầu gì 
        //     render = danhSachSanPham
        // }
        if (this.props.statusShow == true) {
            let sanPham = JSON.parse(localStorage.getItem('sanPham'))
            render = sanPham.map((item, index) => {
                return this.renderDanhSachSanPham(item, index)
            })
        }
        else {
            render = danhSachSanPham

        }
        if (this.props.keyWordPage) {
            sanPhamSreach = sreachKeyWord
        } else if (this.props.sreachTheoDanhMuc) {
            sanPhamSreach = sreachTheoDanhMuc
        }

        return (
            <>
                {this.props.status == true ? sanPhamSreach : render}
            </>
        );
    }
}


const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
    danhSachSanPhamPhanTrang: state.productReducers.danhSachSanPhamPhanTrang,
    sreachAz: state.productReducers.sreachAz,
    sreachZa: state.productReducers.sreachZa,
    sreachPrice: state.productReducers.sreachPrice,
    keyWord: state.productReducers.keyWord
})
export default connect(mapStateToProps)(index);