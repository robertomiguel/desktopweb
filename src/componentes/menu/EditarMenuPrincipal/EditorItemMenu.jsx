import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { Cancelar, Modificar } from '../../globales/Botones'
import Checkbox from 'material-ui/Checkbox';
import {Glyphicon} from 'react-bootstrap'

class EditorItemMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }
actualizaItem = (props) => {
    let item = {
      id: props.id,
      directorio: props.directorio,
      nombre: props.nombre,
      icon: props.icon,
      href: props.href,
      visible: props.visible,
      indice: props.indice,
      eliminar: props.eliminar||false,
      nuevo: props.nuevo,
    }
    this.setState({item: item, itemOrig: Object.assign({},item)})

  }
  componentDidMount() {
    this.actualizaItem(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props!==nextProps) {
      this.actualizaItem(nextProps)
    }
  }

  editarTexto = (a) => {
    let item = this.state.item
    item[a.target.name] = a.target.value
    this.setState({item:item})
  }

  accion = (e) => {
    if (JSON.stringify(this.state.item)===JSON.stringify(this.state.itemOrig))
    {this.props.accion('cancelar')} else
    { let cambios = this.cambios(this.state.item, this.state.itemOrig)
      console.log(cambios);
      this.props.accion(e, cambios, this.state.item.indice)}
  }

  cambios = (item, itemOrig) => {
    var cambios = {}
    var c = ''
    for(let key in item) {
      if (item[key]!==itemOrig[key]) {
        c = JSON.parse(`{ "${key}" : "${item[key]}" }`)
        cambios = Object.assign(cambios, c)
      }
    }
    return cambios
  }

  render() {
    return (
      <div>
        <span>ID: {this.props.id}</span><br />

        <TextField
            value={this.state.item.directorio ||''}
            floatingLabelText="Contenedor ID"
            onChange={this.editarTexto}
            name="directorio"
            fullWidth={true}
        />
        <TextField
            value={this.state.item.nombre ||''}
            floatingLabelText="Nombre"
            onChange={this.editarTexto}
            name="nombre"
        />
        {this.state.item.href!=='+' &&
          <TextField
              value={this.state.item.icon ||''}
              floatingLabelText="Icono"
              onChange={this.editarTexto}
              name="icon"
          />}
        {this.state.item.href!=='+' &&
          <TextField
              value={this.state.item.href ||''}
              floatingLabelText="Acción"
              onChange={this.editarTexto}
              name="href"
          />
        }
        <TextField
            value={this.state.item.visible ||''}
            floatingLabelText="Visible"
            onChange={this.editarTexto}
            name="visible"
        />
        <Checkbox
          label={<span><Glyphicon glyph="trash"/> Eliminar</span>}
          style={{width:'200px'}}
          checked={this.state.item.eliminar||false}
          onCheck={(o,e)=>{this.setState({item: Object.assign(this.state.item,{eliminar:e}) })}}
          labelPosition="left"
        />

        <hr />
        <Cancelar accion={this.accion} />
        <Modificar accion={this.accion} />
      </div>
    )
  }
}

export default EditorItemMenu
