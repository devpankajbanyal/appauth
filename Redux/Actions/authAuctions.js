import { REGISTER, ERROR, REDIRECTING, LOG_IN, LOG_OUT, REGISTER_ERROR, LOGIN_ERROR } from '../constants/types';
import URL from '../../baseURL/URL';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const register = formData => async dispatch => {
	try {
		dispatch({
			type: REDIRECTING
		});

		const data = await URL.post('/api/user/register', formData);
		await AsyncStorage.setItem('token', data.data.token);

		dispatch({
			type: REGISTER,
			payload: data.data
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: REGISTER_ERROR,
			payload: error.response.data.message
		});
	}
};

export const login = formData => async dispatch => {
	try {
		dispatch({
			type: REDIRECTING
		});

		const data = await URL.post('/api/user/login', formData);
		await AsyncStorage.setItem('token', data.data.token);

		dispatch({
			type: LOG_IN,
			payload: data.data
		});
	} catch (error) {
		dispatch({
			type: LOGIN_ERROR,
			payload: error.response.data.message
		});
	}
};

export const logout = () => async dispatch => {
	dispatch({
		type: REDIRECTING
	});

	await AsyncStorage.removeItem('token');

	dispatch({
		type: LOG_OUT
	});
};

export const error = () => async dispatch => {
	dispatch({
		type: ERROR
	});
};
