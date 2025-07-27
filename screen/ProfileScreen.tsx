import { View, Text } from 'react-native';
import React from 'react';

const ProfileScreen = ({ route }) => {
  const name = route?.params?.name || 'Guest';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is {name}'s profile</Text>
    </View>
  );
};

export default ProfileScreen;
