import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'

class NotaNotif extends Component {
  cerrar = () => {
    this.props.cerrar(this.props.notaID)
  }
  render() {
    return (
      <div className="nota-notif">
        <div className="nota-notif-cerrar" onClick={this.cerrar}><Glyphicon glyph="remove-circle" /></div>
        <div className="nota-notif-titulo">{this.props.titulo}</div>
        <div className="nota-notif-texto">
            {this.props.texto}
        </div>
      </div>
    )
  }
}

export default NotaNotif
