import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import whichTrain from './reducers';

// presentational
import Title from './components/Title';
import TrainLine from './components/TrainLine';
import UpdateAddress from './components/UpdateAddress';
import getDirections from 'react-native-google-maps-directions';

// containers
// import Settings from './containers/Settings';

let store = createStore(whichTrain);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Title>Which Train?</Title>
          <UpdateAddress />
          {/* <Settings /> */}
          <FlatList
            data={trainLines.map(line => {
              return { key: line };
            })}
            renderItem={({ item }) => <TrainLine train={item.key} />}
          />
        </View>
      </Provider>
    );
  }
}

const trainLines = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'J',
  'L',
  'M',
  'N',
  'Q',
  'R',
  'S',
  'W',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
});
