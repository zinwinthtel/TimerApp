import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './component/Timer';

export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fbbcea',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "8%",
  }

});