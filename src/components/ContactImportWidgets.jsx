import React,{ Component } from 'react';
import { SocialIcon } from 'react-social-icons';

const ICON_STYLE = {
    margin: '5px 5px',
    width: '30px',
    height: '30px'
}



class ContactImportWidgets extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
        <div className="section-container">
          <div className="section-inner" style={{clear: 'both'}}>
            <span className="button-category-name"> Import Contacts </span>
            <div  className="button" style={{background: '#720e9e'}}> Yahoo </div>
            <div  className="button"> Google </div>
            <div  className="button" style={{background: '#0078d7'}}> Outlook </div>
          </div>
          <div className="section-inner">
            <span className="button-category-name"> Email Contacts </span>
            <input className="email-input" type="email" placeholder="Add emails"/>
            <a className="invite-button" href="!#"> Invite </a>
          </div>
        </div>)
    }
}

export default ContactImportWidgets;