import React from 'react'
import api from '../../../api/home/ad'
import  HomeAd from '../../../components/HomeAd/index'

class Ad extends React.Component{

    constructor(){
        super(...arguments)

        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        if(api.length){
            this.setState({
                data:api
            })
        }
    }
    
    render(){
        return (
            <div>
                <HomeAd data={this.state.data}/>
            </div>
        )
    }
}

export default Ad;