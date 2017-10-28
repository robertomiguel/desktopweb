import React, { Component } from 'react';
import { connect } from 'react-redux'
import NotaNotif from '../globales/NotaNotif'
//import acciones from '../../acciones'

class Notificaciones extends Component {
  cerrar = (fecha) => {
    this.props.cerrar(fecha)
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        {this.props.nota.map((m,i)=>
          <NotaNotif
              {...m}

            key={`noti-id-${i}`}
            cerrar={this.cerrar}
      />
        )}
      </div>
    )
  }
}

function mapStateToProps(estado) {
  return {
    nota: estado.nota
  }
}

export default connect(mapStateToProps)(Notificaciones)
