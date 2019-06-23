import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class ListCategories extends PureComponent {
    renderListCategories() {
        return <View>
            <Button block onPress={ () => this.props.handlerClick("Races") } style={style.button}>
                <Text>
                    Corridas
                </Text>
            </Button>
            <Button block onPress={ () => this.props.handlerClick("Drivers") } style={style.button}>
                <Text>
                    Pilotos
                </Text>
            </Button>    
        </View>; 
    }

    render() {
        return (
            <View>
                {this.renderListCategories()}
            </View>
        );
    }
}

export default ListCategories;