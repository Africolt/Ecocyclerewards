import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface RecyclingCenter {
  id: number;
  name: string;
  distance: string;
  hours: string;
  materials: string[];
  latitude: number;
  longitude: number;
}

export default function MapScreen() {
  const [selectedCenter, setSelectedCenter] = useState<RecyclingCenter | null>(null);

  const centers: RecyclingCenter[] = [
    {
      id: 1,
      name: 'Murang\'a Recycling Hub',
      distance: '0.8 km away',
      hours: 'Open until 6:00 PM',
      materials: ['Plastic', 'Paper', 'Glass', 'E-waste'],
      latitude: -0.7200,
      longitude: 37.1500,
    },
    {
      id: 2,
      name: 'Green Point Center',
      distance: '1.2 km away',
      hours: 'Open until 5:00 PM',
      materials: ['Plastic', 'Paper', 'Organic'],
      latitude: -0.7220,
      longitude: 37.1520,
    },
    {
      id: 3,
      name: 'Eco Collection Point',
      distance: '2.1 km away',
      hours: 'Open 24/7',
      materials: ['Plastic', 'Glass only'],
      latitude: -0.7180,
      longitude: 37.1480,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MAP & LOCATION</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>Search centers or addresses...</Text>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -0.7200,
            longitude: 37.1500,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {centers.map(center => (
            <Marker
              key={center.id}
              coordinate={{
                latitude: center.latitude,
                longitude: center.longitude,
              }}
              title={center.name}
              onPress={() => setSelectedCenter(center)}
            />
          ))}
        </MapView>
      </View>

      <View style={styles.centersList}>
        <Text style={styles.sectionTitle}>Nearby Centers</Text>
        <ScrollView>
          {centers.map(center => (
            <View key={center.id} style={styles.centerCard}>
              <View style={styles.centerInfo}>
                <Text style={styles.centerName}>{center.name}</Text>
                <Text style={styles.centerDetails}>
                  {center.distance} • {center.hours}
                </Text>
                <Text style={styles.centerMaterials}>
                  {center.materials.join(', ')}
                </Text>
              </View>
              <View style={styles.centerActions}>
                <TouchableOpacity style={styles.directionsButton}>
                  <Text style={styles.directionsText}>Directions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkInButton}>
                  <Text style={styles.checkInText}>Check In</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
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
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
  },
  searchPlaceholder: {
    color: '#999',
  },
  mapContainer: {
    height: 300,
  },
  map: {
    flex: 1,
  },
  centersList: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  centerCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  centerInfo: {
    marginBottom: 8,
  },
  centerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  centerDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  centerMaterials: {
    fontSize: 12,
    color: '#2E8B57',
  },
  centerActions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  directionsButton: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#2E8B57',
    borderRadius: 4,
    alignItems: 'center',
  },
  directionsText: {
    color: '#2E8B57',
    fontWeight: '600',
  },
  checkInButton: {
    flex: 1,
    padding: 8,
    backgroundColor: '#2E8B57',
    borderRadius: 4,
    alignItems: 'center',
  },
  checkInText: {
    color: 'white',
    fontWeight: '600',
  },
});