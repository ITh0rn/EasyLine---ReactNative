import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import firebase from 'firebase';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AreaView from './screen/AreaView';
import CourseView from './screen/CourseView';
import ServicesView from './screen/ServicesView';
import TicketView from './screen/TicketView';
import { Fonts, Colors } from './constants';
import DrawerContainer from './containers/DrawerContainer';
import { store, persistor } from './Store';

export default class App extends Component {
    render() {
        const config = {
            apiKey: 'AIzaSyCcPoPrz919FJWLSr4pxdqjOjUCFbtS6b8',
            authDomain: 'apilogin-210dd.firebaseapp.com',
            databaseURL: 'https://apilogin-210dd.firebaseio.com',
            projectId: 'apilogin-210dd',
            storageBucket: 'apilogin-210dd.appspot.com',
            messagingSenderId: '257235335241'
        };
        firebase.initializeApp(config);

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppStackNavigator />
                </PersistGate>
            </Provider>
        );
    }
}


const StackNavigatorConfig = {
    headerLayoutPreset: 'center'
};

const DrawerNavigatorConfig = {
    drawerWidth: 300,
    drawerPosition: 'right',
    contentComponent: DrawerContainer,
};

const RootStack = createStackNavigator({
    ListaAree: {
        screen: AreaView,
        navigationOptions: () => ({
            title: 'UNIVERSITA\' DELL\'AQUILA',
            headerStyle: HeaderStyle,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: Fonts.TextReg,
                fontWeight: '200',
                color: Colors.white,
                fontSize: 20,
                paddingTop: 30
            }
        })
    },
    ListaCorsi: {
        screen: CourseView,
        navigationOptions: () => ({
            headerStyle: HeaderStyle,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: Fonts.TextReg,
                fontWeight: '200',
                color: Colors.white,
                fontSize: 15,
                paddingTop: 20
            }
        })
    },
    Services: {
        screen: ServicesView,
        navigationOptions: () => ({
            headerStyle: HeaderStyle,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: Fonts.TextReg,
                fontWeight: '200',
                color: Colors.white,
                fontSize: 15,
                paddingTop: 20
            }
        })
    },
    Ticket: {
        screen: TicketView,
    }
}, StackNavigatorConfig);

const Drawer = createDrawerNavigator({
    Servizi: {
        screen: RootStack
    }
}, DrawerNavigatorConfig);

const HeaderStyle = {
    backgroundColor: Colors.red,
    height: 70,
    headerLayoutPreset: 'center'
};


const AppStackNavigator = createAppContainer(Drawer);
