import React, { Component} from 'react';
import {Glyphicon} from 'react-bootstrap'

class Contenedor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expande: false
    }
    this.ver = {display: 'block'}
    this.ocultar = {display: 'none'}
    this.cambiar = this.cambiar.bind(this)
  }
  cambiar() {
    this.setState({
      expande: !this.state.expande
    })
  }
  render(){
    return(
      <li>
        <span>
          <Glyphicon glyph={this.state.expande ? 'folder-open' : 'folder-close'} />
          {' '}
        </span>
        <span className={this.props.clase}
          onClick={this.cambiar}>
          {this.props.nombre}
        </span>
        <div style={this.state.expande ? this.ver : this.ocultar} className="contenedor">
          {this.props.sub}
        </div>
      </li>
    )
  }
}

export default Contenedor;
