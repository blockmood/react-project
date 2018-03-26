import React from 'react';
import Header from '../../components/Header/index'
import Buy from './subpage/buy'
class Detail extends React.Component {
    render() {
        return (
            <div>
                <Header title="商品详情"/>
                商品id:{this.props.match.params.id}
                <Buy router={this.props}/>
            </div>
        );
    }
}

export default Detail;
