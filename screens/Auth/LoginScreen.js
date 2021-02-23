import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/Actions/authAuctions';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const auth = useSelector(state => state.auth);

	const SubmitHandler = () => {
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) || !password) {
			if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
				setEmailError('Please Provide valid Email');
			}
			if (!password) {
				setPasswordError('Password is required');
			}
		} else {
			dispatch(login({ email, password }));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={{ textAlign: 'center', fontSize: 44 }}>Login</Text>
				<View style={styles.emailContainer}>
					{auth.loginError &&
						<View
							style={{
								marginVertical: 10,
								backgroundColor: 'rgb(232,98,114)',
								padding: 10,
								borderRadius: 20
							}}
						>
							<Text style={{ textAlign: 'center', color: 'white' }}>
								{auth.loginError}
							</Text>
						</View>}
					<Input
						style={{
							paddingLeft: 10
						}}
						placeholder="Email..."
						onChangeText={email => {
							setEmailError('');
							setEmail(email);
						}}
						value={email}
						label="Email"
						leftIcon={() => {
							return <Entypo name="email" size={24} color="black" />;
						}}
						errorMessage={emailError ? emailError : null}
					/>
				</View>
				<View style={styles.passwordContainer}>
					<Input
						style={{
							paddingLeft: 10
						}}
						placeholder="Password"
						onChangeText={password => {
							setPasswordError('');
							setPassword(password);
						}}
						value={password}
						label="Password..."
						leftIcon={() => {
							return <Feather name="lock" size={24} color="black" />;
						}}
						errorMessage={passwordError ? passwordError : null}
					/>
				</View>
				<TouchableOpacity
					onPress={() => {
						SubmitHandler();
					}}
					style={{
						backgroundColor: 'rgb(95,169,224)',
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						padding: 10
					}}
					activeOpacity={0.8}
				>
					<Text style={{ color: 'black', alignItems: 'center', fontSize: 22, fontWeight: 'bold' }}>
						Login
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={() => {
						navigation.navigate('Register');
					}}
				>
					<Text style={{ color: 'blue', paddingTop: 10 }}>Don't Have an Account,Create Account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	formContainer: {
		width: wp('70%')
	},
	emailContainer: {},
	passwordContainer: {}
});

export default LoginScreen;
