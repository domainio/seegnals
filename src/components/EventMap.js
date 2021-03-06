import React, { Component } from 'react';
import { Container, Content, Fab, Text, Header, InputGroup, Icon, Left, View, Input } from 'native-base';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
let ScreenHeight = Dimensions.get("window").height;

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 19.0760;
const LONGITUDE = 72.8777;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



class EventMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      lastPosition: '',
      region: null,
      //   latitude: LATITUDE,
      //   longitude: LONGITUDE,
      //   latitudeDelta: LATITUDE_DELTA,
      //   longitudeDelta: LONGITUDE_DELTA,
      // },
      position: null,
      watchId: null,
    };
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     const region = {
    //       latitudeDelta: LATITUDE_DELTA,
    //       longitudeDelta: LONGITUDE_DELTA,
    //       latitude: Number(position.coords.latitude),
    //       longitude: Number(position.coords.longitude)
    //     };
    //     this.setState({ region });
    //   },
    //   (error) => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
    // this.watchId = navigator.geolocation.watchPosition(
    //   (position) => {
    //     this.setState({ watchId: position });
    //     console.log('watchid: ', position);
    //   },
    //   (error) => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000, distanceFilter: 10 },
    // );
  }

  componentWillUnmount() {
    // navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region) {
    console.log('region change: ', region);
    // this.setState({ region });
  }

  onSelectLocation(location) {
    const region = Object.assign({}, this.state.region, { latitude: location.lat, longitude: location.lng });
    this.setState({ region });
  }

  render() {
    return (
      <Container>
        <View style={Styles.Content}>
          <MapView.Animated
            style={Styles.Map}
            ref={component => this._map = component}
            showsUserLocation={true}
            region={this.state.region}
            loadingEnabled
            loadingIndicatorColor="#666666"
            loadingBackgroundColor="#eeeeee"
          />
          <Fab position="bottomLeft" style={Styles.Fab} active={false}>
            <Icon color="red" ios='ios-menu' android="md-menu" style={Styles.FabIcon}/>
          </Fab>
          <View style={Styles.SearchContainer}>
            <GooglePlacesAutocomplete
              placeholder='search...'
              minLength={2} // minimum length of text to search
              autoFocus={true}
              listViewDisplayed='auto'    // true/false/undefined
              fetchDetails={true}
              renderDescription={(row) => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log('on select autocomplete. details: ', details.geometry.location);
                this.onSelectLocation(details.geometry.location);
              }}
              getDefaultValue={() => {
                return ''; // text input default value
              }}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyBBX6uhjICJXGD9O4TXagUd0e3OkbS0LvQ',
                language: 'he', // language of the results
                types: '(cities)', // default: 'geocode'
              }}
              styles={Styles.Autocomplete}
              currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                key: 'AIzaSyBBX6uhjICJXGD9O4TXagUd0e3OkbS0LvQ',
                rankby: 'distance',
                location: {
                  latitude: this.state.region && this.state.region.latitude ? this.state.region.latitude : 0,
                  longitude: this.state.region &&  this.state.region.longitude ? this.state.region.longitude : 0,
                },
              }}
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />
          </View>
        </View>
      </Container>
    );
  }
}

const Styles = {
  Content: {
    flex: 1,
  },
  Map: {
    flex: 1,
  },
  Fab: {
    backgroundColor: 'gray',
    opacity: 0.5,
    color: 'red',
  },
  FabIcon: {
    color:'red',
  },
  SearchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  Autocomplete: {
    container: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    textInputContainer: {

    },
    textInput: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      height: 44,
      color: '#5d5d5d',
      fontSize: 16,
    },
    description: {
      fontWeight: 'bold',
    },
    // predefinedPlacesDescription: {
    //   color: '#1faadb',
    // },
    // loader: {
    //   color: 'blue',
    // },
    listView: {
      opacity: 0.7,
      backgroundColor: 'white',
    },
    poweredContainer: {
      opacity: 0,
    }
  },
};

export default EventMap;