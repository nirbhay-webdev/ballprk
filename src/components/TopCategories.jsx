import React,{ Component }  from 'react';

class TopCategories extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="section-container">
                <div className="section-inner topCategories" style={{ width: '100%'}}>
                    <div className="section-title">
                        Top Categories
                    </div>
                    <div className="horizontalGrid">
                        {
                            this.props.list.map(listItem=> <div className="horizontalGridElement" style={{ width: '16.6%' }}><Category content={ listItem }/></div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const Category = (props)=> {
    return( 
        <div className="categoryBox">
        </div>
    )
}

export default TopCategories;