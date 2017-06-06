import React,{ Component } from 'react';
var FontAwesome = require('react-fontawesome');

class LinkSharing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editLink : false,
        edited: false,
        copied: false,
        link: props.url
      };
      this.link = "http://ballprk.com/invite/affilitate-god.12"; 
      this.copyToClipboard = this.copyToClipboard.bind(this);
      this.editLink = this.editLink.bind(this);
      this.handleLinkEdit = this.handleLinkEdit.bind(this);
    }

    copyToClipboard() {
      var element = document.getElementById('linkTextarea');
      element.select();
      document.execCommand('copy');
      setTimeout(function(){ this.setState({copied: false}) }.bind(this),3000);
      this.setState({ copied: true });
    }
     editLink() {
       this.setState({ editLink : true });
     }

     handleLinkEdit(event) {
       console.log(event.type)
      if(event.key === "Enter") { 
        let link = this.state.link.split('invite/')[0] +'invite/' + event.target.value;
        setTimeout(function(){ this.setState({edited: false}) }.bind(this),3000);
        this.setState({editLink: false, link: link, edited: true });
      } else if(event.type == "blur") {
        let link = this.state.link.split('invite/')[0] +'invite/' + event.target.value;
        setTimeout(function(){ this.setState({edited: false}) }.bind(this),3000);
        this.setState({editLink: false, link: link, edited: true });
      }
     }


    render() {
       if(this.state.editLink == true) {
         let halflink = this.state.link.split('invite/');
        return(
        <div id={ this.props.id } className="hyperlinkSection">
          <div className="hyperlinkInnerSection">
            <span id="linkDisplayer" className="link" style={{ background: 'rgba(0,0,0,0.1)', padding: '0px 10px', boxSizing: 'content-box', float: 'left', marginRight: '0px' }}> { halflink[0] + 'invite/' }</span>
            <input type="text" autoFocus={ true } className="link-input" defaultValue={ halflink[1] } onBlur={ this.handleLinkEdit } onKeyPress={ this.handleLinkEdit }/>
          </div>
        </div>
        )
       } else {
        return(
        <div id={ this.props.id } className="hyperlinkSection">
          <div className="hyperlinkInnerSection">
            <span id="linkDisplayer" className="link"> { this.state.link }</span>
            <a href="!#" onClick={ ()=> this.copyToClipboard() }><FontAwesome className="copy-icon" name="files-o" size="1x"/></a>
            <a href="!#" onClick={ ()=> this.editLink() }><FontAwesome className="copy-icon" name="pencil" size="1x"/></a>
            <textarea id="linkTextarea" style={{position: 'fixed',left: '-9999px',top: '-9999px'}} defaultValue={ this.state.link }></textarea>   
          </div>
          <div className="action-token" style={ this.state.copied ? DISPLAY_COPIED : null } >Copied</div>
          <div className="action-token" style={ this.state.edited ? DISPLAY_EDITED : null } >Edited</div>
        </div>
        
        )
       }
        
    }
}
const DISPLAY_COPIED = { opacity : 1, top: '  65px' };
const DISPLAY_EDITED = { opacity : 1, top: '  65px' };

export default LinkSharing;