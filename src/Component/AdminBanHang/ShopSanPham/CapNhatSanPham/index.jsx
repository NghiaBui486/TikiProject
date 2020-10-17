import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { createAction } from '../../../../Redux/Action';
import { SaveDanhMucCon, ThemSanPham, DanhMucSanPham } from '../../../../Redux/Action/product';
import { SAVEDANHMUCCON } from '../../../../Redux/Action/type';
import { DanhSachSanPham } from '../../../../Redux/Action/product';


const schema = yup.object().shape({
    Name: yup.string().required("Vui lòng không bỏ trống"),
    Price: yup.number().required("Vui lòng không bỏ trống"),
    Image: yup.string().required("Vui lòng không bỏ trống"),
    DetailedDescription: yup.string().required('Vui lòng không bỏ trống'),

})
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            userAccountData: {
                userid: '',
                useravtar: '',
                attachement_id: '',
            },
            IdCategory : this.props.danhMucSanPham[0]?._id,
            IdCategorySub : this.props.danhMucSanPham[0]?.ListSubCategory[0]._id,
            IdShop : JSON.parse(localStorage.getItem('banHang')).shop.IdShop,
        }
    }

    componentWillMount(){
        console.log(JSON.parse(localStorage.getItem('banHang')));
        console.log("AAAAAAAAAAAAA", this.props.danhMucSanPham)
        this.setState({
            IdCategory : this.props.danhMucSanPham[0]?._id,
            IdCategorySub : this.props.danhMucSanPham[0]?.ListSubCategory[0]._id,
        }, 
        ()=>{
            this.props.dispatch(SaveDanhMucCon(this.state.IdCategory));
        })

    }

    componentDidMount() {
        let adminBanHang = JSON.parse(localStorage.getItem('banHang'))
        this.setState({
            IdCategory : this.props.danhMucSanPham[0]?._id,
            IdCategorySub : this.props.danhMucSanPham[0]?.ListSubCategory[0]._id,
            IdShop : adminBanHang.shop.IdShop
        }, 
        ()=>{
            this.props.dispatch(SaveDanhMucCon(this.state.IdCategory))
        })
    }

    handleFileUpload = (event) => {
        this.setState({ useravtar: event.currentTarget.files[0] }, () => {
        })
    };
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    onChangeDanhMuc = (e) => {
        console.log("Props onchange",this.props);
        let DanhMucSanPham =  this.props.danhMucSanPham;
        let DanhMucHienTai = null;
        DanhMucSanPham.forEach(itemDanhMuc => {
            if(itemDanhMuc._id === e.target.value){
                DanhMucHienTai = itemDanhMuc;
            }
        });
        this.setState({
            IdCategorySub: undefined
        })
        if(DanhMucHienTai.ListSubCategory[0]){
            this.setState({
                [e.target.name] : e.target.value,
                IdCategorySub : DanhMucHienTai.ListSubCategory[0]._id,
            },()=>{
                if(this.state.IdCategory){
                    this.props.dispatch(SaveDanhMucCon(this.state.IdCategory))
                }
            })
        }
        else{
            this.setState({
                [e.target.name] : e.target.value,
            },()=>{
                if(this.state.IdCategory){
                    this.props.dispatch(SaveDanhMucCon(this.state.IdCategory))
                }
            })
        }
    }

    onChangeDanhMucCon = (e) =>{
        this.setState({
            IdCategorySub: e.target.value
        })
    }
    
    
    render() {
        console.log(this.props.danhMucSanPham, "?MSDCONE??ddd");
        const elementDanhMuc = this.props.danhMucSanPham.map((item, index) => {
            return (
                <option value={item._id} key={index} >{item.Title}</option>

            )
        })
        const elementDanhMucCon = this.props.danhMucCon[0]?.ListSubCategory.map((item,index)=>{
            return(
                <option value={item._id} key={index}>{item.Title}</option>
            )
        })
        return (
            <>
                <Formik onSubmit={(value) => {
                    value.ImageList.push(value.Image)
                    console.log("Dữ liệu gửi đi: ",value)
                    ThemSanPham(value)
                    setTimeout(()=> {
                        this.props.history.push('/adminbanhang/sanpham')
                    }, 2000);
                }}
                    initialValues={{

                        Name: "",
                        IdUser: this.state.IdShop,
                        IdShop: this.state.IdShop,
                        IdCategory: this.state.IdCategory,
                        IdCategorySub: this.state.IdCategorySub,
                        Price: "",
                        Model: "Iphone",
                        Image: "",
                        ImageList: [],
                        DetailedDescription: "",
                        Sale: "",
                        StatusSale: false,
                        ExpirationDateSale: "",
                        soLuongBan: 0,
                        Warranty: true,

                    }}
                    handleChange={() => {
                        console.log("Change Form");
                    }}
                    validationSchema={schema}
                    render={(formikProps, handleBlur) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Thêm sản phẩm</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên sản phẩm : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="Name" />
                                    </div>
                                    <ErrorMessage name="Name">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Giá sản phẩm : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Price" />
                                    </div>
                                    <ErrorMessage name="Price">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>

                                    <div className="form-group">
                                        <label > Mô tả : </label>
                                        <Field
                                            className="form-control"
                                            component="textarea"
                                            name="dayWiseItinerary"
                                            rows="6"
                                            placeholder="Gõ </br> để xuống dòng"
                                            onChange={formikProps.handleChange} name="DetailedDescription" />
                                    </div>
                                    <ErrorMessage name="DetailedDescription">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link hình : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Image" />
                                    </div>
                                    <ErrorMessage name="Image">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <Step1
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                        file={this.state.useravtar}
                                        handleFileUpload={this.handleFileUpload}
                                    />
                                    <br></br>
                                    <div className="form-group">
                                        <label > Giá giảm : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Sale" />
                                    </div>
                                    <div className="form-group">
                                        <label > Ngày hết hạn giảm giá : </label>
                                        <Field className="form-control" type="date" onChange={formikProps.handleChange} name="ExpirationDateSale" />
                                    </div>
                                    <div className="form-group">
                                        <label > Số lượng bán giảm giá : </label>
                                        <Field className="form-control" type="text"  onChange={formikProps.handleChange} name="soLuongBan" />
                                    </div>
                                    <ErrorMessage name="ExpirationDateStatusSale">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Danh mục sản phẩm </label>
                                       
                                        <Field name="IdCategory" component="select" className="form-control" onChange={formikProps.handleChange} onClick={this.onChangeDanhMuc} id="">
                                            {elementDanhMuc}
                                        </Field>

                                    </div>
                                    <div className="form-group">
                                        <label > Danh mục con </label>
                                        <Field name="IdCategorySub" className="form-control" component="select" onChange={formikProps.handleChange} onClick={this.onChangeDanhMucCon} id="">

                                            {elementDanhMucCon}
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label > Giảm giá </label>
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="StatusSale">
                                            <option value={false}>False</option>
                                            <option value={true}>True</option>
                                        </Field>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label > Sản phẩm mới </label>
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="Warranty">
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage name="Model">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <button type="submit" className="btn btn-success">Thêm Sản Phẩm</button>
                                </Form>
                            </>
                        )
                    }}
                />
            </>
        );
    }
}
/////////////////Upload hình ảnh /////////////////////////////////
function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }

    return (
        <div className="upload">
            <label htmlFor="profile">
                <div className="imgbox">
                    {/* <img src="images/trans_116X116.png" alt="test" />
                    <img src={props.useravtar} className="absoImg" alt="test" /> */}
                </div>
            </label>
            <input id="file" name="file" type="file" accept="image/*" onChange={props.handleFileUpload} />
            <span className="guide_leb">Add your avatar</span>
        </div>
    )
}
const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham,
    danhMucCon: state.productReducers.saveDanhMucCon,
})
export default connect(mapStateToProps)(index);