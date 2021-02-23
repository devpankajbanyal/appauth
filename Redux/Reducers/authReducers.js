import {
	LOG_IN,
	LOG_OUT,
	REDIRECTING,
	ERROR,
	REGISTER,
	REGISTER_ERROR,
	LOGIN_ERROR,
	LOGGED_IN
} from '../constants/types';

const initialState = {
	isLoading: false,
	user: null,
	token: null,
	isAuthenticated: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REDIRECTING:
			return {
				isLoading: true,
				user: null,
				token: null,
				isAuthenticated: false
			};

		case LOGGED_IN:
			return {
				isLoading: false,
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true
			};

		case REGISTER:
			return {
				isLoading: false,
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true
			};
		case LOG_IN:
			return {
				isLoading: false,
				user: action.payload,
				token: action.payload,
				isAuthenticated: true
			};

		case ERROR:
			return {
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false,
				error: action.payload
			};
		case REGISTER_ERROR:
			return {
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false,
				registerError: action.payload
			};
		case LOGIN_ERROR:
			return {
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false,
				loginError: action.payload
			};

		case LOG_OUT:
			return {
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false
			};

		case ERROR: {
			return {
				isLoading: false,
				user: null,
				token: null,
				isAuthenticated: false,
				error: 'something went wrong'
			};
		}
		default:
			return state;
	}
};
