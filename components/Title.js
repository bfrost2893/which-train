import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBorder from './TopBorder';

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBorder />
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: '900',
    color: 'white',
    top: 5,
  },
  container: {
    left: 10,
    marginTop: 50,
  },
});
