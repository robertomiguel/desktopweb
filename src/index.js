import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App'
//import Buscador from './componentes/globales/Buscador'
//import ServerGo from './componentes/_pruebas/ServerGo'

import store from './store'
import './index.css'

injectTapEventPlugin()

//<ServerGo />
// <div>
// <Buscador ruta='socios.php' titulo="Socio" hint="Apellido, Nombre" /><br />
// <Buscador ruta='localidad.php' titulo="Localidad" hint="CP, Localidad" /><br />
// <Buscador ruta='afip.php' titulo="Afip" hint="CUIT, Denominación" /><br />
// </div>
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
