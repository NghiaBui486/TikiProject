import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { ShopBanHangServices } from '../../../Services';
const schema = yup.object().shape({
    StoreOwnername: yup.string().required("Vui lòng không bỏ trống"),
    EmailOwner: yup.string().required('Vui lòng không bỏ trống'),
    ShopName: yup.string().required('Vui lòng không bỏ trống'),

})
class index extends Component {
    render() {
        const elementDanhMuc = this.props.danhMucSanPham?.map((item, index) => {
            return (
                <option value={item._id} key={index} >{item.title}</option>

            )
        })
        const tenDanhMuc = this.props.danhMucSanPham?.find(item => item._id == this.props.thongTinSanPham.IdCategory)
        const userObj = JSON.parse(localStorage.getItem('banHang'))
        const user = userObj.user
        return (
            <>



                <Formik onSubmit={(value) => {
                    ShopBanHangServices.capNhatThongTinBanHang(value,user.IdShop).then(res=>{
                        Swal.fire({
                            title : "Cập nhật thông tin thành công",
                            timer : 800,
                            position : "center",
                            icon : "success"
                        })
                    }).catch(err=>{
                        Swal.fire({
                            title : err.response.data.message,
                            timer : 800,
                            position : "center",
                            icon : "error"
                        })
                    })
                }}
                    initialValues={{
                        StoreOwnername: "",
                        Phone: "",
                        EmailOwner: "",
                        ShopName: "",
                        PasswordShop: ""

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {

                        return (
                            <>
                                <h3 className="text-primary text-center">Cập nhật thông tin</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên Shop : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={user.StoreOwnername} type="text" />
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="StoreOwnername" />
                                    </div>
                                    <ErrorMessage name="StoreOwnername">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Phone </label>
                                        <Field className="form-control" type="type" value={user.Phone} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Phone" />

                                    </div>
                                    <div className="form-group">
                                        <label > Email </label>
                                        <Field className="form-control" type="type" value={user.EmailOwner} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="EmailOwner" />
                                        <ErrorMessage name="EmailOwner">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>

                                    </div>
                                    <div className="form-group">
                                        <label > Password </label>
                                        <Field className="form-control" type="password" onChange={formikProps.handleChange} name="PasswordShop" />

                                    </div>
                                    <div className="form-group">
                                        <label > ShopName </label>
                                        <Field className="form-control" type="type" value={user.ShopName} disabled onChange={formikProps.handleChange} />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="ShopName" />

                                    </div>
                                    <ErrorMessage name="ShopName">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>



                                    <button className="btn btn-success">Cập nhật thông tin</button>
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

})
export default connect(mapStateToProps)(index);