import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AreaList from '../components/AreaList';
import CourseList from "../components/CourseList";
import {Icon} from "react-native-elements";

class CourseView extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
            headerRight: (
                <View style={{ paddingRight: 20 }}>
                    <Icon
                        name='bars'
                        type='font-awesome'
                        color='#FFF'
                        size={20}
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
            )
        };
    };
    render() {
        const { containerStyle } = styles;
        const { navigation } = this.props;
        const id = navigation.getParam('providid');
        return (
            <View style={containerStyle}>
                <CourseList id={id} />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    textStyle: {
        color: 'blue',
        padding: 10
    },
    headerTextStyle: {
        backgroundColor: '#adadad',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default CourseView;
