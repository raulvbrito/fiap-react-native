import React from 'react';
import { SafeAreaView } from 'react-navigation';
import ListRaces from '../../components/ListRaces';
import { Spinner, View } from "native-base";

export default class Races extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            races: [],
            loading: false
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Corridas',
        };
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');

        this.getInfoF1ByYear(year);
    }

    getInfoF1ByYear(year) {
        let urls = [
            `http://ergast.com/api/f1/${year}.json`,
            `http://ergast.com/api/f1/${year}/races.json`
        ]

        Promise.all(urls.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then(data => {
                this.setState({
                    races: data[0].MRData.RaceTable.Races,
                    loading: true
                })
            })
    }

    navigateTo(race) {
        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate('Race', {
            race,
            year
        });
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='blue' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                <ListRaces races={this.state.races} handlerClick={this.navigateTo}></ListRaces>
            </SafeAreaView>
        );
    }

}