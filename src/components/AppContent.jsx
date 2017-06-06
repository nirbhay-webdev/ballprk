import React,{ Component } from 'react';

class AppContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="appContent">
                { this.props.children }
            </div>
        )
    }
}

export default AppContent
