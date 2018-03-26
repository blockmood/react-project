import React from 'react'
import RouterMap from '../router/routerMap'
import {CITYNAME} from '../config/localStoreKey'
import localStore from '../util/localStore'
import {connect} from 'react-redux'
import {update} from '../actions/action'

class App extends React.Component{
    constructor(){
        super(...arguments)
        this.state ={
            flag:true
        }
    }

    componentDidMount() {
        this.getData()
        let cityName = localStore.getItem(CITYNAME)
        if(cityName == null){
            cityName = '北京'
        }

        //存入redux
        this.props.update({
            cityName:cityName
        })
    }

    getData() {
        
    }
    
    

    render(){
        return (
            <div>
                {
                    this.state.flag 
                    ?   
                        <RouterMap /> 
                    : '加载中'
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    update:(val)=>{
        dispatch(update(val))
    }
})

export default connect(null, mapDispatchToProps)(App)