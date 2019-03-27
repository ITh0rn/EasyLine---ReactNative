import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Fonts } from '../constants';

class LoginScreen extends Component {
    changeValueText(key, value) {
        const { changeInput } = this.props;
        changeInput(key, value);
    }

    login() {
        const { loginPress } = this.props;
        loginPress();
    }

    render() {
        const { drawerStyle, textStyle, imgStyle, inputStyle, containerStyle, buttonStyle } = style;
        const { email, password, error, isLoading } = this.props;
        const url = 'https://pbs.twimg.com/profile_images/844881776/logo-univaq_400x400.png';
        return (
            <View style={drawerStyle}>
                <View style={{ paddingTop: 40 }}>
                    <Image
                        style={imgStyle}
                        source={{ uri: url }}
                    />
                </View>
                <Text style={textStyle}>Accedi con le credenziali della segreteria virtuale di Univaq</Text>
                <Input
                    value={email}
                    placeholder={'Username'}
                    inputType={Text}
                    autoCorrect={false}
                    style={{ marginBottom: 30, alignItems: 'center' }}
                    inputContainerStyle={containerStyle}
                    inputStyle={inputStyle}
                    leftIcon={{ type: 'font-awesome', name: 'user', color: '#FFF' }}
                    keyboardAppearance='light'
                    autoFocus={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholderTextColor='#FFF'
                    onChangeText={(value) => this.changeValueText('email', value)}
                />
                <Input
                    value={password}
                    placeholder={'Password'}
                    inputType={Text}
                    autoCorrect={false}
                    secureTextEntry
                    inputContainerStyle={containerStyle}
                    style={{ marginBottom: 30, height: 30 }}
                    inputStyle={inputStyle}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#FFF' }}
                    placeholderTextColor='#FFF'
                    onChangeText={(value) => this.changeValueText('password', value)}
                />
                <Text style={{ color: '#FFF', width: 220, fontFamily: Fonts.TextReg }}>{error}</Text>
                <Button
                    title='Accedi'
                    buttonStyle={buttonStyle}
                    loading={isLoading}
                    titleStyle={{ fontFamily: Fonts.TextReg }}
                    onPress={() => this.login()}
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
        color: '#a8a8a8',
        paddingBottom: 20,
        width: 200,
        marginTop: 20,
        fontFamily: Fonts.TextReg
    },
    imgStyle: {
        width: 100,
        height: 100
    },
    inputStyle: {
        color: '#FFF',
        marginLeft: 10,
        fontFamily: Fonts.TextReg,
        fontSize: 16
    },
    containerStyle: {
        marginVertical: 10,
        height: 35
      
    },
    buttonStyle: {
        backgroundColor: '#C2083C',
        height: 40,
        width: 265
    }
};

export default LoginScreen;
