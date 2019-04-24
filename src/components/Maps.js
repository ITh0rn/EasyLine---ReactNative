import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapstyle from '../constants/mapstyle.json';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(JSON.stringify(position));
            this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        }
    );
  }

  render() {
    return (
      <View style={styles1.container}>
        <MapView
           provider={PROVIDER_GOOGLE}
           style={styles1.map}
           region={{
                latitude: 42.352392,
                longitude: 13.400668,
                latitudeDelta: 0.0092,
                longitudeDelta: 0.0092,
            }}
          showsUserLocation
          customMapStyle={mapstyle}
        />
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
 container: {
    height: 240,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 10
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 }
});
