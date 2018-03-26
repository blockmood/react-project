import React from 'react';
import ByAddStore from '../../../components/ByAddStore/index'
import {connect} from 'react-redux'
import {add,remove} from  '../../../actions/store'

class Buy extends React.Component {

    constructor(){
        super(...arguments)
        this.state = {
            isStore:false
        }
    }

    render() {
        return (
            <div>
                <ByAddStore isStore={this.state.isStore} onhose={this.onhose.bind(this)}/>
            </div>
        );
    }
    
    componentDidMount() {
        this.checkStoreState()   
    }
    
    //检测是否被收藏
    checkStoreState() { 
        const store = this.props.store
        const id = this.props.router.match.params.id
    
        store.forEach( item => {
            if(item === id){
                //已经被收藏
                this.setState({
                    isStore:true
                })
            }
            return false
        })
    }   

    //收藏
    onhose(){
        if(!this.checklogin()){
            return 
        }

        const id = this.props.router.match.params.id
        if(this.state.isStore) {
            this.props.removeActions(id)
        }else{
            this.props.addActions(id)
        }

        this.setState({
            isStore:!this.state.isStore
        })
    }

    //检查登录状态
    checklogin(){
        const id = this.props.router.match.params.id
        const username = this.props.username
        if(!username){
            this.props.router.history.push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
    
}

const mapStateToProps = (state) => {
    return {
        username:state.userinfo.username,
        store:state.store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeActions: (id) => {
            dispatch(remove(id))
        },
        addActions:(item)=>{
            dispatch(add(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)
