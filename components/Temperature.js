import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Temperature = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature</Text>
      <Text style={styles.text}>The current temperature of the drying machine is 80°C.</Text>
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

export default Temperature;
