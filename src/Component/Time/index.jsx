// import React, { useState, useEffect } from 'react';

// const IntervalExample = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {

//     }, []);

//     return  (
//         <>
//             <p> {seconds} </p>
//         </>
//     );
// };
import React, { Component } from 'react';
import { ProductsService } from '../../Services';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: new Date(this.props.time),
            sale: "0 ngày 0 phút 0 giây",
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.state.sale = ""
            let dateNow = new Date()
            let countTime = new Date(this.state.count)
            let dateSale = countTime - dateNow - 
            ///// 7 giờ
            (1*1000*60*60*7)
            // ngày theo giờ VN
            
          //   Math.floor(dateTime / 1000 / 60 / 60 - dateTime / 1000 / 60 / 60 / 24 * 24) - 
            // Math.floor(dateTime / 1000 / 60 / 60 - dateTime / 1000 / 60 / 60 / 24 * 24-7)

            // setSeconds(seconds => seconds + 1);
            let ngay = Math.floor(dateSale / 1000 / 60 / 60 / 24) 
            let gio = Math.floor(dateSale / 1000 / 60 / 60 - ngay * 24) 
            let phut = Math.floor(dateSale / 1000 / 60 - ngay * 24 * 60 - gio * 60 )
            let giay = Math.floor(dateSale / 1000 - ngay * 24 * 60 * 60 - gio * 60 * 60  - phut * 60)
            ///// KHI HẾT NGÀY GIẢM GIÁ SẼ TỰ CẬP NHẬT TRẠNG THÁI
            if(ngay<0){
                ///// CẬP NHẬT TRẠNG THÁI GIẢM GIÁ
                this.props.item.StatusSale = false
                ProductsService.capNhatSanPham(this.props.item._id,this.props.item).then(res=>{
                        console.log("ok");
                }).catch(err=>{
                    console.log(err,"kon");
                })
                ///// ĐẨY LÊN API
                // axios({
                //     url: `https://5f474cbc95646700168d9187.mockapi.io/danhSachSanPham/${this.props.id}`,
                //     method: "PUT",
                //     data : this.props.item
                // }).then(res=>{
                // }).catch(err=>{
                // })
            }
            this.setState({
                sale: ngay.toString() + " Ngày " + gio.toString() + ":" + phut.toString() + ":" + giay.toString()
            })
        }, 1000);
        // return () => clearInterval(interval);
    }
    render() {
        return (
            <>
               <p className="time" style={{width: 100, marginLeft: 10}}>{this.state.sale}</p>

            </>
        );
    }
}

export default index;

// export default IntervalExample;