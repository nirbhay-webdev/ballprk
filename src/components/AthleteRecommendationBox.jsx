import React,{ Component } from 'react';


const HIDE_IMAGE_ELEMENT = { display: 'none' };

class AthleteRecommendationBox extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="section-container">
                <div className="section-inner topPosts" style={{ width: '100%'}}>
                    <div className="section-title">
                        Recommended Athletes
                    </div>
                    <div className="horizontalGrid">
                        {
                            this.props.list.map(listItem=> <div className="horizontalGridElement"><Post content={ listItem }/></div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Post = (props) => {
    return(
        <div className="postBox">
            <img className="backgroundImage" style={HIDE_IMAGE_ELEMENT}/>
            <span className="tileTitle"> { props.content.name } </span>
            <span className="tileContent">{ props.content.sport } | { props.content.position } <br/> { props.content.team } </span>
        </div>
    )
}



export default AthleteRecommendationBox;