import React, { Component } from 'react';
import { SectionList, ActivityIndicator, View, Text } from 'react-native';
import axios from 'axios';
import CourseItem from './CourseItem';
import { Fonts } from '../constants/index';


export default class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        const { id } = this.props;
        const formdata = new FormData();
        formdata.append('provid', id);
        formdata.append('id', '');
        axios.post('http://test.easyline.univaq.it/api/v1/services', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => {
                this.setState((state, props) => ({ data: response.data, isLoading: false, headerLab: state.headerLab + props.headerLab }));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    keyExtractor(item) {
        return item.id;
    }

    renderItem({ item }) {
            return (
                <CourseItem item={item} />
            );
    }

    renderSectionHeader({ section }) {
        return (
            <View style={{ BackgroundColor: '#949494', height: 33, justifyContent: 'center' }}>
            <Text style={{ color: '#494949', fontSize: 13, paddingLeft: 10, fontFamily: Fonts.TextBold }}>{section.title}</Text>
            </View>
        );
    }

    render() {
        return (
            this.state.isLoading
                ?
                <ActivityIndicator size='large' color='#FF0000' animating />
                :
                <SectionList
                    sections={[{ title: 'LAUREA TRIENNALE', data: this.state.data.filter(e => e.type_label === 'LAUREA TRIENNALE')
                    },
                        { title: 'LAUREA MAGISTRALE', data: this.state.data.filter(e => e.type_label === 'LAUREA MAGISTRALE') }]}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
        );
    }
}
