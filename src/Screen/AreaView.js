import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import AreaList from '../components/AreaList';

class AreaView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <View style={{ paddingRight: 20 }}>
                <StatusBar
                    backgroundColor="#901100"
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
        };
    };
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <AreaList />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    testo: {
        color: 'blue',
        padding: 10
    }
};

export default AreaView;
