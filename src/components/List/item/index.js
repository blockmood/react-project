import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';

class Item extends React.Component{
    render(){
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                <Link to={"/detail/" + data.mumber}>
                <div className="item-img-container float-left">
                    <LazyLoad height={0}>
                        <img src={data.img} alt={data.title}/>
                    </LazyLoad>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{data.title}</h3>
                        <span className="float-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="mumber float-right">已售{data.mumber}</span>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}
export default Item