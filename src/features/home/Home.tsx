import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView, // Useful for content that might exceed screen height
  TouchableOpacity, // For interactive elements
} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2b3c" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome Home!</Text>
          <Text style={styles.subtitle}>
            Your personalized dashboard awaits.
          </Text>

          {/* Simple Card for Content */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Daily Insights</Text>
            <Text style={styles.cardText}>
              You have 3 new notifications and 1 pending task. Keep up the great
              work!
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

          {/* Another Section Example */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>Profile Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkItem}>
              <Text style={styles.linkText}>App Tour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e334a', // Dark blue background, consistent
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures ScrollView takes full height
    justifyContent: 'center', // Center content vertically if it doesn't fill
    paddingVertical: 30, // Add some vertical padding
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#1e334a',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ecf0f1', // Light gray/white for header
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#aed6f1', // Light blue, slightly muted
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#2c4560', // Slightly lighter dark blue for cards
    borderRadius: 15,
    padding: 25,
    width: '100%',
    maxWidth: 450,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10, // Android shadow
    borderColor: '#4a6b8c', // Subtle border
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#aed6f1',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#ecf0f1',
    lineHeight: 24,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#3498db', // Blue accent button, consistent with login
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: 'flex-start', // Align to start of card
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
    maxWidth: 450,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#2c4560', // Consistent card background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4a6b8c',
    paddingBottom: 10,
  },
  linkItem: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth, // Thin separator
    borderBottomColor: '#4a6b8c',
  },
  linkText: {
    fontSize: 16,
    color: '#aed6f1',
  },
});

export default Home;
