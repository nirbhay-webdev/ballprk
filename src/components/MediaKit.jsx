import React,{ Component } from 'react'

class MediaKit extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return(
            <div className="section-container">
                <div className="section-inner">
                    <div className="banner-display">
                        <img src="./assets/images/moutain-banner.jpeg"/>
                        <textarea>
                            { "<a href='!#' target='_blank' >\n<img src='http://cdn.ballprk.com/images/banner-image.jpg' width='720' height='150' />\n</a>" }
                        </textarea>
                    </div>
                    <div className="banner-display">
                        <img src="./assets/images/moutain-banner.jpeg"/>
                        <textarea> 
                            { "<a href='!#' target='_blank' >\n<img src='http://cdn.ballprk.com/images/banner-image.jpg' width='500' height='100' />\n</a>" } 
                        </textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaKit;