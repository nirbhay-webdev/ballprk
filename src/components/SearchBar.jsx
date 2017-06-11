import React,{ Component } from 'react';
var FontAwesome = require('react-fontawesome');

const SearchBarID = 'search-bar';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterQuery = this.handleFilterQuery.bind(this);
    }
    handleFilterQuery(event) {
        const filterQuery = event.nativeEvent.target.value;
        console.log(filterQuery);
    }
    render() {
        return(
            <div className="section-container">
                <div className="section-inner">
                    <input id={ SearchBarID } className="searchBar" type="text" onChange={ (event)=> this.handleFilterQuery(event) } placeholder="search"/>
                    <label htmlFor={ SearchBarID } > <FontAwesome name="filter"/> </label>
                </div>
            </div>
        )
    }
}

export default SearchBar;