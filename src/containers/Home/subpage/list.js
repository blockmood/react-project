import React from 'react'
import ListData from '../../../api/home/list'
import './style.less'
import ListC from '../../../components/List/index'

class List extends React.Component{
    constructor(){
        super(...arguments)
        this.state = {
            data:[],
            hasMore:false
        } 
    }

    componentDidMount(){
        this.getFirstPage()
    }
    //获取首屏数据
    getFirstPage(){
        const hasMore = ListData.hasMore
        const data = ListData.data

        this.setState({
            hasMore:hasMore,
            data:data
        })
    }
    
    render(){
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
               {
                   this.state.data.length ? <ListC data={this.state.data} /> : <div>加载中...</div>
               }
            </div>
        )
    }
}

export default List