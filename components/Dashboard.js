import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './DashboardStyles';

const Dashboard = ({ navigation }) => {
  const handleStatusPress = () => {
    Alert.alert(
      'Message Warning',
      'Are you sure you want to turn the machine ON?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            navigation.navigate('DashboardON');
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
        style={[styles.statusCircle, styles.statusCircleOff]} 
        onPress={handleStatusPress}
      >
        <Text style={styles.statusLabelOff}>Off</Text>
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>The machine is currently turned OFF</Text>
      </View>
    </View>
  );
};

export default Dashboard;
