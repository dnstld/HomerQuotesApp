import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00aaff',
    text: 'white',
  },
};

function HomeScreen({route, navigation}) {
  const {itemId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Quotes</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Generate"
        onPress={() =>
          navigation.navigate('Home', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button
        title="Go to Quotes"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{itemId: 42}}
            options={{title: 'Homer Quotes App'}}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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
