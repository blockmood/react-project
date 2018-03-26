import React from 'react'
import HomeHeader from '../../components/HomeHeader/'
import Category from '../../components/Category/index'
import {connect} from 'react-redux'
import Ad from './subpage/ad'
import List from './subpage/list'
import './style.less'
import Scroll from '../../components/Scroll/index'
class Home extends React.Component{
    render(){
        return (
            <div className="wrapper" ref={(node)=>this.wrapper = node}>
                <Scroll>    
                    {
                        ()=>{
                            return (
                                <div className="iscroll">
                                    <HomeHeader props={this.props}  cityName={this.props.userinfo.cityName}/>
                                    <Category />
                                    <div style={{height:'15px'}}></div>
                                    <Ad />
                                    <List cityName={this.props.userinfo.cityName}/>
                                </div>
                            )
                        }
                    }
                </Scroll>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo:state.userinfo
    }
}

export default connect(mapStateToProps, null)(Home)

