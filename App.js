import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

// function StartButton()
// {
//   const [buttonPressed, setButtonPressed] = useState(false);

//   return 
//   (
//     <View>
//       <Text>
//         Please press button to activate detector
//       </Text>
//       <Button
//         onPress={() => {setButtonPressed(true);}}
//         disabled={!buttonPressed}
//         title={"Detector successfully activated"}
//       />
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Please press button to activate detector
      </Text>
      <Button
        title = "Start"
        color ="#f194ff"
        onPress={() => Alert.alert('Detector activated')}
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