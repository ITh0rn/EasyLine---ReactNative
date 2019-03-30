import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Fonts } from '../constants';

class AreaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }

    onPress() {
        this.setState({ selected: 1 });
    }

    onPressOut() {
        this.setState({ selected: 0 });
    }

    render() {
        const { item } = this.props;
        const { name, icon, color } = item;
        const {
            textStyle,
            containerStyle,
            containerItemStyle,
            iconStyle
        } = styles;
        const styleselected =
            this.state.selected ?
                {
                    ...containerStyle,
                    ...containerStyle.selected
                } :
                {
                    ...containerStyle,
                    ...containerStyle.notSelected
                };
        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.onPress()}
                onPressOut={() => this.onPressOut()}
            >
                <View style={styleselected}>
                    <View style={containerItemStyle}>
                        <Icon
                            raised
                            reverse
                            name={icon}
                            type='font-awesome'
                            color={color}
                            size={13}
                        />
                        <Text style={textStyle}>{name.toUpperCase()}</Text>
                        <View style={iconStyle}>
                            <Icon
                                name='angle-right'
                                type='font-awesome'
                                color='#4A4848'
                                size={33}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1.5,
        borderColor: '#e9e9e9',
        notSelected: {
            backgroundColor: 'white'
        },
        selected: {
            backgroundColor: '#e7e7e7'
        }
    },
    containerItemStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70
    },
    textStyle: {
        color: '#3f3d3d',
        fontSize: 13,
        fontFamily: Fonts.TextBold,
    },
    iconStyle: {
        position: 'absolute',
        right: 20
    }
};

export default withNavigation(AreaItem);
