import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import Store from './store'
let storeInstance = Store()

render(
  <Provider store={storeInstance}>
    <App />
  </Provider>
  , document.getElementById('root')
)
