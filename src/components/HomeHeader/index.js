import React from 'react'
import './style.less'
import SearchInput from '../SearchInput/index'

class HomeHeader extends React.Component{
    constructor(){
        super(...arguments)
        this.state = {
            kwd:''
        }
    }
    render(){
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left" onClick={this.selectCity.bind(this)}>
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right" onClick={this.user.bind(this)}>
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    enterHandle(value){
        this.props.props.history.push('/search/all/' + encodeURIComponent(value))
    }

    selectCity(){
        this.props.props.history.push('/city')
    }

    user(){
        this.props.props.history.push('/login')
    }
}

export default HomeHeader