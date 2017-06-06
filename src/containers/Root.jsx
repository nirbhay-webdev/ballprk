import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppView from '../views/AppView'

class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       
        return(
            <MuiThemeProvider>
            <AppView/>
            </MuiThemeProvider>
        );
    }
}

export default Root;