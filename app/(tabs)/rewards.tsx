import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Reward {
  id: number;
  name: string;
  points: number;
  description: string;
}

export default function RewardsScreen() {
  const rewards: Reward[] = [
    { id: 1, name: 'Nakumatt Gift Card', points: 500, description: 'KSh 200 shopping voucher' },
    { id: 2, name: 'Safaricom Airtime', points: 300, description: 'KSh 100 mobile credit' },
    { id: 3, name: 'Tree Planting Certificate', points: 200, description: 'Plant a tree in your name' },
    { id: 4, name: 'Eco-Friendly Bag', points: 150, description: 'Reusable shopping bag' },
  ];

  const recentRedemptions = [
    { id: 1, name: 'Safaricom Airtime', date: '3 days ago', points: -150, details: 'KSh 50 mobile credit' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>REWARDS & GAMIFICATION</Text>
      </View>

      <View style={styles.pointsSection}>
        <Text style={styles.pointsBalance}>450</Text>
        <Text style={styles.pointsLabel}>Available Points</Text>
        <Text style={styles.pointsToNext}>550 points to next reward tier</Text>
      </View>

      <View style={styles.rewardsSection}>
        <Text style={styles.sectionTitle}>Available Rewards</Text>
        {rewards.map(reward => (
          <View key={reward.id} style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
              <Text style={styles.rewardName}>{reward.name}</Text>
              <Text style={styles.rewardDescription}>{reward.description}</Text>
              <Text style={styles.rewardPoints}>{reward.points} pts</Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.redeemButton,
                reward.points > 450 && styles.redeemButtonDisabled
              ]}
              disabled={reward.points > 450}
            >
              <Text style={styles.redeemButtonText}>
                {reward.points > 450 ? 'Need More Points' : 'Redeem Now'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Redemptions</Text>
        {recentRedemptions.map(redemption => (
          <View key={redemption.id} style={styles.redemptionCard}>
            <View style={styles.redemptionInfo}>
              <Text style={styles.redemptionName}>{redemption.name}</Text>
              <Text style={styles.redemptionDetails}>{redemption.details}</Text>
              <Text style={styles.redemptionDate}>{redemption.date}</Text>
            </View>
            <Text style={styles.redemptionPoints}>{redemption.points} pts</Text>
          </View>
        ))}
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
  pointsSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 20,
    borderRadius: 12,
  },
  pointsBalance: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  pointsLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  pointsToNext: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '600',
    marginTop: 4,
  },
  rewardsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  rewardCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardInfo: {
    flex: 1,
  },
  rewardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  rewardPoints: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '600',
    marginTop: 4,
  },
  redeemButton: {
    backgroundColor: '#2E8B57',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  redeemButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  redeemButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  recentSection: {
    padding: 20,
  },
  redemptionCard: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redemptionInfo: {
    flex: 1,
  },
  redemptionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  redemptionDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  redemptionDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  redemptionPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
});