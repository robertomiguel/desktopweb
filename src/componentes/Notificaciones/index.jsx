import React, { Component } from 'react';
import { connect } from 'react-redux'
import NotaNotif from '../globales/NotaNotif'
//import acciones from '../../acciones'

class Notificaciones extends Component {
  cerrar = (id) => {
    this.props.cerrar(id)
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        {this.props.nota.map((m,i)=>
          <NotaNotif
            titulo={m.titulo}
            texto={m.texto}
            key={`noti-id-${i}`}
            notaID={i}
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
