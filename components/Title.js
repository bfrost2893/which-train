import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBorder from './TopBorder';
import textStyle from '../styles/text';

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBorder />
        <Text style={[styles.text, textStyle.text]}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    top: 5,
    left: 10,
  },
  container: {
    marginTop: 50,
  },
});
