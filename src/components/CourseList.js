import React, { Component } from 'react';
import { SectionList, ActivityIndicator, View, Text } from 'react-native';
import CourseItem from './CourseItem';
import { Fonts } from '../constants/index';
import { getCourseList } from '../api';


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
        getCourseList(id)
            .then((response) => {
            this.setState((state, props) => ({ data: response, isLoading: false, headerLab: state.headerLab + props.headerLab }));
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
