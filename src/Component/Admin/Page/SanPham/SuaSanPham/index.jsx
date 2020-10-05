import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { CapNhatSanPham } from '../../../../../Redux/Action/product';
const schema = yup.object().shape({
    Name: yup.string().required("Vui lòng không bỏ trống"),
    Price: yup.number().required("Vui lòng không bỏ trống"),
    Image: yup.string().required("Vui lòng không bỏ trống"),
    DetailedDescription: yup.string().required('Vui lòng không bỏ trống'),

})
class index extends Component {
    render() {
        const elementDanhMuc = this.props.danhMucSanPham?.map((item, index) => {
            return (
                <option value={item._id} key={index} >{item.Title}</option>

            )
        })
        const tenDanhMuc = this.props.danhMucSanPham.find(item => item._id == this.props.thongTinSanPham.IdCategory)
        return (
            <>



                <Formik onSubmit={(value) => {
                    CapNhatSanPham(this.props.match.params.id, value)
                    this.props.history.push('/admin/danhsachsanpham')
                }}
                    initialValues={{

                        Name: "",
                        IdUser: "5f5f3a4b394537001728c385",
                        IdShop: "5f5f3a4b394537001728c385",
                        IdCategory: "5f60727110312900173437a0",
                        IdCategorySub: "5f5f3a4b394537001728c385",
                        Price: "",
                        Model: "Iphone",
                        Image: "",
                        ImageList: [],
                        DetailedDescription: "",
                        Sale: "",
                        StatusSale: false,
                        ExpirationDateSale: "",
                        soLuongBan: 0,
                        Warranty: false,

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Sửa sản phẩm</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên sản phẩm : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={this.props.thongTinSanPham.Name} type="text" />
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="Name" />
                                    </div>
                                    <ErrorMessage name="Name">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Giá sản phẩm : </label>
                                        <Field className="form-control" type="type" value={this.props.thongTinSanPham.Price} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Price" />

                                    </div>
                                    <ErrorMessage name="Price">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>

                                    <div className="form-group">
                                        <label > Mô tả : </label>
                                        <Field className="form-control" type="type" value={this.props.thongTinSanPham.DetailedDescription} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="DetailedDescription" />

                                    </div>
                                    <ErrorMessage name="DetailedDescription">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link hình : </label>
                                        <Field className="form-control" type="type" value={this.props.thongTinSanPham.Image} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Image" />

                                    </div>
                                    <ErrorMessage name="Image">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Giá giảm : </label>
                                        <Field className="form-control" type="type" value={this.props.thongTinSanPham.Sale} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Sale" />

                                    </div>
                                    <div className="form-group">
                                        <label > Ngày hết hạn giảm giá : </label>
                                        <Field className="form-control" type="text" value={this.props.thongTinSanPham.ExpirationDateSale} disabled onChange={formikProps.handleChange} />

                                        <Field className="form-control" type="date" onChange={formikProps.handleChange} name="ExpirationDateSale" />
                                    </div>
                                    {/* <div className="form-group">
                                        <label > Số lượng bán giảm giá : </label>
                                        <Field className="form-control" type="text" onChange={formikProps.handleChange} name="soLuongBan" />
                                    </div> */}
                                    {/* <ErrorMessage name="ngayHetSale">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage> */}
                                    <div className="form-group">
                                        <label > Danh mục sản phẩm </label>
                                        <Field className="form-control" type="text" disabled onChange={formikProps.handleChange} value={tenDanhMuc?.Title} name="" />

                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="IdCategory">
                                            {elementDanhMuc}
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label > Giảm giá </label>
                                        <Field className="form-control" type="text" disabled onChange={formikProps.handleChange} value={this.props.thongTinSanPham.StatusSale} name="StatusSale" />

                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="StatusSale">
                                            <option value={false}>False</option>
                                            <option value={true}>True</option>
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label > Sản phẩm mới </label>
                                        <Field className="form-control" type="text" disabled onChange={formikProps.handleChange} value={this.props.thongTinSanPham.Warranty} name="Warranty" />
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="Warranty">
                                            <option value={false}>False</option>
                                            <option value={true}>True</option>
                                        </Field>
                                    </div>
                                    <button className="btn btn-success">Sửa sản phẩm</button>
                                </Form>
                            </>
                        )
                    }}
                />
            </>
        );
    }
}
const mapStateToProps = state => ({
    thongTinSanPham: state.productReducers.thongTinSanPham,
    danhMucSanPham: state.productReducers.danhMucSanPham
})
export default connect(mapStateToProps)(index);