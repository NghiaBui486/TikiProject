import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { UserServices } from '../../../../../Services';
const schema = yup.object().shape({
    FullName: yup.string().required("Vui lòng không bỏ trống"),
    Password: yup.string().required("Vui lòng không bỏ trống"),
    Phone: yup.number("Chỉ được nhập số").min(8)
        .required('Vui lòng nhấp số điện thoại'),
    Email: yup.string().email(),

})
class index extends Component {

    render() {
        return (
            <>



                <Formik onSubmit={(value) => {
                    let token, user
                    user = localStorage.getItem("user")
                    if (user) {
                        let userObj = JSON.parse(user)
                        token = userObj.token

                        UserServices.capNhatThongTin(token, value, this.props.layThongTinUser._id).then(res => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Cập nhật thành công ! ',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }).catch(err => {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: err.response.data.message,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                    } else{
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: "Vui lòng đăng nhập để sửa thông tin",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }}
                    initialValues={{
                        FullName: "",
                        Password: "",
                        Phone: "",
                        Email: "",
                        Gender: 0,
                        Role: "basic"

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Sửa thông tin</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Họ tên : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={this.props.layThongTinUser.FullName} type="text" />

                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="FullName" />
                                    </div>
                                    <ErrorMessage name="FullName">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Mật khẩu : </label>
                                        <Field className="form-control" type="password" onChange={formikProps.handleChange} name="Password" />
                                    </div>
                                    <ErrorMessage name="Password">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Số điện thoại : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={this.props.layThongTinUser.Phone} type="text" />
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Phone" />
                                    </div>
                                    <ErrorMessage name="Phone">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label >   Email : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={this.props.layThongTinUser.Email} type="text" />

                                        <Field className="form-control" type="email" onChange={formikProps.handleChange} name="Email" />
                                    </div>
                                    <ErrorMessage name="Email">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>

                                    <div className="form-group">
                                        <label > Loại người dùng : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" disabled value={this.props.layThongTinUser.Role=="basic"?"Người dùng":"Admin"} type="text" />
                                        <Field onChange={formikProps.handleChange} component="select" className="form-control" type="text" name="Role">
                                            <option value="basic">Người dùng</option>
                                            <option value="admin">Admin</option>
                                        </Field>
                                    </div>



                                    <div className="form-group" style={{ display: "flex" }}>
                                        <label className=""> Giới tính : </label>

                                        <div className="ml-3 form-group" style={{ display: "flex" }}>
                                            <p className="ml-5">
                                                Nam :
                                        <input type="radio" onChange={formikProps.handleChange} className="ml-3 mr-3 mt-0" name="Gender" value={0} />
                                            </p>
                                            <p className="ml-5">
                                                Nữ :
                                        <input type="radio" onChange={formikProps.handleChange} name="Gender" className="ml-3 mt-0" value={1} />

                                            </p>
                                        </div>

                                    </div>
                                    <button className="btn btn-warning">Cập nhật</button>
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
    layThongTinUser: state.userReducers.layThongTinUser
})
export default connect(mapStateToProps)(index);