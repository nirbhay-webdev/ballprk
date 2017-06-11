import React,{ Component }        from 'react';
import AppBar                     from 'material-ui/AppBar';
import AppContent                 from '../components/AppContent';
import SearchBar                  from '../components/SearchBar';
import AthleteRecommendationBox   from '../components/AthleteRecommendationBox';
import TopCategories              from '../components/TopCategories';
import TopPosts                   from '../components/TopPosts'
import POST_LIST_DATA             from '../data/RECOMMENDED_ATHELETES_DUMMY';
var FontAwesome = require('react-fontawesome');

const AppBar_Config = {
    showMenuIconButton: false,
    className: 'navBar fixedAtTop' 
}


class AppView extends Component {
    constructor(props) {
      super(props);
    }
 
    render() {
        return(
            <div id="App">
                <NavBar/>
                <AppContent className="appContent" style={ { left: '0px', width: '100%' } }>
                  <SearchBar />
                  <AthleteRecommendationBox list={ POST_LIST_DATA } />
                  <TopCategories list={[{},{},{},{},{},{}]} />
                  <TopPosts list={ [{},{},{},{},{},{}] } />
                </AppContent>
            </div>
        );
    }
}

const NavBar = (props)=> (
  <div className="navBar">
    <div className="logo"> BALLPRK</div>
    <div className="rightNav">
        <FontAwesome className="searchIcon" name="search"/>
        <span className="nav-links"> Sessions </span>
        <span className="nav-links"> Explore </span>
        <FontAwesome className="nav-icons" name="inbox" />
        <FontAwesome className="nav-icons" name="bell-o"/>
        <div className="avatar"></div>
    </div>
</div>)


export default AppView;