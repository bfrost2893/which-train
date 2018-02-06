import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import textStyle from '../styles/text';

class AddressInput extends Component {
  render() {
    return (
      <View>
        <Text style={[textStyle.text, styles.label]}>
          {capitalize(this.props.addressType)} Address
        </Text>
        <TextInput
          style={[textStyle.text, styles.input]}
          onChangeText={address => this.props.onUpdateAddress(address)}
        />
      </View>
    );
  }
}

AddressInput.propTypes = {
  onUpdateAddress: PropTypes.func.isRequired,
  addressType: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  label: {
    left: 10,
  },
  input: {
    left: 10,
    height: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    fontSize: 26,
  },
});

export default AddressInput;
