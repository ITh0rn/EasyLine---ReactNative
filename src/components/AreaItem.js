import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Fonts } from '../constants';

class AreaItem extends Component {
    onPressOut({ name, id }) {
        this.setState({ selected: 0 });
        this.props.navigation.navigate('ListaCorsi', {
            title: name,
            providid: id
        });
        const { setProvider } = this.props;
        setProvider(id);
    }

    render() {
        const { item } = this.props;
        const { name, id } = item;
        const {
            textStyle,
            containerStyle,
            containerItemStyle,
            iconStyle
        } = styles;
        return (
          <TouchableHighlight
              activeOpacity={0.85}
              underlayColor={'#6F6F6F'}
              onPressOut={() => this.onPressOut({ name, id })}
          >
                <View style={containerStyle}>
                    <View style={containerItemStyle}>
                        <Icon
                            raised
                            reverse
                            name='graduation-cap'
                            type='font-awesome'
                            color='#f50'
                            size={13}
                        />
                        <Text style={textStyle}>{name}</Text>
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
            </TouchableHighlight>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1.5,
        borderColor: '#e9e9e9',
        backgroundColor: 'white'
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
