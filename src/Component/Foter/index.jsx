import React, { Component } from 'react';
import appStore from '../../asset/data/img/appstore.png';
import boCongThuong2 from '../../asset/data/img/bo-cong-thuong-2.png';
import boCongThuong1 from '../../asset/data/img/bo-cong-thuong.svg';
import playStore from '../../asset/data/img/playstore.png';
class index extends Component {
    render() {
        return (
            <footer className="footer-custom">
                <div className="container">
                    <div className="row py-5 rw-footer">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="footer-custom_left">
                                <div className="title">
                                    <h4>Đăng ký nhận bản tin khuyến mãi mỗi ngày</h4>
                                </div>
                                <div className="subtitle">
                                    <p>Đừng bỏ lỡ hàng ngàn sản phẩm từ chương trình siêu hấp dẫn</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="footer-custom_right">
                                <form action method="POST">
                                    <div className="form-fields">
                                        <input type="email" className="input-email" name="EMAIL" id="email-input" placeholder="Địa chỉ email của bạn" />
                                        <input type="submit" defaultValue="Đăng ký" className="submit-input btn--white" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-footer_main">
                    <div className="container">
                        <div className="row footer-custom_link">
                            <div className="col-footer_link">
                                <div className="title">
                                    <h4>
                                        HỖ TRỢ KHÁCH HÀNG
            </h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="/">Các câu hỏi thường gặp</a></li>
                                        <li><a href="/">Gửi yêu cầu hỗ trợ</a></li>
                                        <li><a href="/">Hướng dẫn đặt hàng</a></li>
                                        <li><a href="/">Phương thức vận chuyển</a></li>
                                        <li><a href="/">Chính sách đổi trả</a></li>
                                        <li><a href="/">Hướng dẫn mua trả góp</a></li>
                                        <li><a href="/">Chính sách hàng nhập khẩu</a></li>
                                    </ul>
                                    <p>Hỗ trợ khách hàng: <a href="/">hotro@marketplace.vn</a></p>
                                    <p>Báo lỗi bảo mật: <a href="/">security@marketplace.vn</a></p>
                                </div>
                            </div>
                            <div className="col-footer_link">
                                <div className="title">
                                    <h4>
                                        VỀ QT-DATA
            </h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="/">Giới thiệu QT-Data</a></li>
                                        <li><a href="/">Tuyển Dụng</a></li>
                                        <li><a href="/">Chính sách bảo mật thanh toán</a></li>
                                        <li><a href="/">Chính sách bảo mật thông tin cá nhân</a></li>
                                        <li><a href="/">Chính sách giải quyết khiếu nại</a></li>
                                        <li><a href="/">Điều khoản sử dụng</a></li>
                                        <li><a href="/">Giới thiệu QT-Data Xu</a></li>
                                        <li><a href="/">Bán hàng doanh nghiệp</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-footer_link">
                                <div className="title">
                                    <h4>
                                        HỢP TÁC VÀ LIÊN KẾT
            </h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="/">Quy chế hoạt động Sàn GDTMĐT</a></li>
                                        <li><a href="/">Bán hàng cùng QT-Data</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-footer_link">
                                <div className="title">
                                    <h4>
                                        THÔNG TIN
            </h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="/">Liên hệ, góp ý</a></li>
                                        <li><a href="/">Giải thưởng</a></li>
                                        <li><a href="/">Tin tức</a></li>
                                        <li><a href="/">Mã giảm giá</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-footer_link">
                                <div className="title">
                                    <h4>
                                        KẾT NỐI VỚI CHÚNG TÔI
            </h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-youtube-play ic-footer" aria-hidden="true" /></a></li>
                                        <li><a href="/"><i className="fa fa-facebook ic-footer ic-footer_face" aria-hidden="true" /></a></li>
                                        <li><a href="/"><i className="fa fa-instagram ic-footer" aria-hidden="true" /></a></li>
                                        <li><a href="/"><span><img src="img/zalo-min.png" alt="test"  /></span></a></li>
                                    </ul>
                                </div>
                                <div className="store">
                                    <h4>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h4>
                                    <a href="/">
                                        <img src={appStore} alt="test"  width={134} />
                                    </a>
                                    <a href="/">
                                        <img src={playStore} alt="test"  width={134} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row footer-custom_link">
                        <div className="address">
                            <div className="address-info">
                                <p className="address-title">
                                    <strong>Địa chỉ văn phòng:</strong> 188 Đường Lê Trọng Tấn, Phường Hòa Phát, Quận Cẩm Lệ, Thành Phố Đà Nẵng
          </p>
                                <p className="address-text">
                                    QT-Data nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn<br />phòng hoặc trung tâm xử lý đơn hàng
          </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coppyright-footer">
                    <div className="container">
                        <div className="row footer-custom_link d-flex align-items-center">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div>
                                    <h5>© 2016 - Bản quyền của Công Ty Cổ Phần QT-Data - QT-Data.vn</h5>
                                    <p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng cấp ngày 06/01/2010</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 text-right">
                                <div className="img-right">
                                    <a href="/">
                                        <img src={boCongThuong2} alt="test"  width={36} />
                                    </a>
                                    <a href="/">
                                        <img src={boCongThuong1} alt="test"  width={120} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default index;