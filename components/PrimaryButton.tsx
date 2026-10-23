// components/PrimaryButton.tsx
import React from 'react';
import { Button, type ButtonProps } from 'react-native-paper';

type Props = Pick<ButtonProps, 'children' | 'onPress' | 'disabled' | 'loading' | 'icon' | 'mode'>;

export default function PrimaryButton({ children, onPress, ...props }: Props) {
  return (
    <Button mode="contained" onPress={onPress} buttonColor="#ff5e00" {...props}>
      {children}
    </Button>
  );
}
