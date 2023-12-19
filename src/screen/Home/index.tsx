import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';

import Duck from '../../assets/duck.png';

import { Button } from '../../components/Button';

import { styles } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Duck} style={{ width: 60, height: 60, marginBottom: 18 }} />
      <Text style={styles.Title}>DucksBank</Text>
      <Button onPress={() => navigate('Contact')} />
    </View>
  );
}