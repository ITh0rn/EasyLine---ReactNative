import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class HomeScreen extends Component {
    render() {
        const { container, testo } = styles;
        return (
            <View style={container}>
                <StatusBar
                    backgroundColor="#901100"
                    barStyle="light-content"
                />
                <Text style={testo}>
                    ciao
                </Text>
                <Button
                    title="Go To The Main Page"
                    onPress={() => this.props.navigation.navigate('ListaAree')}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#901100',
    },
    testo: {
        color: 'blue',
        padding: 10
    }
};

export default HomeScreen;
