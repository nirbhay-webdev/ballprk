import React,{ Component } from 'react';

class Shoutout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div className="shoutout"> 
           <div className="shoutout-inner-container">
            <span className="shoutout-title">Something something, { this.props.user.name }</span> <br/>
            <span className="shoutout-tagline">
            Better make sure you use the shit out of this because it will be a lot of API work, { this.props.user.name }
            </span>
           </div>
        </div>)
    }   
}

export default Shoutout;