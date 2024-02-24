import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Router from '../src/Route/Router.jsx'

import { Provider } from 'react-redux'
import { stored } from './Redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={stored}>
    <Router/>
  </Provider>
)
