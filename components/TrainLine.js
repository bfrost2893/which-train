import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CIRCLE_DIAMETER = 100;

export default class TrainLine extends Component {
  trainLineStyle() {
    return {
      height: CIRCLE_DIAMETER,
      width: CIRCLE_DIAMETER,
      borderRadius: CIRCLE_DIAMETER / 2,
      backgroundColor: this.getTrainColor(this.props.train),
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  getTrainColor(train) {
    switch (train) {
      case 'A':
      case 'C':
      case 'E':
        return 'rgb(43, 83, 170)';
      case 'B':
      case 'D':
      case 'F':
      case 'M':
        return 'rgb(252, 100, 43)';
      case 'G':
        return 'rgb(111, 188, 77)';
      case 'L':
        return 'rgb(167, 169, 172)';
      case 'J':
      case 'Z':
        return 'rgb(152, 102, 56)';
      case 'N':
      case 'Q':
      case 'R':
      case 'W':
        return 'rgb(251, 203, 49)';
      case '1':
      case '2':
      case '3':
        return 'rgb(236, 52, 51)';
      case '4':
      case '5':
      case '6':
        return 'rgb(19, 146, 64)';
      case '7':
        return 'rgb(183, 58, 171)';
      case 'S':
        return 'rgb(128, 129, 131)';
    }
  }

  render() {
    return (
      <View style={this.trainLineStyle()}>
        <Text style={textStyle}>{this.props.train}</Text>
      </View>
    );
  }
}

const textStyle = {
  color: 'white',
  fontSize: 70,
  fontWeight: '900',
};
