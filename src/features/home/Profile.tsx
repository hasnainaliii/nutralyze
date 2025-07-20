import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image, // For user avatar
  TouchableOpacity, // For interactive elements like "Edit Profile"
} from 'react-native';

// Dummy user data for demonstration
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar:
    'https://www.gravatar.com/avatar/2c7d99fe281ecd3d65341270ae08ca91?s=200&d=mp', // Example Gravatar
  bio: 'Passionate React Native developer and lifelong learner. Enjoying building beautiful and functional mobile apps.',
  membershipDate: 'Joined January 2023',
  location: 'New York, USA',
};

function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a2b3c" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.sectionContent}>{user.bio}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Member Since:</Text>
              <Text style={styles.detailValue}>{user.membershipDate}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Location:</Text>
              <Text style={styles.detailValue}>{user.location}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e334a', // Dark blue background
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 30,
    alignItems: 'center', // Center content horizontally
  },
  container: {
    width: '100%',
    maxWidth: 500, // Max width for larger screens
    paddingHorizontal: 25,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#2c4560', // Card-like background
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    borderColor: '#4a6b8c',
    borderWidth: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes it a circle
    borderWidth: 3,
    borderColor: '#3498db', // Blue border for emphasis
    marginBottom: 15,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#aed6f1',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3498db', // Blue, consistent with action buttons
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#2c4560',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderColor: '#4a6b8c',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#aed6f1',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#4a6b8c',
  },
  sectionContent: {
    fontSize: 16,
    color: '#ecf0f1',
    lineHeight: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingVertical: 5,
  },
  detailLabel: {
    fontSize: 16,
    color: '#aed6f1',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: '#ecf0f1',
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Red for destructive action
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 450,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
