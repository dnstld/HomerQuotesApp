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
import type {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// Navigation

type RootStackParamList = {
  Quotes: {itemId: number};
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Quotes"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Quotes"
        component={QuotesScreen}
        initialParams={{itemId: 42}}
        options={{title: 'Homer Quotes App'}}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// Quotes

type QuotesScreenRouteProp = RouteProp<RootStackParamList, 'Quotes'>;
type QuotesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Quotes'
>;

type QuotesProps = {
  route: QuotesScreenRouteProp;
  navigation: QuotesScreenNavigationProp;
};

function QuotesScreen({route, navigation}: QuotesProps) {
  const {itemId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Quotes</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Generate"
        onPress={() =>
          navigation.navigate('Quotes', {
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

// Settings

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type SettingsProps = {
  navigation: SettingsScreenNavigationProp;
};

function SettingsScreen({navigation}: SettingsProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// App

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00aaff',
    text: 'white',
  },
};

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={navTheme}>
        <NavStack />
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
