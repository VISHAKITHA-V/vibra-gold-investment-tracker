// app/(tabs)/index.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Welcome to Vibra 👋
      </Text>

      <Link href="/(tabs)/explore" asChild>
        <Button mode="contained">
          Explore the app
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { color: '#ff8000', marginBottom: 20, textAlign: 'center' },
});
