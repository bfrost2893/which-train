import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

export default class UpdateAddress extends Component {
  constructor(props) {
    super(props);
    this.state = { address: 'stat' };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderBottomColor: 'white', borderBottomWidth: 2, color: 'white' }}
        />
        <Text style={{ color: 'white' }}>{this.state.address}</Text>
      </View>
    );
  }
}
