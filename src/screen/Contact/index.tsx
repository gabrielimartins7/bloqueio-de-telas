import React from 'react';
import { Text, View, Image } from 'react-native';

import Duck from '../../assets/duck.png';

import { useScreenGuard } from '../../hooks/useScreenGuard';

import { styles } from './styles';

export function Contact() {
  useScreenGuard('Contact');

  return (
    <View style={styles.container}>
        <Image source={Duck} style={{ width: 60, height: 60, marginBottom: 18 }} />
        <Text style={styles.text}>Aguarde para ver a tela bloquear!</Text>
    </View>
  );
}