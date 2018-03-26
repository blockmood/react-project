import React from 'react'
import SearchHeader from '../../components/SearchHeader/index'
import List from './subpage/index'
class Search extends React.Component{
    render(){
        return (
            <div>
                <SearchHeader props={this.props} keyword={this.props.match.params.keyword}/>
                <List />
            </div>
        )
    }
}

export default Search