import React,{ Component } from 'react';
import LeftNav             from '../components/leftNav';
import AppContent          from '../components/AppContent';
import ShoutOut            from '../components/Shoutout'
import LinkSharing         from '../components/LinkSharing';
import SocialMediaWidgets  from '../components/SocialMediaWidgets'
import ContactImportWidgets from '../components/ContactImportWidgets'
import FundsDisplay        from '../components/FundsDisplay';
import Graph                from '../components/Graph';
import MediaKit             from '../components/MediaKit'
var FontAwesome = require('react-fontawesome');

const LinkSharing = (props)=> {

return(
<div style={{ width: '100%', height: '100vh', position: 'relative', float: 'left' }}>
                    <LeftNav className="leftNav" />
                    <AppContent className="appContent">
                        <ShoutOut user={{name: 'Herbert'}} />
                        <LinkSharing id="link" url={ "http://ballprk.com/invite/affilitate-god.12" }/>
                        <SocialMediaWidgets />
                        <hr style={{ width: '300px', margin: '10px 0px 20px 0px', float: 'left', transform: 'translate(-50%)', left: '50%', position: 'relative' }}/>
                        <ContactImportWidgets />
                        <FundsDisplay id="funds"/>
                        <Graph id="stats"/>
                        <MediaKit />
                    </AppContent>
</div>)

}

export default LinkSharing;