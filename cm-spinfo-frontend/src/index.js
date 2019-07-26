import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import persistReducer from './reducers/index'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/mdmmSaga'
import confirmMiddleware from './common/middleware/confirm'
import './index.css'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, thunk, confirmMiddleware ,sagaMiddleware]

let store = createStore(
  persistReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
let pstore = persistStore(store)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={<p>loading...</p>} persistor={pstore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

export default pstore