import React from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header/index'
import { update } from '../../actions/action'
import Logina from '../../components/Login/'

class Login extends React.Component {
    constructor(){
        super(...arguments)
        this.state = {
            checking:true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    this.state.checking 
                    ? <div></div> 
                    : 
                    <Logina loginHandle={this.loginHandle.bind(this)} />
                }
            </div>
        );
    }
    
    componentDidMount() {
        this.doCheck()
        console.log(this.props)
    }

    loginHandle(username) {
        //登录之后的逻辑
        const userinfo = this.props.userinfo
        userinfo.username = username
        this.props.userinfoActions(userinfo)
        //跳转链接
        const router = this.props.match.params.router
        if(router){
            //跳转到指定的页面
            this.props.history.push(decodeURIComponent(router))
        }else{
            //跳转到默认页面
            this.goUserPage()
        }
    }

    doCheck() {
        const userinfo = this.props.userinfo
        if(userinfo.username){
            //已经登录
            this.goUserPage()
        }else{
            //未登录
            this.setState({
                checking:false
            })
        }
    }
    
    goUserPage() {
        this.props.history.push('/user')
    }
}

const mapStateToProps = (state) => {
    return {    
        userinfo:state.userinfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userinfoActions: (val) => {
            dispatch(update(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
