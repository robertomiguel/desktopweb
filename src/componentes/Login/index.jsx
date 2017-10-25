import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


class Login extends Component {
  render() {
    return (
      <div style={{display:'block'}}>
        <TextField
          hintText='Contraseña'
          fullWidth={true}
        />
        <FlatButton label="Acceder" style={{float:'right'}} />
      </div>
    )
  }
}

export default Login
