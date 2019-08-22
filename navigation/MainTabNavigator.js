import React from 'react';
import { Platform } from 'react-native';

import {
	createStackNavigator, createBottomTabNavigator,
} from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

// stack navigations
import HomeScreen from './HomeStackNavigator';
import LoginScreen from './LoginStackNavigator';

import { Icon } from 'react-native-elements';

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	}, {
		defaultNavigationOptions: () => ({ header: null }),
	}
);

HomeStack.navigationOptions = ({ navigation }) => {
	var tabBarVisible = false;
	let currentNavigationIndex = navigation.state.routes[0].index;
	let routeName = navigation.state.routes[0].routes[currentNavigationIndex].routeName
	if (routeName == 'HomeScreen') {
		tabBarVisible = true
	}
	return {
		tabBarLabel: 'Home',
		tabBarOptions: {
			activeTintColor: '#000',
		},
		tabBarIcon: ({ focused }) => (
			<Icon name="home" type="feather"
				color={focused ? 'blue' : 'black'} />
		),
		tabBarVisible
	}
};

const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: 'Links',
	tabBarOptions: {
		activeTintColor: '#000',
	},
	tabBarIcon: ({ focused }) => (
		<Icon name="link" focused={focused} type="feather"
			color={focused ? 'blue' : 'black'} />
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarOptions: {
		activeTintColor: '#000',
	},
	tabBarIcon: ({ focused }) => (
		<Icon name="settings" focused={focused} type="feather"
			color={focused ? 'blue' : 'black'} />
	),
};

const LoginStack = createStackNavigator(
	{
		Login: LoginScreen,
	}, {
		defaultNavigationOptions: () => ({ header: null }),
	},
);

LoginStack.navigationOptions = {
	tabBarLabel: 'Login',
	tabBarOptions: {
		activeTintColor: '#000',
	},
	tabBarIcon: ({ focused }) => (
		<Icon name="info" focused={focused} type="feather" color={focused ? 'blue' : 'black'} />
	),
};

export default createBottomTabNavigator({
	HomeStack,
	// LinksStack,
	SettingsStack,
	LoginStack,
});
