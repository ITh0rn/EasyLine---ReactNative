import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ServiceItem from './ServiceItem';
import { getServicesList } from '../api';

export default class AreaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const { courseid } = this.props;
        getServicesList(courseid).then((response) => {
                this.setState({ data: response.data, isLoading: false });
        });
    }

    getNavigationParams() {
        return this.props.navigation.state.params || {};
    }

    keyExtractor(item) { return item.id; }

    renderItem({ item }) {
        return (
            <ServiceItem item={item} />
        );
    }

    render() {
        return (
            this.state.isLoading
                ?
                <ActivityIndicator size='large' color='#FF0000' animating />
                :
                <FlatList
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
        );
    }
}
