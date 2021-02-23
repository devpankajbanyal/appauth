import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/authAuctions';
const HomeScreen = () => {
	const dispatch = useDispatch();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Button
				title="Logout"
				onPress={() => {
					dispatch(logout());
				}}
			/>
		</View>
	);
};

export default HomeScreen;
