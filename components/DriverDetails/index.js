import React, { PureComponent } from 'react';
import { Card, CardItem, Text, Body, Spinner, View } from "native-base";
import style from './style';


class DriverDetails extends PureComponent {
    renderDriver() {
        let drivers = <View>
            {this.props.drivers.map((driver, key) => {
            return (
                <Card key={key}>
                    <CardItem header bordered>
                        <Text>{driver.givenName} {driver.familyName}</Text>
                    </CardItem>
                    <CardItem header>
                        <Text>Nacionalidade: {driver.nationality}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>
                            Número: {driver.permanentNumber}
                        </Text>    
                        <Text>
                            Código: {driver.code}
                        </Text>
                        <Text format="DD/MM/YYYY">
                            Nascimento: {driver.dateOfBirth}
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            );
            })}
        </View>;

        return drivers;
    }

    render() {
        return (
            <View>
                {this.renderDriver()}
            </View>
        );
    }
}

export default DriverDetails;