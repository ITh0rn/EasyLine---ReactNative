import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class DrawerHeader extends React.Component {
    render() {
        return (
            <View style={{ width: '100%', height: 40, justifyContent: 'center', backgroundColor: '#901100' }}>
                <View style={{ position: 'absolute', left: 20 }}>
                    <Icon
                        name='angle-right'
                        type='font-awesome'
                        color='#FFF'
                        size={35}
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(DrawerHeader);
