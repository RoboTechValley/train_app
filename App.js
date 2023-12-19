import React, {useEffect, useState} from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();
import database from '@react-native-firebase/database';

export default function App() {
  const [region, setregion] = useState({
    latitude: 237.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const chnageRigion = (data)=>{
    setregion(data)
  }

  useEffect(() => {
    database()
    .ref('/train_location')
    .on('value', snapshot => {
      let data = snapshot.val()
      console.log(data);
      chnageRigion({
        latitude: data?.latitude,
        longitude: data?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      // console.log('data: ', data?.latitude);
      // console.log('data: ', data?.latitude);
    });
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        region={region}
        style={styles.map}>
          <Marker coordinate={region} title='Marker' description={`Lat:${region?.latitude} and lag:${region?.longitude}`} /> 
      </MapView>
      <View style={styles.datShowDiv}>
         <Text style={{color:'#000'}}>latitude: {region?.latitude}</Text>
         <Text style={{color:'#000'}}>longitude: {region?.longitude}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  datShowDiv:{
    backgroundColor:'#fff',
    padding:10,
    position:'absolute',
  }
});


