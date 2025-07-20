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
  Alert, // Added for basic sign-up alert
} from 'react-native';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Here you would typically send data to a registration service
    Alert.alert(
      'Sign Up Attempt',
      `Full Name: ${fullName}\nEmail: ${email}\nPassword: ${password}\n(Sign up logic goes here!)`,
    );
    // For a real app, navigate to home screen or handle registration state
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2b3c" />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Create Account</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#8a9ba8"
              autoCapitalize="words"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

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
              placeholder="Create a password"
              placeholderTextColor="#8a9ba8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              placeholderTextColor="#8a9ba8"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.loginLinkText}>
              Already have an account? Log In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e334a', // Dark blue background, consistent with Login
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
    marginBottom: 40, // Slightly less margin than Login due to more fields
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15, // Slightly less margin for more fields to fit
  },
  inputLabel: {
    fontSize: 16,
    color: '#aed6f1', // Light blue for labels
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 50, // Slightly shorter inputs
    backgroundColor: '#2c4560', // Slightly lighter dark blue for input fields
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 17, // Slightly smaller font
    color: '#ecf0f1',
    borderWidth: 1,
    borderColor: '#4a6b8c', // Subtle border
  },
  signUpButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#27ae60', // Green for sign-up (distinct from login blue)
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
  loginLinkText: {
    fontSize: 16,
    color: '#8a9ba8', // Muted text for secondary links
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SignUp;
