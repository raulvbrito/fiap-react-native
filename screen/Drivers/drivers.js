import React from 'react';
import { SafeAreaView } from 'react-navigation';
import ListDrivers from '../../components/ListDrivers';
import { Spinner, View } from "native-base";

export default class Drivers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            loading: false
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Pilotos',
        };
    }

    componentDidMount() {
        const year = this.props.navigation.getParam('year');

        this.getInfoF1ByYear(year);
    }

    getInfoF1ByYear(year) {
        let urls = [
            `http://ergast.com/api/f1/${year}.json`,
            `http://ergast.com/api/f1/${year}/drivers.json`
        ]

        Promise.all(urls.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then(data => {
                this.setState({
                    drivers: data[1].MRData.DriverTable.Drivers,
                    loading: true
                })
            })
    }

    navigateTo(driver) {
        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate('Driver', {
            driver,
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
                <ListDrivers drivers={this.state.drivers} handlerClick={this.navigateTo}></ListDrivers>
            </SafeAreaView>
        );
    }

}