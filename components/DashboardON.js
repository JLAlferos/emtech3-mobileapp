import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DashboardStyles';

const DashboardON = ({ navigation }) => {
  const handleStatusPress = () => {
    Alert.alert(
      'Message Warning',
      'Are you sure you want to turn the machine OFF?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            navigation.navigate('Dashboard');
          },
        },
      ]
    );
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
      <TouchableOpacity 
        style={[styles.statusCircle, styles.statusCircleOn]} 
        onPress={handleStatusPress}
      >
        <Text style={styles.statusLabelOn}>On</Text>
      </TouchableOpacity>
      <View style={styles.infoBoxContainer}>
        <View style={styles.infoBox}>
          <Ionicons name="water-outline" size={24} color="gray" />
          <Text style={styles.infoText}>INACTIVE</Text>
          <Text style={styles.infoSubText}>DRYING</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="thermometer-outline" size={24} color="gray" />
          <Text style={styles.infoText}>TEMPERATURE</Text>
          <Text style={styles.infoSubText}>80°C</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default DashboardON;
