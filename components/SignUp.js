import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import logoImage from '../assets/seaweed-logo.jpg';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImage}
        style={styles.logoImage}
      />
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Create Account</Text>
        <TextInput 
          placeholder="User"
          style={styles.input}
        />
        <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput 
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ef',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#DBF9D9',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e7d32',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  createButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUp;
