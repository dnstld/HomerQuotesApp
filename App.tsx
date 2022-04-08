import React from 'react';
import {Button, Dimensions, StatusBar, Text, View} from 'react-native';
import Svg, {G, Path, Circle} from 'react-native-svg';
import styled from 'styled-components/native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

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
  const parsedIcon = parseIconFromClassName('fab fa-apple');
  const parsedIconSettings = parseIconFromClassName('fab fa-ellipsis');
  const parsedIconShare = parseIconFromClassName('fab fa-share');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 30,
        }}>

        <FontAwesome icon={parsedIcon} />
        <FontAwesome icon={parsedIconSettings} />
        <FontAwesome icon={parsedIconShare} />
        <FontAwesome icon={RegularIcons.addressBook} />

        <Text style={{color: 'white'}}>
          itemId: {JSON.stringify(itemId)}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          odit praesentium quisquam nam sed facere distinctio a aliquam itaque,
          voluptas, esse pariatur alias harum optio non numquam sapiente unde
          tenetur?
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <HomerSvgComponent />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button
              color="white"
              title="Generate"
              onPress={() =>
                navigation.navigate('Quotes', {
                  itemId: Math.floor(Math.random() * 100),
                })
              }
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              color="white"
              title="Share"
              onPress={() => navigation.navigate('Settings')}
            />
            <Button
              color="white"
              title="Settings"
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
        </View>
      </View>
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

// Honer

const screen = Dimensions.get('screen');
const homerHeight = screen.height / 3;

