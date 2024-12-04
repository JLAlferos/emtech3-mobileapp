import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import styles from './DashboardStyles';

const Dashboard = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const route = useRoute();
  const { currentTemperature } = route.params || {};

  const handleStatusPress = () => {
    if (isOn) {
      Alert.alert(
        'Message Warning',
        'Are you sure you want to turn the machine OFF?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              setIsOn(false);
            },
          },
        ]
      );
    } else {
      Alert.alert(
        'Message Warning',
        'Are you sure you want to turn the machine ON?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => {
              setIsOn(true);
            },
          },
        ]
      );
    }
  };

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Seaweed Drying Machine</Text>
        <TouchableOpacity
          onPress={toggleNotification}
        >
          <Ionicons
            name="notifications-outline"
            size={30}
            color="black"
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      {isNotificationVisible && (
        <View style={styles.notificationTray}>
          <Text style={styles.notificationText}>
            Drying was completed @ {new Date().toLocaleString()}
          </Text>
        </View>
      )}

      <Text style={styles.statusText}>Status</Text>

      <TouchableOpacity
        style={[styles.statusCircle, isOn ? styles.statusCircleOn : styles.statusCircleOff]}
        onPress={handleStatusPress}
      >
        <Text style={isOn ? styles.statusLabelOn : styles.statusLabel}>
          {isOn ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>

      {!isOn && (
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>The machine is currently turned OFF</Text>
          </View>
        </View>
      )}

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
            <Text style={styles.infoSubText}>{currentTemperature || 'Loading...'}</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Dashboard;
