import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Category {
  id: number;
  name: string;
  icon: string; // Using emoji for simplicity }
}

export default function scan() {
  const categories: Category[] = [
    { id: 1, name: 'Plastic', icon: '♻️' },
    { id: 2, name: 'Paper', icon: '📄' },
    { id: 3, name: 'Glass', icon: '🍶' },
    { id: 4, name: 'E-waste', icon: '📱' },
    { id: 5, name: 'Organic', icon: '🌿' },
    { id: 6, name: 'Chemicals', icon: '⚠️' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WASTE RECOGNITION</Text>
      </View>

      <View style={styles.checkWasteSection}>
        <Text style={styles.sectionTitle}>Check Your Waste</Text>
        
        <TouchableOpacity style={styles.searchItem}>
          <Text style={styles.searchItemText}>plastic bottle</Text>
        </TouchableOpacity>

        <Link href="./waste-recognition/categories" asChild>
          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.browseButtonText}>Browse Categories</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.categoriesGrid}>
        {categories.map(category => (
          <Link 
            key={category.id} 
            href="./waste-recognition/categories" 
            asChild
          >
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.scanSection}>
        <Text style={styles.scanTitle}>Scan with Camera</Text>
        <Text style={styles.scanDescription}>
          Point your camera at the item for instant identification
        </Text>
        
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={24} color="white" />
          <Text style={styles.cameraButtonText}>Open Camera</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  checkWasteSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  searchItem: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchItemText: {
    fontSize: 16,
    color: '#666',
  },
  browseButton: {
    backgroundColor: '#2E8B57',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  browseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  scanSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 20,
    borderRadius: 12,
  },
  scanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  scanDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  cameraButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});