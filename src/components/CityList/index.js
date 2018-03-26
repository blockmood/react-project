import React from 'react'
import './style.less'
import City from '../../api/city/city'

class CityList extends React.Component{
    render(){
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {
                        City.map((item,index)=>(
                            <li key={index}>
                                <span onClick={this.clickHandle.bind(this,item.cityName)}>{item.cityName}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    clickHandle(cityName){
        this.props.changeFn(cityName)
    }
}

export default CityList