import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <>
                <div>
                    <header className="header-register">
                        <div className="top-bar d-none d-md-block d-lg-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 top-bar_text">
                                        <span>Chào mừng tới Marketplace</span>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <ul className="infor-topbar">
                                            <li>Email: <a href="/">partnersupport@market.vn</a></li>
                                            <li>Hotline: <a href="/">1900 1234</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-nav">
                            <div className="container">
                                <nav className="navbar navbar-expand-lg navbar-light nav-custom">
                                    <a className="navbar-brand nav-logo" href="#"><img src="image/header-logo.png" alt="test" /></a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse nav-items_menu" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">GIỚI THIỆU SÀN MARKETPLACE <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">CHƯƠNG TRÌNH KHUYẾN MÃI</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">CHÍNH SÁCH NHÀ BÁN HÀNG</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">HỌC VIỆN ĐÀO TẠO</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">HỖ TRỢ NHÀ BÁN</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <section className="banner-landing">
                        <div className="container">
                            <div className="row">
                                <a href="/">
                                    <img className="banner-landing_img" src="image/bann-seller-v2.png" alt />
                                </a>
                            </div>
                        </div>
                        <div className="container step-count">
                            <div className="row">
                                <h3>Đăng ký bán hàng cùng Marketplace trong 48 giờ</h3>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="step">
                                        <div className="img-step">
                                            <img src="image/step-1.svg" alt="test" />
                                        </div>
                                        <p className="title-step">Bước 1</p>
                                        <p className="content-step">
                                            Điền form đăng ký &amp;<br />ký hợp đồng
            </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="step">
                                        <div className="img-step">
                                            <img src="image/step-2.svg" alt="test" />
                                        </div>
                                        <p className="title-step">Bước 2</p>
                                        <p className="content-step">
                                            Tham gia khoá học <br /> cùng Marketplace
            </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="step">
                                        <div className="img-step">
                                            <img src="image/step-3.svg" alt="test" />
                                        </div>
                                        <p className="title-step">Bước 3</p>
                                        <p className="content-step">
                                            Đăng bán <br />sản phẩm
            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="co-operate">
                        <div className="container">
                            <div className="row">
                                <h3 className="title-reason">Tại sao nên hợp tác với Marketship</h3>
                            </div>
                            <div className="row items-co-operate">
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text">5000</p>
                                    <p className="content-reason_text">thương hiệu chính hãng</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text"><img src="image/icon-marketship.png" alt="test" /></p>
                                    <p className="content-reason_text">nhận hàng chỉ trong vài giờ</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text">15</p>
                                    <p className="content-reason_text">ngành hàng</p>
                                </div>
                            </div>
                            <div className="row items-co-operate">
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text">95%</p>
                                    <p className="content-reason_text">khách hàng hài lòng</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text">40.000.000</p>
                                    <p className="content-reason_text">lượt truy cập/tháng</p>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <p className="title-reason_text">
                                        &lt;1% </p>
                                    <p className="content-reason_text">đổi trả</p>
                                </div>
                            </div>
                            <div className="row item-button">
                                <div className="reason-button">
                                    <a href="# " className="btn btn--yellow-2">ĐĂNG KÝ NGAY HÔM NAY</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="todo-custom">
                        <div className="container">
                            <div className="row rw-title_todo">
                                <h3 className="todo-custom_title">Làm gì sau khi đăng ký bán hàng thành công</h3>
                            </div>
                            <div className="row rw-todo">
                                <div className="col-12 col-md-4 col-lg-4 form-todo">
                                    <div className="todo">
                                        <p className="title-todo"><img src="image/icon-todo-1.svg" alt="test" /></p>
                                        <p className="content-todo">Chính sách bán hàng &amp; <br />các mô hình vận hành</p>
                                        <a href="# " className="btn btn-todo">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 form-todo">
                                    <div className="todo">
                                        <p className="title-todo"><img src="image/icon-todo-2.svg" alt="test" /></p>
                                        <p className="content-todo">Đăng bán sản phẩm lên <br />Seller Center</p>
                                        <a href="# " className="btn btn-todo">Hướng dẫn đăng ký</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 form-todo">
                                    <div className="todo-guide">
                                        <p className="title-todo"><img src="image/icon-todo-3.svg" alt="test" /></p>
                                        <p className="content-todo">Bán hàng &amp; tham gia các<br />chương trình khuyến mãi</p>
                                        <a href="# " className="btn btn-todo_custom">Hướng dẫn tham gia</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row item-button">
                                <div className="reason-button">
                                    <a href="# " className="btn btn--yellow-2">ĐĂNG KÝ NGAY HÔM NAY</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="inf-custom">
                        <div className="container">
                            <div className="row">
                                <h3 className="inf-custom_title">Hệ thống Trung tâm bán hàng</h3>
                                <p>Được thiết kế để phục vụ nhu cầu quản lý đa dạng hàng hoá, hệ thống Trung tâm bán hàng (Seller
                                Center) Tiki cho phép thao tác cập nhật cùng một lúc trên nhiều sản phẩm. Đối tác có thể dễ dàng
                                điều chỉnh giá cả, tồn kho, khuyến mãi, tạo sản phẩm mới… mà không tốn quá nhiều thời gian. Thoả sức
                                sáng tạo với tính năng thiết kế giao diện trang cửa hàng cho riêng mình. Cập nhật tình hình kinh
          doanh qua các chỉ số, báo cáo thông minh.</p>
                            </div>
                            <div className="row item-button">
                                <div className="reason-button">
                                    <a href="# " className="btn btn--yellow-2">ĐĂNG KÝ NGAY HÔM NAY</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section class="logo-brand">
  <div class="container">
      <div class="row">
          <h3 class="logo-brand_title">Hàng ngàn thương hiệu tin tưởng và lựa chọn hợp tác cùng Marketship</h3>
      </div>
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=1">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=2">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=3">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=4">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=5">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=6">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=7">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=8">
  </div>
  <div>
      <img src="http://placehold.it/350x300?text=9">
  </div>
    </section> */}
                    <footer className="footer-register">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-3 col-lg-3 col-r1__logo">
                                    <img src="image/logoft-marketship.png" alt="test" />
                                    <span>Bộ phận hỗ trợ đối tác</span>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center">
                                    <ul>
                                        <li>Email: <a href="/">partnersupport@market.vn</a></li>
                                        <li>Hotline: <a href="/">1900 1234</a></li>
                                        <li>Thời gian làm việc: Thứ 2 - Thứ 7: 8h00 - 18h00 (CN &amp; Ngày lễ: Nghỉ)</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 col-custom__text">
                                    <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                                    <div className="media">
                                        <a href="/">
                                            <img src="image/facebook.svg" alt="test" />
                                        </a>
                                        <a href="/">
                                            <img src="image/youtube.svg" alt="test" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

            </>
        );
    }
    componentDidMount(){
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
}

export default index