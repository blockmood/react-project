import React from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header/index'
import CurrentCity from '../../components/CurrentCity/index'
import CityList from '../../components/CityList/index'
import { update } from '../../actions/action'
import {CITYNAME} from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component{
    render(){
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeFn.bind(this)}/>
            </div>
        )
    }
    
    changeFn(cityName){
        const userinfo = this.props.userinfo
        userinfo.cityName = cityName
        this.props.update(userinfo)
        //修改本地存储
        localStore.setItem(CITYNAME,cityName)
        this.props.history.push('/')
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo:state.userinfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (val) => {
            dispatch(update(val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)