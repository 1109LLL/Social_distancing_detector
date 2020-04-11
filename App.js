import React, { useState, Component } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';


// const [buttonState, setButtonState] = useState(false);
let buttonState = false;

activateButton = () =>
{
Alert.alert('Detector Activated')
}

deactivateButton = () =>
{
Alert.alert('Detector Deactivated!')
}

function alertHandler()
{
  // setButtonState(!buttonState);

  if (buttonState)
  {
    return activateButton;
  }
  else
  {
    return deactivateButton;
  }
}


export default function App() {

  return (
    <View style={styles.container}>
      <Text>
        Please press button to activate detector
      </Text>
      <Button
        title = "Start"
        color ="#f194ff"
        onPress={alertHandler()}
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