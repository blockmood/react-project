import React from 'react';
import './style.less'

class ByAddStore extends React.Component {
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore ? 
                        <button onClick={this.onhose.bind(this)}>已收藏</button> 
                        :<button onClick={this.onhose.bind(this)}>收藏</button>
                    }

                </div>
                <div className="item-container float-right">
                    <button>购买</button>
                </div>
            </div>
        );
    }

    onhose(){
        this.props.onhose()
    }
}

export default ByAddStore;
