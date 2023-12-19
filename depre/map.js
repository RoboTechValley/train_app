// import React, {useEffect, useState} from 'react';
// import MapView,{Marker} from 'react-native-maps';
// import { StyleSheet, View } from 'react-native';
// // import {enableLatestRenderer} from 'react-native-maps';
// // enableLatestRenderer();
// import database from '@react-native-firebase/database';

// export default function App() {
//   const [region, setregion] = useState({
//     latitude: 237.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });
//   const chnageRigion = (data)=>{
//     setregion(data)
//   }

//   useEffect(() => {
//     database()
//     .ref('/Project_helmet')
//     .on('value', snapshot => {
//       let data = snapshot.val()
//       chnageRigion({
//         latitude: data?.lag,
//         longitude: data?.lat,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       })
//       console.log('data: ', data?.lag);
//       console.log('data: ', data?.lat);
//     });
//   }, []);
//   return (
//     <View style={styles.container}>
//       <MapView
//         region={region}
//         style={styles.map}>
//           <Marker coordinate={region} title='Marker' description={`Lat:${region?.latitude} and lag:${region?.longitude}`} /> 
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });


import React from 'react';
import {View, StyleSheet} from 'react-native';

const Map = () => {
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Map;
