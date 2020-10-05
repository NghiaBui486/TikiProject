import React, { Component } from 'react';
import img from '../../../asset/data/img/556b075fd896c32ff38a3526bba0d3bc.jpg';
class index extends Component {
    render() {
        return (
            <>
                <div className="bg-background">
                    <div className="container">
                        <div className="row">
                            <h4>KHÁCH HÀNG NHẬN XÉT</h4>
                        </div>
                        <div className="row bg-rw_dg">
                            <div className="col-12 col-md-4 col-lg-4 py-4">
                                <div className="star-rating text-center">
                                    <h4>Đánh giá trung bình</h4>
                                    <p className="score">4.5/5</p>
                                    <p className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                    </p>
                                    <a href="/">(19 nhận xét)</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 py-4 border-middle">
                                <div className="star-progress-bar d-flex align-items-center align-self-stretch">
                                    <p className="star-number d-flex align-items-center mb-0">
                                        5 <i className="fa fa-star" />
                                    </p>
                                    <div className="progress-bar_custom">
                                        <div className="progress-5" style={{ width: '69%' }} />
                                    </div>
                                    <p className="percent text-right mb-0">
                                        69%
          </p>
                                </div>
                                <div className="star-progress-bar d-flex align-items-center align-self-stretch">
                                    <p className="star-number d-flex align-items-center mb-0">
                                        4 <i className="fa fa-star" />
                                    </p>
                                    <div className="progress-bar_custom">
                                        <div className="progress-5" style={{ width: '16%' }} />
                                    </div>
                                    <p className="percent text-right mb-0">
                                        16%
          </p>
                                </div>
                                <div className="star-progress-bar d-flex align-items-center align-self-stretch">
                                    <p className="star-number d-flex align-items-center mb-0">
                                        3 <i className="fa fa-star" />
                                    </p>
                                    <div className="progress-bar_custom">
                                        <div className="progress-5" style={{ width: '5%' }} />
                                    </div>
                                    <p className="percent text-right mb-0">
                                        5%
          </p>
                                </div>
                                <div className="star-progress-bar d-flex align-items-center align-self-stretch">
                                    <p className="star-number d-flex align-items-center mb-0">
                                        2 <i className="fa fa-star" />
                                    </p>
                                    <div className="progress-bar_custom">
                                        <div className="progress-4" style={{ width: '0%' }} />
                                    </div>
                                    <p className="percent text-right mb-0">
                                        0%
          </p>
                                </div>
                                <div className="star-progress-bar d-flex align-items-center align-self-stretch">
                                    <p className="star-number d-flex align-items-center mb-0">
                                        1 <i className="fa fa-star" />
                                    </p>
                                    <div className="progress-bar_custom">
                                        <div className="progress-1" style={{ width: '10%' }} />
                                    </div>
                                    <p className="percent text-right mb-0">
                                        10%
          </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 py-4 d-flex align-items-center">
                                <div className="star-rating">
                                    <h4 className="title">Chia sẻ nhận xét về sản phẩm</h4>
                                    <button className="btn btn--yellow">Viết nhận xét của bạn</button>
                                </div>
                            </div>
                            <div className="col-12 filter d-flex align-items-center">
                                <p className="title text-center mb-0">
                                    Chọn xem nhận xét
        </p>
                                <div className="opt-select">
                                    <select name="service">
                                        <option>Hữu ích</option>
                                        <option>Mới nhất</option>
                                        <option>Có hình ảnh</option>
                                    </select>
                                </div>
                                <div className="opt-select">
                                    <select name="service">
                                        <option>Tất cả khách hàng</option>
                                        <option>Khách đã mua hàng</option>
                                    </select>
                                </div>
                                <div className="opt-select">
                                    <select name="service">
                                        <option>Tất cả sao</option>
                                        <option>5 sao</option>
                                        <option>4 sao</option>
                                        <option>3 sao</option>
                                        <option>2 sao</option>
                                        <option>1 sao</option>
                                        <option>Hài lòng</option>
                                        <option>Chưa hài lòng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="review d-flex">
                                <div className="info-user d-flex text-center">
                                    <div className="avatar">
                                        <p className="icon-avatar d-flex align-items-center justify-content-center">MC</p>
                                        <p className="username">Lâm Mỹ Châu</p>
                                        <p className="text">6 tháng trước</p>
                                    </div>
                                </div>
                                <div className="information">
                                    <div className="title-infor d-flex">
                                        <p className="star-infor">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </p>
                                        <span>Hài lòng</span>
                                    </div>
                                    <p className="pur-infor d-flex align-items-center">
                                        <span className="img-pur d-inline-block" /> Đã mua hàng
          </p>
                                    <p className="content">Quyển 2,3 thì có bọc nhựa nhưng quyển 4 này k có bọc nên phía dưới quyển sách bị dơ dính dấu tay.</p>
                                    <div className="images-infor">
                                        <img src={img} alt="test" />
                                    </div>
                                    <div className="buttons-link d-flex align-items-center mt-2">
                                        <a href="/">Trả lời</a>
                                        <a href="/">Chia sẻ trên facebook</a>
                                        <p>Nhận xét này hữu ích với bạn?</p>
                                        <a href="# " className="btn btn--yellow-1"><i className="fa fa-thumbs-o-up" /> Cảm ơn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="review d-flex">
                                <div className="info-user d-flex text-center">
                                    <div className="avatar">
                                        <p className="icon-avatar d-flex align-items-center justify-content-center">LV</p>
                                        <p className="username">Luyn V</p>
                                        <p className="text">18 giờ trước</p>
                                    </div>
                                </div>
                                <div className="information">
                                    <div className="title-infor d-flex">
                                        <p className="star-infor">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </p>
                                        <span>Hài lòng</span>
                                    </div>
                                    <p className="pur-infor d-flex align-items-center">
                                        <span className="img-pur d-inline-block" /> Đã mua hàng
          </p>
                                    <p className="content">mua 3 quyển mà 1 quyển bị bóc mất bao ngoài rồi shop,nhưng vẫn oke ạ,giao nhanh</p>
                                    <div className="buttons-link d-flex align-items-center mt-2">
                                        <a href="/">Trả lời</a>
                                        <a href="/">Chia sẻ trên facebook</a>
                                        <p>Nhận xét này hữu ích với bạn?</p>
                                        <a href="# " className="btn btn--yellow-1"><i className="fa fa-thumbs-o-up" /> Cảm ơn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default index;