import React, { useState, Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {

  let buttonState = false;
  const [_title, _setTitle] = useState('Start')

  function alertHandler()
  {
    buttonState = !buttonState;

    console.log('The buttonState :: '+buttonState);
    if (buttonState == true)
    {
      console.log('It is true');
      _setTitle('Stop');
      return Alert.alert('Detector Activated');
    }
    else
    {
      console.log('It is false');
      _setTitle('Start');
      return Alert.alert('Detector Deactivated!');
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Please press button to activate detector
      </Text>
      <Button
        title = {_title}
        color ="#f194ff"
        onPress={() => alertHandler()}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});