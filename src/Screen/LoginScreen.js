import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { Fonts, Colors } from '../constants';

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
                <TextInput
                  value={email}
                  style={{ height: 50, width: '100%', marginTop: 10, backgroundColor: '#CD3335', color: Colors.white, fontFamily: Fonts.TextReg }}
                  placeholderTextColor='white'
                  placeholder={'Username'}
                  inputStyle={{ Color: 'white', fontFamily: Fonts.TextReg }}
                  onChangeText={(value) => this.changeValueText('email', value)}
                  leftIcon={{ type: 'font-awesome', name: 'user', color: '#FFF' }}
                />
                <TextInput
                  value={password}
                  style={{ height: 50, width: '100%', marginTop: 5, backgroundColor: '#CD3335', color: Colors.white, fontFamily: Fonts.TextReg }}
                  placeholderTextColor='white'
                  placeholder={'Password'}
                  inputStyle={{ Color: 'white', fontFamily: Fonts.TextReg }}
                  onChangeText={(value) => this.changeValueText('password', value)}
                  secureTextEntry
                />
                <TouchableOpacity onPress={() => this.login()} style={{ width: '100%' }}>
                  <View style={buttonStyle}>
                    <Text style={{ color: 'white', fontFamily: Fonts.TextReg, fontSize: 15 }}>ACCEDI</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ color: '#FFF', width: 220, fontFamily: Fonts.TextReg, textAlign: 'center' }}>{error}</Text>
                {isLoading && <ActivityIndicator color='white' />}
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
        height: 50,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#C90101',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default LoginScreen;
