import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="bg-breadcrum">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-12 d-sm-none d-md-block">
                                    <nav className="breadcrumb breadcrumb-nav">
                                        <a className="breadcrumb-item" href="/">Trang chủ</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="doi-tra">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 text-center">
                                    <div className="images-custom">
                                        <img src="image/doiTra30days.jpg" alt="test" />
                                    </div>
                                    <div className="title"> Đổi trả trong vòng 30 ngày </div>
                                    <div className="description">
                                        <a href="/">Chi tiết áp dụng</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 text-center">
                                    <div className="images-custom">
                                        <img src="image/freeship.jpg" alt="test" />
                                    </div>
                                    <div className="title">Gửi hàng miễn phí</div>
                                    <div className="description">Market thu hồi sản phẩm miễn phí tận nơi trên toàn quốc.</div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 text-center">
                                    <div className="images-custom">
                                        <img src="image/Updateinfo.jpg" alt="test" />
                                    </div>
                                    <div className="title">Cập nhật thông tin</div>
                                    <div className="description">Cập nhật liên tục từng giai đoạn xử lý qua email.</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <h2 className="row step-header">
                                        <span className="text">
                                            {/* <img src="image/3step.png" alt="test"> */}
              bước đổi trả cực kì đơn giản
            </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row step-detail">
                                <div className="col-12 col-md-4 col-lg-4 col-card-custom">
                                    <div className="card card-custom__text">
                                        <div className="step-image">
                                            <img src="image/dkiDoiTra30days.jpg" alt="Đăng kí đổi trả" className="img-responsive" />
                                        </div>
                                        <div className="card-body">
                                            <div className="step-title">
                                                Đăng ký đổi trả
              </div>
                                            <div className="step-description">
                                                Liên hệ MarketCare qua hotline 1900-1234 hoặc Truy cập <a href="/">hotro.market.vn</a>
                để đăng kí đổi/trả kể cả thứ 7, Chủ nhật.
              </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-card-custom">
                                    <div className="card card-custom__text">
                                        <div className="step-image">
                                            <img src="image/messenger.jpg" alt="Nhận tin nhắn xác nhận" className="img-responsive" />
                                        </div>
                                        <div className="card-body">
                                            <div className="step-title">
                                                Nhận tin nhắn xác nhận
              </div>
                                            <div className="step-description">
                                                Tin nhắn xác nhận và email hướng dẫn đổi/trả sẽ ngay lập tức được gửi đến khách hàng
                                                ngay sau khi khách hàng đăng kí đổi/trả thành công.
              </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-card-custom">
                                    <div className="card card-custom__text">
                                        <div className="step-image">
                                            <img src="image/freeShipTki.jpg" alt="Miễn phí gửi hàng về Market" className="img-responsive" />
                                        </div>
                                        <div className="card-body">
                                            <div className="step-title">
                                                Miễn phí gửi hàng về Market
              </div>
                                            <div className="step-description">
                                                Market thu hồi sản phẩm miễn phí tận nơi trên toàn quốc.
              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <h2 className="row step-header-1">
                                        <span className="text">
                                            {/* <img src="image/xoaytron.png" alt="test"> */}
              thời gian áp dụng đổi trả
            </span>
                                    </h2>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="time-body table-responsive text-center">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th width="20%" />
                                                    <th width="20%">Kể từ khi Tiki<br />giao hàng thành công</th>
                                                    <th width="20%">Sản phẩm lỗi<br /><i>(do nhà cung cấp)</i></th>
                                                    <th width="20%">Sản phẩm không lỗi <sup>(*)</sup></th>
                                                    <th>Sản phẩm lỗi<br />do người sử dụng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* 1 */}
                                                <tr>
                                                    <td rowSpan={3}>
                                                        Đối với các ngành hàng:<br />
                    Điện Tử: Điện Thoại - Máy Tính Bảng, Điện Lạnh, Tivi, Máy ảnh - Máy quay phim,
                    Laptop
                  </td>
                                                    <td>
                                                        7 ngày đầu tiên
                  </td>
                                                    <td>
                                                        Đổi mới<br />
                    Trả không thu phí
                  </td>
                                                    <td rowSpan={3}>
                                                        Không hỗ trợ đổi/trả
                  </td>
                                                    <td rowSpan={3}>
                                                        Bảo hành hoặc sửa chữa có thu phí theo quy định của nhà cung cấp
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        8 - 30 ngày
                  </td>
                                                    <td>Bảo hành</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        30 ngày trở đi
                  </td>
                                                    <td>
                                                        Bảo hành
                  </td>
                                                </tr>
                                                {/* end 1 */}
                                                {/* 2 */}
                                                <tr>
                                                    <td rowSpan={3}>
                                                        Điện gia dụng <br />Phụ kiện, linh kiện điện tử.
                  </td>
                                                    <td>
                                                        7 ngày đầu tiên
                  </td>
                                                    <td>
                                                        Đổi mới<br />
                    Trả không thu phí
                  </td>
                                                    <td rowSpan={2}>
                                                        Trả không thu phí
                  </td>
                                                    <td rowSpan={3}>
                                                        Bảo hành hoặc sửa chữa có thu phí theo quy định của nhà cung cấp
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        8 - 30 ngày
                  </td>
                                                    <td>Bảo hành</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        30 ngày trở đi
                  </td>
                                                    <td>
                                                        Bảo hành
                  </td>
                                                    <td>Không hỗ trợ đổi/trả</td>
                                                </tr>
                                                {/* end 2 */}
                                                {/* 3 */}
                                                <tr>
                                                    <td>Xe máy, Xe máy điện</td>
                                                    <td colSpan={4}>Chỉ áp dụng bảo hành, không áp dụng đổi trả</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan={3}>
                                                        Voucher/ E-voucher dịch vụ
                  </td>
                                                    <td>7 ngày đầu tiên</td>
                                                    <td rowSpan={2}>
                                                        Đổi mới<br />
                    Trả không thu phí
                  </td>
                                                    <td>Trả không thu phí</td>
                                                    <td rowSpan={2}>
                                                        Không hỗ trợ đổi trả
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>8 - 30 ngày</td>
                                                    <td>
                                                        Không hỗ trợ đổi / trả
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>30 ngày trở đi</td>
                                                    <td colSpan={3}>Không hỗ trợ đổi trả</td>
                                                </tr>
                                                {/* end 3 */}
                                                {/* tikingon */}
                                                <tr>
                                                    <td>Thực phẩm tươi sống: Thịt, Hải sản, Rau củ, Trái cây, Thực phẩm đông lạnh, Thực
                    phẩm chế biến sẵn, Bơ sữa &amp; Trứng</td>
                                                    <td colSpan={4}>Không áp dụng đổi trả</td>
                                                </tr>
                                                <tr>
                                                    <td>Thực phẩm tươi sống: Các sản phẩm còn lại</td>
                                                    <td>24 giờ</td>
                                                    <td>
                                                        Đổi mới<br />
                    Trả không thu phí
                  </td>
                                                    <td colSpan={2}>
                                                        Không áp dụng đổi trả
                  </td>
                                                </tr>
                                                {/* end tikingon */}
                                                {/* 4 */}
                                                <tr>
                                                    <td rowSpan={3}>
                                                        Đối với các ngành hàng còn lại
                  </td>
                                                    <td>7 ngày đầu tiên</td>
                                                    <td rowSpan={2}>
                                                        Đổi mới<br />
                    Trả không thu phí
                  </td>
                                                    <td rowSpan={2}>
                                                        Trả không thu phí
                  </td>
                                                    <td rowSpan={3}>
                                                        Không hỗ trợ đổi trả
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>8 - 30 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>30 ngày trở đi</td>
                                                    <td colSpan={2}>Không hỗ trợ đổi trả</td>
                                                </tr>
                                                {/* end 4 */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 col-text__category">
                                    <h2 className="row step-header-2" style={{ marginBottom: 16 }}>
                                        <span className="text">
                                            danh mục hạn chế đổi trả
            </span>
                                    </h2>
                                    <div className="container">
                                        <p>Market rất tiếc sẽ không áp dụng đổi - trả theo nhu cầu của khách hàng khi sản phẩm không lỗi với
              các sản phẩm nằm trong danh mục sau và khi sản phẩm không đáp ứng điều kiện theo <a href="/">chính sách Trả - Hoàn Tiền Theo Mong Muốn Của Khách Hàng:</a></p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="time-body table-responsive text-left">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th width="30%">DANH MỤC</th>
                                                    <th width="70%">SẢN PHẨM </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Điện thoại - Máy tính bảng - Laptop</td>
                                                    <td>Điện thoại, máy tính bảng, Laptop</td>
                                                </tr>
                                                <tr>
                                                    <td>Thiết bị số - Phụ kiện số - Thiết bị IT</td>
                                                    <td>Sản phẩm đã được kích hoạt bảo hành, đã tháo seal, qua sử dụng, sao lưu dữ
                    liệu,....</td>
                                                </tr>
                                                <tr>
                                                    <td>Máy ảnh - Máy quay phim</td>
                                                    <td>Tất cả sản phẩm trong danh mục https://tiki.vn/may-anh</td>
                                                </tr>
                                                <tr>
                                                    <td>Tivi</td>
                                                    <td>Tất cả sản phẩm Tivi</td>
                                                </tr>
                                                <tr>
                                                    <td>Điện lạnh</td>
                                                    <td>Tủ lạnh, máy giặt, máy lạnh - máy điều hòa, máy nước nóng, máy sấy quần áo, máy
                    rửa chén, tủ đông - tủ mát, tủ ướp rượu</td>
                                                </tr>
                                                <tr>
                                                    <td>Thời trang</td>
                                                    <td>
                                                        - Đồ lót, đồ bơi, đồ ngủ, đồ bộ, trang sức <br />
                    - Giày dép thuộc thương hiệu: Converse, Vans <br />
                    - Thương hiệu đồng hồ của một số nhà bán: <br />
                    - Nhà bán Đồng Hồ Tân Tân: BULOVA, CARAVELLE, Citizen, CITIZEN (Japan), Movado,
                    Tissot. <br />
                    - Nhà bán Nguyên Vạn Lộc (Nguyen Van Loc): Adriatica, ANNE KLEIN, Armitron,
                    Jazma, LACOSTE, Obaku, Sonata, STORM, Titan, TOMMY HILFIGER. <br />
                    - Hàng thời trang thuộc nhãn hiệu Mango
                  </td>
                                                </tr>
                                                <tr>
                                                    <td>Làm đẹp - Sức khỏe</td>
                                                    <td> Nước hoa</td>
                                                </tr>
                                                <tr>
                                                    <td>Sản phẩm cho mẹ &amp; bé</td>
                                                    <td> Sữa, bột ăn dặm, các loại thực phẩm, thức uống cho mẹ và bé
                    Đồ lót, đồ bơi của bé</td>
                                                </tr>
                                                <tr>
                                                    <td>Sách</td>
                                                    <td>Báo, tạp chí, các ấn phẩm định kỳ <br />
                    Băng đĩa CD/DVD <br />
                    Sách điện tử (ebook)
                  </td>
                                                </tr>
                                                <tr>
                                                    <td> Xe Máy, Ô tô, Xe Đạp</td>
                                                    <td> Xe máy, xe máy điện, xe đạp điện, xe đạp.</td>
                                                </tr>
                                                <tr>
                                                    <td>Thực phẩm tươi sống</td>
                                                    <td>
                                                        Thịt, Hải sản, Rau củ, Trái cây, Thực phẩm đông lạnh, Thực phẩm chế biến sẵn, Bơ
                    sữa &amp; Trứng</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 text-center subtext-custom">
                                    <p>(*) Chỉ áp dụng khi sản phẩm đáp ứng đủ điều kiện theo <a href="/">chính sách.</a></p>
                                    <p>Chính sách đổi trả hàng giao từ nước ngoài: <a href="/">Xem thêm tại đây</a></p>
                                    <p className="subtext-custom__pollicy">Nếu nhận được sản phẩm bị lỗi ngoại quan (có dấu hiệu bị trầy xước, hư hỏng bên ngoài, bể vỡ ) ,
            quý khách vui lòng liên hệ với Market trong vòng 48h kể từ khi nhận hàng thành công.</p>
                                </div>
                                <div className="col-12 col-md-12 col-lg-12 text-center col-btn_small">
                                    <button type="button" className="btn btn--red-2">Hướng dẫn đổi/trả lại Market</button>
                                    <button type="button" className="btn btn--red-2">Chính sách đổi trả chi tiết</button>
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