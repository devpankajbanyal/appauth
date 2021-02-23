import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';

const RootNavigator = () => {
	const auth = useSelector(state => state.auth);

	if (auth.isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ActivityIndicator size="large" color="black" />
			</View>
		);
	}

	return (
		<NavigationContainer>
			{auth.isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default RootNavigator;
