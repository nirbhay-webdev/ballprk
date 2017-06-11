import React,{Component} from 'react';

class TopPosts extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(<div className="section-container">
            <div className="section-inner" style={{ width: '100%' }}>
                  <div className="section-title">
                        Top Posts
                    </div>
                <div className="horizontalGrid">
                  { 
                      this.props.list.map(listItem=> <div className="horizontalGridElement" style={{width:"33.33%"}} ><Post content={ listItem } /></div>)
                  }
                </div>
            </div>
        </div>)
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="postCard" style={{ minHeight: '500px' }}>
            <div className="postHeader">
                <ProfileMask />
                <div className="userName">
                    XYZ <br/>
                    <span className="userDetails"> Bangalore </span>
                </div>
            </div>
            <div className="postCoverImage">
                
            </div>
            <div className="postContent">
                <div className="title">Hello</div>
                <div className="content">
                    Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem
                    Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem
                    Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem
                    Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem Loren Ipsum Dorem
                </div>
                <div className="hastags">
                    <span className="hashtagEach">#Eats</span>
                    <span className="hashtagEach">#WorldCup</span>
                </div>
            </div>
            <div className="postActions">
                
            </div>
            <div className="postComments">

            </div>
            <div className="postCommentEdit">
            </div>
        </div>
        )
    }
}

const ProfileMask = (props) => (
    <div className="profileIcon">
        { props.imgURL ? <img src={ props.imgURL }/> : null }   
    </div>
);


export default TopPosts;