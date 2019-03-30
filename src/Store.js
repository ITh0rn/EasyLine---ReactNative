import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistStore } from 'redux-persist';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        reducers,
        composeEnhancer(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);

    return { store, persistor };
};

export const { store, persistor } = configureStore();

