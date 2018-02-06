import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import whichTrain from './reducers';

// presentational
import Title from './components/Title';
import TrainLine from './components/TrainLine';
import UpdateAddress from './containers/UpdateAddress';
import getDirections from 'react-native-google-maps-directions';

// containers
// import Settings from './containers/Settings';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, whichTrain);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export default class App extends React.Component {
  handleGetDirections = () => {
    const data = {
      source: {
        latitude: -33.8356372,
        longitude: 18.6947617,
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459,
      },
      params: [
        {
          key: 'dirflg',
          value: 'w',
        },
      ],
    };

    getDirections(data);
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Title>Which Train?</Title>
            <UpdateAddress addressType="home" />
            <UpdateAddress addressType="work" />
            {/* <FlatList
            data={trainLines.map(line => {
              return { key: line };
            })}
            renderItem={({ item }) => <TrainLine train={item.key} />}
          /> */}
          </View>
        </PersistGate>
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
