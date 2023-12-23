import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import database from '@react-native-firebase/database';

const App = () => {
  const [data, setdata] = useState([]);
  const [imageUrlds, setimageUrlds] = useState('https://robotechvalleycom/app/tds.jpeg');
  useEffect(() => {
    database()
    .ref('/users/BUBT')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setdata(snapshot.val())
    });
  }, []);
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign:'center', color:'#000',fontSize:19,fontWeight:'bold',paddingTop:50}}>SMART BIOFLOCK</Text>
      <Image style={{height:200, width:'100%',marginTop:10}} resizeMode='contain' source={require('./Images/tds.jpeg')} />
      <Text style={{textAlign:'center', color:'gray'}}>Standard TDS Chart</Text>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>PH</Text>
          <Text style={styles.value}>{data?.ph}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>TDS</Text>
          <Text style={styles.value}>{data?.tds}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Water Level</Text>
          <Text style={styles.value}>{data?.waterLevel}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.heading}>Temp</Text>
          <Text style={styles.value}>{data?.temperature}</Text>
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
    marginTop: 20,
    flex:1,
    flexWrap:'wrap'
  },
  box: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width:'30%',
    borderRadius:4,
    backgroundColor:'#fff',
    marginBottom:10
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
