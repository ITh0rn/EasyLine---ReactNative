import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import LoginContainer from '../containers/LoginContainer';
import DrawerHeader from "../components/DrawerHeader";
import LoggedContainer from '../containers/LoggedContainer';

class DrawerView extends Component {
    render() {
        const { currentDrawerPage } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <DrawerHeader navigation={this.props.navigation} />
                { currentDrawerPage === 'DrawerLog' && <LoggedContainer /> }
                { currentDrawerPage === 'LoginScreen' && <LoginContainer /> }
            </View>
        );
    }
}

export default DrawerView;
