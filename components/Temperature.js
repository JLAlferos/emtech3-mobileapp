import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { faker } from "@faker-js/faker";

const generateFakeTemperatureDataPoint = () => ({
  temperature: faker.number.int({ min: 20, max: 100 }),
  timestamp: Date.now(),
});

const Temperature = ({ navigation }) => {
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [temperatureData, setTemperatureData] = useState(() =>
    Array.from({ length: 5 }, () => generateFakeTemperatureDataPoint())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoint = generateFakeTemperatureDataPoint();
      setTemperatureData((prevData) => {
        const updatedData = [...prevData.slice(1), newDataPoint];
        setCurrentTemperature(updatedData[updatedData.length - 1].temperature);
        return updatedData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTemperatureChange = () => {
    const newDataPoint = generateFakeTemperatureDataPoint();
    setTemperatureData((prevData) => {
      const updatedData = [...prevData.slice(1), newDataPoint];
      setCurrentTemperature(newDataPoint.temperature);
      return updatedData;
    });

    navigation.navigate("Dashboard", { currentTemperature: newDataPoint.temperature });
  };

  const chartData = {
    labels: temperatureData.map((entry) => {
      const date = new Date(entry.timestamp);
      return `${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${date.getHours() >= 12 ? "PM" : "AM"}`;
    }),
    datasets: [
      {
        data: temperatureData.map((entry) => entry.temperature),
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Temperature Monitoring</Text>
      <LineChart
        data={chartData}
        width={350}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#f0f4ef",
          backgroundGradientTo: "#dbf9d9",
          color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 16 },
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: "#4caf50",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text style={styles.infoText}>
        Temperature graph updated every 5 seconds
      </Text>

      <View style={styles.infoBoxContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Current Temperature</Text>
          <View style={styles.gaugeContainer}>
            <Text style={styles.gaugeValue}>{currentTemperature}°C</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleTemperatureChange}
      >
        <Text style={styles.buttonText}>Update Temperature</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4ef",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2e7d32",
  },
  infoText: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
  infoBoxContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  infoBox: {
    width: "90%",
    padding: 20,
    backgroundColor: "#dbf9d9",
    borderRadius: 8,
    alignItems: "center",
  },
  gaugeContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2e7d32",
    borderWidth: 2,
  },
  gaugeValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2e7d32",
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Temperature;
