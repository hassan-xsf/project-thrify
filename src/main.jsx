import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { userStore } from './store/userStore.js'
import { Router } from './router/Router.jsx'
import {App} from './components/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {userStore}>
    <Router>
      <App/>
    </Router>
  </Provider>,
)
