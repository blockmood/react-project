import React from 'react';
import ReactIScroll  from 'react-iscroll'
import iScroll from 'iscroll'

class Scroll extends React.Component {
    render() {
        let options = {
            click:true
        }
        return  (
            <ReactIScroll iScroll={iScroll} options={options} onScrollEnd={this.onScrollEnd()}>
                {this.props.children()}
            </ReactIScroll>
        )
    }
    
    onScrollEnd(e){
        console.log(e)
    }

    componentDidMount() {
        this.Topiscroll()
    }

    Topiscroll() {
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    
}


export default Scroll;
