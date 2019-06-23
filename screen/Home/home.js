import React from 'react';
import { StyleSheet } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  }

  getData(year) {
    this.props.navigation.navigate('Categories', {
      year
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handlerClick={this.getData}></Seasons>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