function HomerSvgComponent() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 203.5 270.7"
      xmlSpace="preserve"
      style={{height: homerHeight}}>
      <G
        stroke="#000"
        strokeWidth={1.417}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <Path
          fill="#FBD801"
          d="M42.7 183.9s2.4-27-9.2-55.9-24-49.7-25.2-60.7c-1.2-11.1-2.5-31 20-44.6 18.2-11 39.6-14.3 54.2-6.5 13.9 7.4 24.3 35.4 24.3 35.4s11.6 3.1 6 13.7c-5.5 10.6-4.1 20.7-4.1 20.7s16.4 9.4 7.9 22.9c-8.4 13.5-13.5 73.2 2.4 84.1 15.9 10.8 5.8 24.6 5.8 24.6s-57 1.2-56.9 1.2c.1 0-32.4-22.2-32.4-22.2l7.2-12.7z"
        />
        <Path
          fill="#CFAF67"
          d="M113.3 105.1s20.5 9.6 21.7 27.5c3.9 3.1 10.2 10.1-13.7 17.6 0 5.3.6 8.1-5.8 11.1-3.4 7.7-7.2 21-30.1 19.8s-38.5-13.2-39.7-32 15.7-31 35.9-33.6 29-4.4 31.7-10.4z"
        />
        <Path fill="none" d="M55.5 149.9s19.8 10.4 65.8.2" />
        <Path fill="none" d="M55.5 154.6s-2.2-4.9 1.7-7.8" />
        <Path
          fill="#FBD801"
          d="M84.2 94.9s12.9-1.9 16.3-2.6c3.4-.7 13.8-3.1 12.8 12.8"
        />
        <Path fill="none" d="m20.8 121.2-2.7-18.4 11.4 10.7.9-19 11.8 15.6" />
        <Path
          fill="#FBD801"
          d="M40.5 122.2S28.1 117 26 128.5c-1.9 10.6 8.7 12.3 14.5 12.3"
        />
        <Path fill="none" d="M34.8 135.8s-2-1.3-1.6-6" />
        <Path fill="none" d="M30.2 131.1s2.2-3.5 6.6 0" />
        <Path
          fill="#FFF"
          d="M100.5 61.2C89 61.2 79.7 70.6 79.7 82c0 4.9 1.7 9.4 4.5 12.9 3-.4 13.4-2 16.3-2.6 2.9-.6 10.6-2.4 12.5 6.4 5.1-3.8 8.3-9.8 8.3-16.6 0-11.5-9.3-20.9-20.8-20.9z"
        />
        <Circle fill="#FFF" cx={63} cy={87.7} r={22.4} />
        <Path
          fill="#FFF"
          d="M42.9 178.1c-2.2-.1-6.1.3-8.2 2.9 1.8.7 5.4 1.7 8 2.4.1-.7.2-2.5.2-5.3z"
        />
        <Path
          fill="#FFF"
          d="M42.7 183.5s-3.9-1.1-8-2.4c-4.4 5.5-6 16.2-6.6 23.1 24.8-4.2 34.5 14.3 38.6 24.4l1.1.5s7.8-14.3 17-40.3c-21.9-1-42.1-5.3-42.1-5.3z"
        />
        <Path
          fill="#FFF"
          d="M137.1 220.5c-15.3-3.9-30.3 9.1-36.9 15.9-2.1 2.2-3.4 3.7-3.4 3.8h0l-1.3-.5-8.2-3.2-8.8-3.4-10.6-4.1s0 0 0 0 0 0 0 0 0 0 0 0c.1-.2.5-1.1 1.1-2.5.8-1.8 2-4.5 3.3-7.6 0-.1 0-.1.1-.2 1.1-2.6 2.3-5.4 3.6-8.4 3.8-8.9 7.8-18.3 9-21.6 11 3.6 28.5 21.5 28.5 21.5s1.8-7.6 5.6-17.2c4.3 2.2 7.5 6.3 10.1 10.8 2.4 4.1 4.2 8.6 5.8 12.2.8 1.8 1.5 3.4 2.1 4.5zM110.9 177.6c1.6 7.1 4.3 12.7 8.2 15.4 0 0 2.2-6.8 3.4-12-1.3-3.5-7.4-3.7-11.6-3.4z"
        />
        <Path
          fill="#FFF"
          d="M132.8 200.1c-2-5.4-4.6-15.7-10.3-19.1-1.4 5.1-3.4 12-3.4 12 5.1 3.5 7.6 7.3 8.5 10.9 3.1-.1 6.3-.8 5.2-3.8z"
        />
        <Path
          fill="#FFF"
          d="M166.4 213.4c-1.2-4.1-.1-3.5-4.2-2.3-1.1.3-2.2.7-3.3 1.2-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-.4.2-.8.4-1.3.6-1 .5-2 1.1-2.9 1.6-.1.1-.3.2-.4.2-.3.2-.6.3-.8.5-.4.3-.8.5-1.2.8-.3.2-.5.3-.8.5-.3.2-.5.3-.8.5-.2.2-.5.3-.7.5-.1.1-.2.2-.4.3-3.5 2.5-6.1 4.6-6.1 4.6l-5.6-2.3-2.1-4.5-5.8-12.2h0l-2.2-6.1s2-2 2.8-6.2c44.7 14.2 35.8 18.5 36.6 21.9z"
        />
        <Path
          fill="#FFF"
          d="M132.8 200.1c-2-5.4-4.6-15.7-10.3-19.1-1.4 5.1-3.4 12-3.4 12 5.1 3.5 7.6 7.3 8.5 10.9 3.1-.1 6.3-.8 5.2-3.8z"
        />
        <Path
          fill="#FBD801"
          d="M201.6 271.3c1.9-13.2-1.4-36.9-38.9-60.4-.1 0-.3.1-.4.1-1.1.3-2.2.7-3.3 1.2-.1.1-.3.1-.4.2-.1.1-.3.1-.4.2-.4.2-.8.4-1.3.6-1 .5-2 1.1-2.9 1.6-.1.1-.3.2-.4.2-.3.2-.6.3-.8.5-.4.3-.8.5-1.2.8-.3.2-.5.3-.8.5-.3.2-.5.3-.8.5-.2.2-.5.3-.7.5-.1.1-.2.2-.4.3-3.5 2.5-6.1 4.6-6.1 4.6s15.8 9.1 16.1 17.3c-3.3 3.3-15.5 19.8-21 31.1h63.7z"
        />
        <Path
          fill="#FBD801"
          d="M158.8 240.2c-.2-8.2-16.1-17.3-16.1-17.3l-5.6-2.3c-15.3-3.9-30.3 9.1-36.9 15.9-.7 1.2 1.1-2.4-.5-1.1l-.1-1.7-4-.4-7.1 1.4s.1 3.8-3.7-.6c-1.4-1.7-5-.3-5.2-2-2.5.5-4.2-6.9-6-7.5-7.4-2.2-9.4 9.8-9.5 7.1-15.5 2.2-28.4 23.8-35.9 39.8h109.5c5.6-11.5 17.8-28 21.1-31.3z"
        />
        <Path
          fill="#FFF"
          d="M10.1 271.3h18.2c7.5-16 20.3-37.6 35.9-39.8 1.2-.2 2.5-.2 3.7-.2-.3-.9-.7-1.9-1.2-3-.1-.2-.1-.3-.2-.5s-.1-.3-.2-.5l-.3-.6c0-.1-.1-.1-.1-.2 0 0 0-.1-.1-.1-.6-1.3-1.3-2.7-2-4.2-.1-.1-.1-.3-.2-.4-.1-.2-.2-.3-.3-.5-.2-.3-.4-.6-.6-1-.2-.3-.4-.6-.5-.9-.1-.1-.2-.3-.3-.4-.1-.2-.2-.4-.4-.6-.1-.1-.2-.3-.3-.4-.9-1.4-2-2.8-3.2-4.1-.2-.2-.3-.4-.5-.5l-.7-.7-.3-.3h0l-.2-.2-.5-.5-.5-.5-.5-.5c-.2-.2-.4-.4-.6-.5-.4-.3-.8-.6-1.2-1-.1-.1-.3-.2-.4-.3-.1-.1-.3-.2-.4-.3-.3-.2-.5-.4-.8-.5-.2-.1-.3-.2-.5-.3-.2-.1-.4-.3-.6-.4l-.6-.3s0 0 0 0l-.6-.3c-.1-.1-.3-.2-.4-.2-.2-.1-.5-.2-.7-.4-.1 0-.2-.1-.2-.1-.2-.1-.3-.2-.5-.2h-.1c-.2-.1-.4-.2-.6-.2-.8-.3-1.6-.6-2.4-.8-.5-.1-1-.3-1.4-.4-.2-.1-.4-.1-.7-.2-.1 0-.2 0-.3-.1l-1.5-.3c-.5-.1-1.1-.2-1.6-.2h-.2c-.2 0-.4 0-.6-.1h-2.8c-2.2 0-4.5.2-7 .6C.7 208.8 2 230.8 2 230.8s-.3 21.1 8.1 40.5z"
        />
        <Path
          fill="none"
          d="M27.5 33.7S17.7 17.1 30.2 7s22.9-2.9 22.9-2.9 5.9 4 7.5 8"
        />
        <Path
          fill="none"
          d="M18.9 43.7s-5.7-9.6-6.4-19.4c-.5-7.9 5.8-12.3 8.9-13.9 6.9-3.5 15.3-3.5 22.7 5.1"
        />
      </G>
      <Path
        fill="#FBD801"
        stroke="#000"
        strokeWidth={1.417}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M80.6 226.5h-22s-9.4-1.3-6.3-8.9c3.1-7.6 13.9-8.9 13.9-8.9s19.5-2.6 14.4 17.8z"
      />
      <Path
        fill="#FBD801"
        stroke="#000"
        strokeWidth={1.417}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M94 233.5s-2.8 1.5-6.5 3c-3 1.3-6.7 2.6-10.2 3.2-2.5.5-5.2.9-7.1 1-7 .4-6.5-4.8-6-9.2v0c0-1.1.6-3 1.6-5 0 0 0-.1.1-.1 1.4-2.8 3.7-5.9 6.4-7.5.1-.1.2-.1.3-.2.2-.1.3-.2.5-.3 0 0 .1 0 .1-.1 1.8-.9 4.6-2 7.7-2.2 2.6-.2 5.4.3 7.7 2.2 1.9 1.5 3.4 3.9 4.4 7.7.5 2.1.8 4.6 1 7.5z"
      />
      <Path
        fill="#FBD801"
        stroke="#000"
        strokeWidth={1.417}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M100.3 236.4c-.7 1.2-1.8 2.5-3.4 3.8h0v-1.8l-1.3 1.3-6.1 6.4s-5.5 3.1-10.4-.7c-1.9-1.5-2.7-2.8-2.7-5.5 0-2.6 1.1-5.1 2.3-6.8.3-.5.7-.9 1.1-1.3 2.6-2.4 7.8-6.5 13.2-5.9.7.1 1.4.2 2.1.5 4.7 1.8 7.7 5.6 5.2 10z"
      />
      <Circle cx={108.6} cy={79.8} r={3.4} fill="#000000" />
      <Circle cx={60.6} cy={89.4} r={3.4} fill="#000000" />
    </Svg>
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

const AppContainer = styled.View`
  backgroundcolor: '#00aaff';
  flex: 1;
`;

const App = () => {
  return (
    <AppContainer>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={navTheme}>
        <NavStack />
      </NavigationContainer>
    </AppContainer>
  );
};

export default App;
