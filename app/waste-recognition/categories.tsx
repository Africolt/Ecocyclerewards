import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export default function CategoriesScreen() {
  const categories: Category[] = [
    { 
      id: 1, 
      name: 'Plastic', 
      icon: '♻️', 
      color: '#2196F3',
      description: 'Bottles, containers, packaging'
    },
    { 
      id: 2, 
      name: 'Paper', 
      icon: '<MaterialIcons name="description" size={24} color="white" />', 
      color: '#FF9800',
      description: 'Newspaper, cardboard, office paper'
    },
    { 
      id: 3, 
      name: 'Glass', 
      icon: '<FontAwesome5 name="glass-whiskey" size={24} color="white" />', 
      color: '#4CAF50',
      description: 'Bottles, jars, containers'
    },
    { 
      id: 4, 
      name: 'E-waste', 
      icon: '📱', 
      color: '#9C27B0',
      description: 'Electronics, batteries, devices'
    },
    { 
      id: 5, 
      name: 'Organic', 
      icon: '🌿', 
      color: '#795548',
      description: 'Food waste, garden waste'
    },
    { 
      id: 6, 
      name: 'Chemicals', 
      icon: '⚠️', 
      color: '#F44336',
      description: 'Cleaning products, paints'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Browse Categories</Text>
        <Text style={styles.subtitle}>Select a waste category for disposal guidance</Text>
      </View>

      <View style={styles.categoriesGrid}>
        {categories.map(category => (
          <Link 
            key={category.id} 
            href={`/waste-recognition/plastic-bottle`} 
            asChild
          >
            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                <Text style={styles.icon}>{category.icon}</Text>
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryDescription}>{category.description}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.scanSection}>
        <Ionicons name="camera-outline" size={48} color="#2E8B57" />
        <Text style={styles.scanTitle}>Quick Scan</Text>
        <Text style={styles.scanDescription}>
          Use your camera to instantly identify any waste item
        </Text>
        <Link href="/(tabs)/scan" asChild>
          <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.scanButtonText}>Open Camera Scanner</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  scanSection: {
    backgroundColor: '#F5F5F5',
    margin: 16,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  scanTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  scanDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  scanButton: {
    backgroundColor: '#2E8B57',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});