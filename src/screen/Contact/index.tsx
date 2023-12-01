import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { useScreenGuard } from '../../hooks/useScreenGuard';

export function Contact() {
  useScreenGuard('Contact');
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Teste</Text>
    </View>
  );
}