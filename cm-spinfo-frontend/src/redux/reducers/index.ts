import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import reducerMdmms from './reducerMdmms';
// import reducerAclgs from './reducerAclgs';
import * as Mdmms from './reducerMdmms';
import * as Aclgs from './reducerAclgs';
import * as Urnks from './reducerUrnks';

export const history = createBrowserHistory();

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['mdmms', 'aclgs', 'urnks'],
};

const mdmmsPersistConfig = {
  key: 'mdmms',
  storage,
  whitelist: ['searchHistory'],
};

const aclgsPersistConfig = {
  key: 'aclgs',
  storage,
  whitelist: ['searchHistory'],
};
const urnksPersistConfig = {
  key: 'urnks',
  storage,
  whitelist: ['searchHistory'],
};
const rootReducer = combineReducers({
  mdmms: persistReducer(mdmmsPersistConfig, Mdmms.mdmmsReducer),
  aclgs: persistReducer(aclgsPersistConfig, Aclgs.aclgsReducer),
  urnks: persistReducer(urnksPersistConfig, Urnks.urnksReducer),
  router: connectRouter(history),
});

export const initialState = () => {
  return {
    mdmms: Mdmms.initialState(),
    aclgs: Aclgs.initialState(),
    urnks: Urnks.initialState(),
  };
};

export type StoreState = ReturnType<typeof initialState>;

export default persistReducer(rootPersistConfig, rootReducer);
