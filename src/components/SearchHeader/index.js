import React from 'react'
import './style.less'
import SearchInput from '../SearchInput/index'

class SearchHeader extends React.Component {
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.backHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        );
    }

    enterHandle(val){
        this.props.props.history.push('/search/all' + encodeURIComponent(val))
    }

    backHandle(){
        window.history.back()
    }
}


export default SearchHeader;
