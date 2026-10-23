// app/(tabs)/profile.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar.Text size={80} label="V" style={{ backgroundColor: '#ff8000' }} />
      <Text variant="titleLarge" style={{ marginTop: 12 }}>
        Visha
      </Text>
      <Button mode="contained" style={{ marginTop: 16 }} onPress={() => console.log('Logout')}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', padding: 16 } });
