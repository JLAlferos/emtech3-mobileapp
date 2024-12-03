import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DashboardStyles';

const Dashboard = ({ navigation }) => {
  // State to toggle between ON and OFF
  const [isOn, setIsOn] = useState(false);

  // Handle the toggle status change
  const handleStatusPress = () => {
    if (isOn) {
      // If the machine is ON, ask to turn it OFF
      Alert.alert(
        'Message Warning',
        'Are you sure you want to turn the machine OFF?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              setIsOn(false); // Set to OFF
            },
          },
        ]
      );
    } else {
      // If the machine is OFF, ask to turn it ON
      Alert.alert(
        'Message Warning',
        'Are you sure you want to turn the machine ON?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              setIsOn(true); // Set to ON
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Seaweed Drying Machine</Text>
        <Ionicons
          name="notifications-outline"
          size={30}
          color="black"
          style={styles.notificationIcon}
        />
      </View>

      <Text style={styles.statusText}>Status</Text>

      {/* Status Circle with dynamic styles based on isOn */}
      <TouchableOpacity
        style={[styles.statusCircle, isOn ? styles.statusCircleOn : styles.statusCircleOff]}
        onPress={handleStatusPress}
      >
        <Text style={isOn ? styles.statusLabelOn : styles.statusLabel}> 
          {isOn ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>

      {/* Info Box when OFF */}
      {!isOn && (
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>The machine is currently turned OFF</Text>
          </View>
        </View>
      )}

      {/* Info Box only visible when ON */}
      {isOn && (
        <View style={styles.infoBoxContainer}>
          <TouchableOpacity
            style={styles.infoBox}
            onPress={() => navigation.navigate('Drying')}
          >
            <Ionicons name="water-outline" size={24} color="gray" />
            <Text style={styles.infoText}>INACTIVE</Text>
            <Text style={styles.infoSubText}>DRYING</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoBox}
            onPress={() => navigation.navigate('Temperature')}
          >
            <Ionicons name="thermometer-outline" size={24} color="gray" />
            <Text style={styles.infoText}>TEMPERATURE</Text>
            <Text style={styles.infoSubText}>80°C</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Dashboard;
