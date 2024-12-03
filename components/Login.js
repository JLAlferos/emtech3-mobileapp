import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import logoImage from 'C:/Users/admin/Documents/Emtech3-HOA/MobileAppProj/assets/seaweed-logo.jpg';

const Login = ({ navigation }) => {
  // State to store the user input for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the login process
  const handleLogin = () => {
    // Check if the fields are empty or if credentials are incorrect
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
    } else if (username !== 'admin' || password !== 'admin') {
      Alert.alert('Error', 'Invalid username or password.');
    } else {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={logoImage}
        style={styles.logoImage}
      />
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <TextInput 
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin} 
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>No account yet? <Text style={styles.signUpLink}>Sign Up</Text></Text>
        </Pressable>
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
  loginButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 15,
    fontSize: 14,
    color: '#333',
  },
  signUpLink: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default Login;
