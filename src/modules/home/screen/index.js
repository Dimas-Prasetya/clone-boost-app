import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

  static navigationOptions = {
      header: null,
  }

    state = {  }
    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}

export default Home;