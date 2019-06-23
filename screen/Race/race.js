import React from 'react';
import { SafeAreaView } from 'react-navigation';
import RaceDetails from '../../components/RaceDetails';
import { Spinner, View } from "native-base";

export default class Race extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            raceResults: [],
            loading: false
        };
        
    }

    static navigationOptions = () => {
        return {
            title: 'Corrida',
        };
    }

    componentDidMount() {
        const race = this.props.navigation.getParam('race');
        const year = this.props.navigation.getParam('year');        

        this.getRace(race, year);
    }

    getRace(race, year) {
        fetch(`http://ergast.com/api/f1/${year}/${race}/results.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                raceResults: data.MRData.RaceTable.Races,
                loading: true
            });
        })
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='blue' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                <RaceDetails raceResults={this.state.raceResults}></RaceDetails>
            </SafeAreaView>
        );
    }

}