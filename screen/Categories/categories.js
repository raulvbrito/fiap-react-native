import React from 'react';
import { SafeAreaView } from 'react-navigation';
import ListCategories from '../../components/ListCategories';
import { View } from "native-base";

export default class Categories extends React.Component {

    constructor(props) {
        super(props);

        this.navigateTo = this.navigateTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Categorias',
        };
    }

    navigateTo(category) {
        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate(category, {
            year
        });
    }

    render() {
        return (
            <SafeAreaView>
                <ListCategories handlerClick={this.navigateTo}></ListCategories>
            </SafeAreaView>
        );
    }

}