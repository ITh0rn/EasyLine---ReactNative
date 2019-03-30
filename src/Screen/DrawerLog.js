import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Fonts } from "../constants";


class DrawerLog extends Component {
    render() {
        const { textStyle, imgStyle, drawerStyle } = style;
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
                <Text style={textStyle}>{user.toUpperCase()}</Text>
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
        color: '#FFF',
        paddingBottom: 20,
        width: 200,
        marginTop: 20,
        fontFamily: Fonts.TextReg,
        fontSize: 15
    },
    imgStyle: {
        width: 100,
        height: 100
    }
};

export default DrawerLog;
