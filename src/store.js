import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducers';
import thunk from 'redux-thunk';

export const ConfigureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}

export default ConfigureStore;