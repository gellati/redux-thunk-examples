import React from 'react'
import { render } from 'react-dom'
// import './index.css'
import App from './components/App'
import users from './reducers/reducers'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(users, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
