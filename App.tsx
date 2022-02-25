import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text>HomerQuotesApp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#00aaff',
    flex: 1,
  },
});

export default App;
