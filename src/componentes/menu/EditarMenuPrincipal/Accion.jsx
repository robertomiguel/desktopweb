import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap'

class Accion extends Component {
  ejecutar = () => {
    let datos = {...this.props}
    this.props.accion(datos, 'editar')
  }
  render(){
    return(
        <li>
          <span>
            <Glyphicon glyph={this.props.icon} />
            {' '}
          </span>
          <span
            className={this.props.eliminar ? "nombre-accion-editor borrado" : "nombre-accion-editor" }
            onDoubleClick={this.ejecutar}
          >
            {this.props.nombre}{' '}({this.props.id})
        </span>
        </li>
    )
  }
}

export default Accion;
