import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap'

class Accion extends Component {
  constructor(props){
    super(props)
      this.ejecutar = this.ejecutar.bind(this)
  }
  ejecutar() {
    let datos = {
      titulo: this.props.nombre,
      contenido: this.props.href,
      icon: this.props.icon,
      id: this.props.id,}
    this.props.accion(datos)
    this.props.estado()
  }
  render(){
    return(
        <li>
          <span>
            <Glyphicon glyph={this.props.icon} />
            {' '}
          </span>
          <span className="nombre-accion" onClick={this.ejecutar}>
            {this.props.nombre}
        </span>
        </li>
    )
  }
}

export default Accion;
