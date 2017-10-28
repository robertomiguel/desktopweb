import React, { Component } from 'react'
import { connect } from 'react-redux'
import './estilo.css'
import {plantilla} from './plantilla'

class Contenido extends Component {
  render() {
    return (
      <div className="nombre_accion">
        <div style={plantilla.titulo}>Configurar Cliente</div>
        <div className="div2" style={plantilla.div234} >
          div 1
        </div>
        <div className="div3" style={plantilla.div234}>
          div 2
        </div>
        <div className="div4" style={plantilla.div234}>
          div 3
        </div>
        <div>Configurar Cliente</div>
      </div>
    )
  }
}

function mapStateToProps(estado) {
  return {
    nota: estado.nota
  }
}

const Conectado = connect(mapStateToProps)(Contenido)

const nombre_accion = <Conectado />

export default nombre_accion
