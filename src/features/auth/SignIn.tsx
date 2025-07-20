import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert, // Added for basic login alert
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      // Here you would typically send data to an authentication service
      Alert.alert(
        'Login Attempt',
        `Email: ${email}\nPassword: ${password}\n(Login logic goes here!)`,
      );
      // For a real app, navigate to home screen or handle authentication state
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2b3c" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Welcome Back!</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#8a9ba8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#8a9ba8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e334a', // Dark blue background
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#1e334a',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ecf0f1', // Light gray/white for header
    marginBottom: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#aed6f1', // Light blue for labels
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#2c4560', // Slightly lighter dark blue for input fields
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 18,
    color: '#ecf0f1',
    borderWidth: 1,
    borderColor: '#4a6b8c', // Subtle border
  },
  loginButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#3498db', // Vibrant blue for the button
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Android shadow
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff', // White text
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#8a9ba8', // Muted text for secondary links
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SignIn;
