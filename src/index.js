import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
/*
        import openSocket from 'socket.io-client';
        const  socket = openSocket('http://localhost:3001')
        socket.on('connect', function () {
            alert('conectado')
        })

* */
import store from './store'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()