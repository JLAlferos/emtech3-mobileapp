import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Drying = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drying Status</Text>
      <Text style={styles.text}>The machine is currently inactive and waiting for drying to start.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF2EA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Drying;
