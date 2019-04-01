import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
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
                {isLoading && <ActivityIndicator color='white' />}
                <TouchableOpacity onPress={() => this.login()} style={{ width: '80%' }}>
                  <View style={buttonStyle}>
                    <Text style={{ color: 'white', fontFamily: Fonts.TextReg, fontSize: 15 }}>ACCEDI</Text>
                  </View>
                </TouchableOpacity>
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
        fontFamily: Fonts.TextReg,
        textAlign: 'center'
    },
    imgStyle: {
        width: 100,
        height: 100
    },
    inputStyle: {
        color: 'white',
        marginLeft: 10,
        fontFamily: Fonts.TextReg,
        fontSize: 16
    },
    containerStyle: {
        marginVertical: 10,
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
