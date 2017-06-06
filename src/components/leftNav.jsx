import React,{ Component } from 'react';

class LeftNav extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return(
        <div className="leftNav">
            <ul style={{ listType: 'none'} }>
                <li style={{ listStyleType: 'none'} }> <a href="#link">Your Link</a></li>
                <li style={{ listStyleType: 'none'} }> <a href="#funds">Available Funds</a> </li>
                <li style={{ listStyleType: 'none'} }> <a href="#stats">Stats </a></li>
                <li style={{ listStyleType: 'none'} }> <a href="#kit">Media Kit </a></li>
            </ul>
        </div>
        )
    }
}

export default LeftNav;