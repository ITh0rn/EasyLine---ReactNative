import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Fonts, Colors } from '../constants';

class LoginScreen extends Component {
    loggingOut() {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { drawerStyle, textStyle, imgStyle, topDrawerHeader, buttonStyle } = style;
        const { user } = this.props;
        const url = 'https://pbs.twimg.com/profile_images/844881776/logo-univaq_400x400.png';
        return (
            <View style={drawerStyle}>
                <View style={topDrawerHeader}>
                    <Image
                        style={imgStyle}
                        source={{ uri: url }}
                    />
                    <Text style={textStyle}>{user}</Text>
                </View>
                <View style={{ backgroundColor: Colors.white, height: '75%', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.loggingOut()} style={{ width: '70%', position: 'absolute', bottom: 10 }}>
                    <View style={buttonStyle}>
                      <Text style={{ color: 'white', fontFamily: Fonts.TextReg, fontSize: 15 }}>LOGOUT</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = {
    drawerStyle: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    textStyle: {
        color: Colors.white,
        paddingBottom: 20,
        width: 200,
        marginTop: 20,
        fontFamily: Fonts.TextReg,
        fontSize: 20,
        textAlign: 'center'
    },
    imgStyle: {
        width: 100,
        height: 100
    },
    topDrawerHeader: {
        maxHeight: '25%',
        backgroundColor: Colors.red,
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: Colors.black
    },
    buttonStyle: {
        height: 35,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#cc0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: '#b30000'
    }
};

export default LoginScreen;
