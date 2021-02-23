import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/Main/HomeScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default MainNavigator;
