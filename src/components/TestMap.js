import React, { Component } from 'react';
import RNGooglePlaces from 'react-native-google-places';
// import RNGooglePlacePicker from 'react-native-google-place-picker';
import { Container, Text, View } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class TestMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    }
  }

  openSearchModal() {
    RNGooglePlaces.getAutocompletePredictions('facebook')
      .then((results) => this.setState({ predictions: results }))
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <Container>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.openSearchModal()}
            >
              <Text>Pick a Place</Text>
            </TouchableOpacity>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  location: {
    backgroundColor: 'white',
    margin: 25
  }
});