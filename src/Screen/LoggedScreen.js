import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Fonts } from '../constants';
import { Button } from "react-native-elements";

class LoginScreen extends Component {
    loggingOut() {
        const { logout } = this.props;
        logout();
    }

    render() {
        const { drawerStyle, textStyle, imgStyle } = style;
        const { user } = this.props;
        const url = 'https://pbs.twimg.com/profile_images/844881776/logo-univaq_400x400.png';
        return (
            <View style={drawerStyle}>
                <View style={{ paddingTop: 40 }}>
                    <Image
                        style={imgStyle}
                        source={{ uri: url }}
                    />
                </View>
                <Text style={textStyle}>{user}</Text>
                <Button
                    title='Log-Out'
                    buttonStyle={{ marginTop: 5, backgroundColor: '#C2083C' }}
                    containerStyle={{ width: '100%', paddingHorizontal: 10 }}
                    titleStyle={{ fontFamily: Fonts.TextReg }}
                    onPress={() => this.loggingOut()}
                />
            </View>
        );
    }
}

const style = {
    drawerStyle: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#901100',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    textStyle: {
        color: '#e9e9e9',
        paddingBottom: 20,
        width: 200,
        marginTop: 20,
        fontFamily: Fonts.TextReg,
        fontSize: 20
    },
    imgStyle: {
        width: 100,
        height: 100
    },
    inputStyle: {
        color: '#FFF',
        marginLeft: 10,
        fontFamily: Fonts.TextReg
    },
    containerStyle: {
        marginVertical: 10,
    }
};

export default LoginScreen;
