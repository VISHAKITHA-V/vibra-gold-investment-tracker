// app/(tabs)/explore.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Explore</Text>
      <Text>Show lists, search, filters here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
