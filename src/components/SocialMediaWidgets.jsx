import React,{ Component } from 'react';
import { SocialIcon } from 'react-social-icons';

const ICON_STYLE = {
    margin: '5px 5px',
    width: '30px',
    height: '30px'
}



class SocialMediaWidgets extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
        <div className="section-container" >
          <div className="section-inner" style={{ minWidth: 'auto' }}>
            <span className="share-button"> Share </span>
            <SocialIcon url="http://facebook.com/ballprk" style={ ICON_STYLE } />
            <SocialIcon url="http://twitter.com/" style={ ICON_STYLE } />
            <SocialIcon url="http://linkedin.com/" style={ ICON_STYLE } />
            <SocialIcon network="email" style={ ICON_STYLE }/>
          </div>
        </div>)
    }
}

export default SocialMediaWidgets;