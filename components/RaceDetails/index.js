import React, { PureComponent } from 'react';
import { Card, CardItem, Text, Body, Spinner, View } from "native-base";
import style from './style';


class RaceDetails extends PureComponent {
    renderRace() {
        let raceResults = <View>
            {this.props.raceResults.map((race, key) => {
            return (
                <Card key={key}>
                    <CardItem header bordered>
                        <Text>Round {race.round}</Text>
                    </CardItem>
                    <CardItem header>
                        <Text>{race.raceName}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>
                            Vencedor: {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}
                        </Text>    
                        <Text>
                            Nacionalidade: {race.Results[0].Driver.nationality}
                        </Text>
                        <Text>
                            Equipe: {race.Results[0].Constructor.name}
                        </Text>
                        <Text>
                            Volta mais rápida: {race.Results[0].FastestLap.Time.time}
                        </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text format="DD/MM/YYYY">{race.date}</Text>
                    </CardItem>
                </Card>
            );
            })}
        </View>;

        return raceResults;
    }

    render() {
        return (
            <View>
                {this.renderRace()}
            </View>
        );
    }
}

export default RaceDetails;