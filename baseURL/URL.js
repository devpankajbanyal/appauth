import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { error } from '../Redux/Actions/authAuctions';

const instance = axios.create({
	baseURL: '',
	headers: {
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use(
	async config => {
		try {
			const token = await AsyncStorage.getItem('token');
			if (token) {
				config.headers.authorization = `Bearer ${token}`;
			}

			return config;
		} catch (error) {}
	},
	err => {
		return Promise.reject(err);
	}
);

export default instance;
