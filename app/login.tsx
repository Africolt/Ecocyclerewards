import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    fullName: 'John Kamau',
    email: 'john.kamau@gmail.com',
    phone: '+254 712 345 678',
    location: 'Murang\'a Town, Kenya',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async (): Promise<void> => {
    setIsLoading(true);
    // Here you would typically handle form submission, e.g., send data to backend
    // For this example, we'll just navigate to the home screen after a brief delay
    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.replace('/(tabs)/home');
    setIsLoading(false);

    // Simple validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.location.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    router.replace('./(tabs)/home');
  };

  const handleInputChange = (field: string, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={formData.fullName}
          onChangeText={(text) => handleInputChange('fullName', text)}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={formData.location}
          onChangeText={(text) => handleInputChange('location', text)}
          placeholder="Enter your location"
        />

        <TouchableOpacity style={[styles.continueButton, isLoading && styles.disabledButton]}
        onPress={handleContinue} 
        disabled={isLoading}
        >
          <Text style={styles.continueButtonText}>
            {isLoading ? 'Creating Account...' : 'Continue'}
          </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  continueButton: {
    backgroundColor: '#2E8B57',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});