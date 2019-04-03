import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { getAreaList } from '../api';
import AreaContainer from '../containers/AreaContainer';

export default class AreaList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                isLoading: true
            };
        }

        componentDidMount() {
            getAreaList()
            .then((response) => {
                this.setState({ data: response, isLoading: false });
            });
        }

        getNavigationParams() {
            return this.props.navigation.state.params || {};
        }

        keyExtractor(item) { return item.id; }

        renderItem({ item }) {
        return (

            <AreaContainer item={item} />
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
