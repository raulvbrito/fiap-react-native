import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class ListRaces extends PureComponent {
    renderListRaces() {
        let races = <View>
            {this.props.races.map((races, key) => {
                return (
                    <Button block 
                        key={key} 
                        onPress={ () => this.props.handlerClick(key) }
                        style={style.button}>
                        <Text>
                            {races.Circuit.circuitName}
                        </Text>
                    </Button>
                );
            })}
        </View>;

        return races;
    }

    render() {
        return (
            <View>
                {this.renderListRaces()}
            </View>
        );
    }
}

export default ListRaces;