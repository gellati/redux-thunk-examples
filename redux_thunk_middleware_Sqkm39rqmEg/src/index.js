import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import reducer from './store/reducers/reducer'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
