import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="IR PARA CONTACT"
        onPress={() => navigate('Contact')}
      />
    </View>
  );
}