import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Achievement {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export default function ProfileScreen() {
  const userStats = {
    joinedDate: 'January 2024',
    totalRecycled: '45.2 kg',
    co2Saved: '28.5 kg',
    treesSaved: 12,
    points: 450
  };

  const achievements: Achievement[] = [
    { id: 1, name: 'First Timer', icon: '🏆', description: 'First recycling session' },
    { id: 2, name: 'Eco Warrior', icon: '🌍', description: '10kg recycled' },
    { id: 3, name: 'Plastic Hero', icon: '♻️', description: '50 plastic items' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' }} 
            style={styles.profileImage}
             onError={() => console.log('Image failed to load')}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>John Kamau</Text>
            <Text style={styles.joinDate}>Joined {userStats.joinedDate}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Environmental Impact</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.totalRecycled}</Text>
            <Text style={styles.statLabel}>Total Recycled</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.co2Saved}</Text>
            <Text style={styles.statLabel}>CO₂ Saved</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.treesSaved}</Text>
            <Text style={styles.statLabel}>Trees Saved</Text>
          </View>
        </View>
      </View>

      <View style={styles.achievementsSection}>
        <Text style={styles.sectionTitle}>Achievement Badges</Text>
        <View style={styles.achievementsGrid}>
          {achievements.map(achievement => (
            <View key={achievement.id} style={styles.achievementItem}>
              <Text style={styles.achievementIcon}>{achievement.icon}</Text>
              <Text style={styles.achievementName}>{achievement.name}</Text>
              <Text style={styles.achievementDesc}>{achievement.description}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="people-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Invite Friends</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="analytics-outline" size={24} color="#666" />
          <Text style={styles.menuText}>Detailed Analytics</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
          <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
          <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 16,
    color: '#666',
  },
  statsSection: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  achievementsSection: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  achievementItem: {
    width: '30%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    marginBottom: 12,
  },
  achievementIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDesc: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
  menuSection: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#FF3B30',
  },
});