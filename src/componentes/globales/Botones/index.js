import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

class Boton extends Component {
  click = () => { this.props.accion(this.props.respuesta) }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph={this.props.icono} /> {this.props.texto}
    </Button>
)}}

class Aceptar extends Component {
  click = () => { this.props.accion('aceptar') }
  render() { return (
    <Button onClick={this.click} style={{'float':'right'}} >
      <Glyphicon glyph="ok-circle" /> Aceptar
    </Button>
)}}

class Cancelar extends Component {
  click = () => { this.props.accion('cancelar') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="remove-circle" /> Cancelar
    </Button>
)}}

class Eliminar extends Component {
  click = () => { this.props.accion('eliminar') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="trash" /> Eliminar
    </Button>
)}}

class Modificar extends Component {
  click = () => { this.props.accion('modificar') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="pencil" /> Modificar
    </Button>
)}}

class NuevoContenedor extends Component {
  click = () => { this.props.accion('nuevoContenedor') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="folder-close" /> Nuevo Contenedor
    </Button>
)}}

class NuevaAccion extends Component {
  click = () => { this.props.accion('nuevaAccion') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="send" /> Nueva Acción
    </Button>
)}}

class Imprimir extends Component {
  click = () => { this.props.accion('imprimir') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="print" /> Imprimir
    </Button>
)}}

class Grabar extends Component {
  click = () => { this.props.accion('grabar') }
  render() { return (
    <Button onClick={this.click} >
      <Glyphicon glyph="floppy-disk" /> Grabar
    </Button>
)}}

export {
  Boton, Aceptar, Cancelar, Imprimir,
  NuevaAccion, NuevoContenedor, Modificar,
  Eliminar, Grabar
}
