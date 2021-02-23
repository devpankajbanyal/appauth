import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducers';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));
