import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { register } from '../../Redux/Actions/authAuctions';

const RegisterScreen = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const auth = useSelector(state => state.auth);

	const SubmitHandler = () => {
		if (
			!username ||
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ||
			!password
		) {
			if (!username) {
				setUsernameError('Username is required');
			}

			if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
				setEmailError('Please Provide valid Email');
			}
			if (!password) {
				setPasswordError('Password is required');
			}
		} else {
			dispatch(register({ username, email, password }));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={{ textAlign: 'center', fontSize: 44 }}>Register</Text>
				{auth.registerError &&
					<View
						style={{
							marginVertical: 10,
							backgroundColor: 'rgb(232,98,114)',
							padding: 10,
							borderRadius: 20
						}}
					>
						<Text style={{ textAlign: 'center', color: 'white' }}>
							{auth.registerError}
						</Text>
					</View>}
				<View style={styles.emailContainer}>
					<Input
						style={{
							paddingLeft: 10
						}}
						placeholder="Username"
						onChangeText={username => {
							setUsernameError('');
							setUsername(username);
						}}
						value={username}
						label="Username"
						leftIcon={() => {
							return <AntDesign name="user" size={24} color="black" />;
						}}
						errorMessage={usernameError ? usernameError : null}
					/>
				</View>
				<View style={styles.emailContainer}>
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
						Register
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						alignItems: 'center',
						justifyContent: 'center'
					}}
					onPress={() => {
						navigation.navigate('Login');
					}}
				>
					<Text style={{ color: 'blue', paddingTop: 10 }}>Alredy Have an Account, Please Login</Text>
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

export default RegisterScreen;
