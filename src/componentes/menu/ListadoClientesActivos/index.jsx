import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ListadoClientesActivos.css'
import {plantilla} from './plantilla'

class Contenido extends Component {
  render() {

    return (
      <div className="ListadoClientesActivos">
        <div style={plantilla.titulo}>Listado Clientes Activos</div>
        <div className="ListadoClientesActivos-div2" style={plantilla.div234} >
          div 2
        </div>
        <div className="ListadoClientesActivos-div3" style={plantilla.div234}>
          div 3
        </div>
        <div className="ListadoClientesActivos-div4" style={plantilla.div234}>
          div 4
        </div>
        <div>Listado Clientes Activos</div>
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

const ListadoClientesActivos = <Conectado />

export default ListadoClientesActivos
