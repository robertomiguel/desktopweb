import React, { Component } from 'react'
import { connect } from 'react-redux'
import acciones from '../../../acciones'
import './estilo.css'
import {plantilla} from './plantilla'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class Contenido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nota: {
        titulo: 'Configurar',
        texto: 'texto de la notificación'
      }
    }
  }
  enviar = () => {
    this.props.dispatch(
      acciones.nuevaNota(this.state.nota)
    )
    // this.props.dispatch(
    //   acciones.enviarNota(this.state.nota)
    // )
  }
  editarTexto = (a) => {
    let nota = Object.assign({},this.state.nota)
    nota[a.target.name] = a.target.value
    this.setState({nota:nota})
  }
  render() {
    return (
      <div className="ConfigurarClientes">
        <div style={plantilla.titulo}>Configurar Cliente</div>
        <div className="div2" style={plantilla.div234} >
          <h2>Generar Notificación</h2>
          <TextField
              value={this.state.nota.titulo ||''}
              floatingLabelText="Título"
              onChange={this.editarTexto}
              name="titulo"
          />
          <TextField
              value={this.state.nota.texto ||''}
              floatingLabelText="Texto"
              onChange={this.editarTexto}
              name="texto"
          />
          <FlatButton label="Enviar" onClick={this.enviar} />
        </div>
        <div className="div3" style={plantilla.div234}>
          div 3
        </div>
        <div className="div4" style={plantilla.div234}>
          div 4
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

const ConfigurarClientes = <Conectado />

export default ConfigurarClientes
