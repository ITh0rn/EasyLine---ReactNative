import React, { Component } from 'react';
import { View } from 'react-native';
import LoginContainer from '../containers/LoginContainer';
import DrawerHeader from '../components/DrawerHeader';
import LoggedContainer from '../containers/LoggedContainer';

class DrawerView extends Component {
    render() {
        const { currentDrawerPage } = this.props;
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <DrawerHeader navigation={this.props.navigation} />
                { currentDrawerPage === 'DrawerLog' && <LoggedContainer /> }
                { currentDrawerPage === 'LoginScreen' && <LoginContainer /> }
            </View>
        );
    }
}

export default DrawerView;
