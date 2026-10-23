// components/AppHeader.tsx
import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppHeader({ title = 'GoldProject' }: { title?: string }) {
  return (
    <Appbar.Header elevated>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

