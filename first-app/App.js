import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name,setName] = useState('Style test');
  const onClickHandler = () => {
    setName('Style test is done');  
  }

  return (
    <View style={styles.body}>
      <View style={styles.one}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.one}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.one}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.two}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  one: {
    flexDirection:'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: "center",
  },
  two:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: "center",
  },
  view1: {
    flex:1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: "center",
  },
  view2: {
    flex:2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: "center",
  },
  view3: {
    flex:3,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: "center",
  },
  view4: {
    flex:1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: "center",
  },
  view5: {
    flex:1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: "center",
  },
  view6: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  },
  view7: {
    flex:1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "center",
  },
  text:{
    color: 'black', 
    fontSize: 40,
    fontStyle:'italic',
    margin: 10,     
  },
});