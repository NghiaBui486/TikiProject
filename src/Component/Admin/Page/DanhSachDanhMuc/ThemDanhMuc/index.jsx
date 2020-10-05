import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { ThemDanhMuc } from '../../../../../Redux/Action/product';
const schema = yup.object().shape({
    Icon: yup.string().required("Vui lòng không bỏ trống"),
    Title: yup.string().required("Vui lòng không bỏ trống"),

})
class index extends Component {
    
    render() {
        return (
            <>



                <Formik onSubmit={(value) => {
                    
                    ThemDanhMuc(value)
                    this.props.history.push("/admin")
                }}
                    initialValues={{
                        Title : "",
                        Icon : ""

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Thêm danh mục</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên danh mục : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="Title" />
                                    </div>
                                    <ErrorMessage name="Title">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link Icon : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Icon" />
                                    </div>
                                    <ErrorMessage name="Icon">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <button className="btn btn-success">Thêm Sản Phẩm</button>
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