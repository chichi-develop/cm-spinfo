import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducerMdmms from './reducerMdmms';

export const history = createBrowserHistory();

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['mdmms'],
};

const mdmmsPersistConfig = {
  key: 'mdmms',
  storage,
  whitelist: ['searchHistory'],
};

const rootReducer = combineReducers({
  mdmms: persistReducer(mdmmsPersistConfig, reducerMdmms),
  router: connectRouter(history),
});

export default persistReducer(rootPersistConfig, rootReducer);
