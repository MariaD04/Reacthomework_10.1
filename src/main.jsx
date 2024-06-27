import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './App.css'
import configureStore from './redux/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
)
