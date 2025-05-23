import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation, route }) {
  const { userEmail } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.email}>Bem-vindo: {userEmail}</Text>
      <Text style={styles.title}>Details Screen</Text>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home', { userEmail })}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Profile', { userEmail })}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0937a',
  },
  email: {
    position: 'absolute',
    top: 60,
    fontSize: 20,
    color: '#2e2a23',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2e2a23',
  },
  buttonContainer: {
    backgroundColor: '#5f694f',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});