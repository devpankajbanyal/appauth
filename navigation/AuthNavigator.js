import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

const Authnavigator = () => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName="Login">
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default Authnavigator;
