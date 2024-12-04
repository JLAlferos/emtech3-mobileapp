import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { faker } from '@faker-js/faker';

const Drying = ({ navigation }) => {
  const dryingDurationInHours = 4; 
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTime = Date.now();
  const expectedEndTime = new Date(startTime + dryingDurationInHours * 3600 * 1000);

  const generateFakeMoistureDataPoint = () => ({
    moisture: faker.number.float({ min: 5, max: 30, precision: 0.1 }),
    timestamp: Date.now(),
  });

  const [moistureData, setMoistureData] = useState(() =>
    Array.from({ length: 5 }, () => generateFakeMoistureDataPoint())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMoistureData((prevData) => {
        const newDataPoint = generateFakeMoistureDataPoint();
        return [...prevData.slice(1), newDataPoint];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const chartData = {
    labels: moistureData.map((entry) => {
      const date = new Date(entry.timestamp);
      return `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
    }),
    datasets: [
      {
        data: moistureData.map((entry) => entry.moisture),
        strokeWidth: 2,
      },
    ],
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Moisture Monitoring</Text>
      <LineChart
        data={chartData}
        width={350}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#f0f4ef',
          backgroundGradientTo: '#dbf9d9',
          color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#4caf50',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={styles.info}>
       Mmoisture content of seaweed during the drying process
      </Text>

      <View style={styles.infoBoxContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxLabel}>Elapsed Time:</Text>
          <Text style={styles.infoBoxValue}>{formatTime(elapsedTime)}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxLabel}>Expected End Time:</Text>
          <Text style={styles.infoBoxValue}>
            {expectedEndTime.toLocaleTimeString()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ECF2EA',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e7d32',
  },
  info: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  infoBoxContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoBoxLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoBoxValue: {
    fontSize: 16,
    color: '#555',
  },
});

export default Drying;
