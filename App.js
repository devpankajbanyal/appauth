import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
				<Provider store={store}>
					<RootNavigator />
				</Provider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
