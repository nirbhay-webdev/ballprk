import React,{ Component } from 'react';

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <div id={ this.props.id } className="graph-box">
            <div className="graph-inner">

            </div>
        </div>)
    }
}

export default Graph