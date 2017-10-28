import React, { Component } from 'react'
import { connect } from 'react-redux'
import './estilo.css'
import {plantilla} from './plantilla'

class Contenido extends Component {
  render() {
    return (
      <div className="ListadoCompletoVentas">
        <div style={plantilla.titulo}>Listado Completo de Ventas</div>
        <div className="div2" style={plantilla.div234} >
          div 1
        </div>
        <div className="div3" style={plantilla.div234}>
          div 2
        </div>
        <div className="div4" style={plantilla.div234}>
          div 3
        </div>
        <div>Desktop Web</div>
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

const ListadoCompletoVentas = <Conectado />

export default ListadoCompletoVentas
