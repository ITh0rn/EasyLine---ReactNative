import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Fonts, Colors } from '../constants';

class TicketView extends Component {
    static navigationOptions = ({ navigation }) => ({
            title: 'SEGRETERIA',
            headerStyle: {
              height: 95,
              headerLayoutPreset: 'center',
              backgroundColor: navigation.getParam('colore')
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: Fonts.TextReg,
                fontWeight: '200',
                color: Colors.white,
                fontSize: 15,
                paddingTop: 60
            },
            headerRight: (
                <View style={{ paddingRight: 20 }}>
                    <StatusBar
                        backgroundColor={navigation.getParam('colore')}
                        barStyle="light-content"
                    />
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        name='bars'
                        type='font-awesome'
                        color='#FFF'
                        size={20}
                    />
                    </TouchableOpacity>
                </View>
            )
        });
    render() {
        const {
            container,
            ticketArea,
            text,
            buttonStyle,
            buttonStylebtn,
            buttonBottomStyle,
            buttonBottomStylebtn,
            ticketTrinagle,
            ticketSquare,
            ticketHeader,
            squareText
          } = styles;
        return (
            <View style={container}>
                <View style={ticketArea}>
                    <Text style={{ color: '#ff9900', fontFamily: Fonts.TextBold, fontSize: 15, maxWidth: '80%', marginTop: 15, textAlign: 'center' }}>
                      Servizio non disponibile. Non è possibile prenotare ticket prechè l'ufficio è chiuso
                    </Text>
                    <View style={ticketHeader} />
                    <View style={ticketSquare}>
                      <Text style={squareText}>SEGRETERIA STUDENTI ECONOMIA</Text>
                    </View>
                    <View style={ticketTrinagle} />
                </View>
                <TouchableOpacity style={buttonStyle}>
                  <View style={buttonStylebtn}>
                    <Text style={{ color: 'black', fontFamily: Fonts.TextBold }}>DETTAGLI UFFICIO</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={buttonBottomStyle}>
                  <View style={buttonBottomStylebtn}>
                      <Icon
                      name='ticket'
                      type='font-awesome'
                      color='white'
                      size={25}
                      />
                    <Text style={text}>PRENOTA</Text>
                  </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    text: {
        color: 'white',
        padding: 10,
        fontFamily: Fonts.TextBold,
        fontSize: 15
    },
    ticketArea: {
        backgroundColor: '#ededed',
        maxHeight: '50%',
        marginHorizontal: 30,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonStyle: {
        marginHorizontal: 30,
        marginTop: 10,
    },
    buttonStylebtn: {
        backgroundColor: '#ededed',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBottomStyle: {
        position: 'absolute',
        bottom: -1,
        width: '100%',
    },
    buttonBottomStylebtn: {
        backgroundColor: '#3b7600',
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    ticketTrinagle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 120,
        borderRightWidth: 120,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform: [
          { rotate: '180deg' }
        ]
    },
    ticketSquare: {
        maxHeight: 220,
        width: 240,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0,
    },
    ticketHeader: {
        height: 20,
        width: 240,
        backgroundColor: '#3b7600',
        marginTop: 20
    },
    squareText: {
        color: '#3b7600',
        fontSize: 18,
        fontFamily: Fonts.TextBold,
        marginTop: 15,
        textAlign: 'center'
    }
};

export default TicketView;
