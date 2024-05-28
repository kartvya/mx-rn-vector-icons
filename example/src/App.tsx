import * as React from 'react';

import { MXicon } from 'mx-rn-vector-icons';
import { Alert, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MXicon
        type="AntDesign"
        name={'stepforward'}
        color={'#000'}
        size={30}
        style={{ borderWidth: 1 }}
        onPress={() => Alert.alert('Horray!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
