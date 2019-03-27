import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ServiceItem from './ServiceItem';

export default class AreaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const formdata = new FormData();
        const { courseid } = this.props;
        console.log(courseid);
        formdata.append('id', courseid);
        formdata.append('provid', 1);
        axios.post('http://test.easyline.univaq.it/api/v1/services', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => {
                this.setState({ data: response.data, isLoading: false });
            })
            .catch((err) => {
                console.log(err);
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
