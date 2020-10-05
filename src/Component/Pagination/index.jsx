import React, { Component } from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }
    onChange(e) {

    }
    onClickPagination(newPage) {
        this.props.pageOnChange(newPage)
        this.setState({
            active: "active"
        })
    }
    componentDidUpdate() {
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
    render() {
        let { page, limit } = this.props
        let array = [];
        for (let i = 1; i <= this.props.total; i++) {
            array.push(i)
        }
        return (
            <div className="pagination">
                <button disabled={page <= 1} className="prev" onClick={() => this.onClickPagination(page - 1)}><LeftOutlined /></button >
                {array.map((item, index) => {
                    return (
                        <button onChange={this.onChange} className={page === item ? `page active` : `page`} onClick={() => this.onClickPagination(item)}>{item}</button>
                    )
                })}
                <button disabled={page >= array.length} className="next" onClick={() => this.onClickPagination(page + 1)}><RightOutlined /></button>
            </div>
        );
    }
    componentDidMount() {

    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(index);