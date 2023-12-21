import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    database()
    .ref('/')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setdata(snapshot.val())
    });
  }, []);
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign:'center', color:'#000',fontSize:19,fontWeight:'bold',paddingTop:50}}>Realtime Soil Data</Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>PH</Text>
          <Text style={styles.value}>3.30</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Moisture</Text>
          <Text style={styles.value}>0</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Water Level</Text>
          <Text style={styles.value}>100</Text>
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -20,
    flex:1,
  },
  box: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width:'30%',
    borderRadius:4,
    backgroundColor:'#fff'
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 26,
    marginTop: 5,
    fontWeight:'bold'
  },
});

export default App;
