import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';
import { ThemPhim } from '../../../../Redux/Action/movie';
const schema = yup.object().shape({
    tenPhim: yup.string().required("Vui lòng không bỏ trống"),
    theLoai: yup.string().required("Vui lòng không bỏ trống"),
    img: yup.string().required("Vui lòng không bỏ trống"),
    moTa : yup.string().required('Vui lòng không bỏ trống'),
    iframe : yup.string().required('Vui lòng không bỏ trống'),
    thoiLuongPhim : yup.string().required('Vui lòng không bỏ trống')

})
class index extends Component {
    render() {
        return (
            <>



                <Formik onSubmit={(value) => {
                    ThemPhim(value)
                    this.props.history.push('/admin')
                }}
                    initialValues={{

                        tenPhim: "",
                        theLoai: "",
                        thoiLuongPhim: "",
                        img : "",
                        iframe : "",
                        moTa : ""

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Thêm phim</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên phim : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="tenPhim" />
                                    </div>
                                    <ErrorMessage name="tenPhim">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Thể loại : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="theLoai" />
                                    </div>
                                    <ErrorMessage name="theLoai">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                   
                                    <div className="form-group">
                                        <label > Thời lượng phim : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="thoiLuongPhim" />
                                    </div>
                                    <ErrorMessage name="thoiLuongPhim">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link hình : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="img" />
                                    </div>
                                    <ErrorMessage name="img">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > iframe phim : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="iframe" />
                                    </div>
                                    <ErrorMessage name="iframe">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Mô tả : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="moTa" />
                                    </div>
                                    <ErrorMessage name="moTa">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <button className="btn btn-success">Thêm Phim</button>
                                </Form>
                            </>
                        )
                    }}
                />
            </>
        );
    }
}

export default index;