import React, { Component} from 'react';
import {Glyphicon} from 'react-bootstrap'
import Popover from 'material-ui/Popover';

class Contenedor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expande: false,
      open: false,
    }
    this.ver = {display: 'block'}
    this.ocultar = {display: 'none'}
    this.cambiar = this.cambiar.bind(this)
  }

  cambiar() { this.setState({ expande: !this.state.expande })  }

  ejecutar = () => {
    let datos = {...this.props}
    this.props.accion(datos, 'editar')
  }

  nuevoItem = (e) => {
    this.props.accion(this.props.id, e.target.name)
    this.setState({open:false})
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      expande: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render(){
    return(
      <li>
        <span>
          <Glyphicon glyph={this.state.expande ? 'folder-open' : 'folder-close'} />
          {' '}
        </span>
        <span className={this.props.eliminar ? `borrado ${this.props.clase}` : this.props.clase}
              onClick={this.cambiar}
              onDoubleClick={this.ejecutar}
        >
          {this.props.nombre}{' '}({this.props.id})
        </span>
        {!this.props.eliminar &&
          <span onClick={this.handleTouchTap} className="contenedor-opciones-editor" >
            <Glyphicon glyph="plus" />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'right', vertical: 'center'}}
              targetOrigin={{horizontal: 'right', vertical: 'center'}}
              onRequestClose={this.handleRequestClose}
              >
                <button
                  name="nuevoContenedor"
                  onClick={this.nuevoItem}
              >Contenedor</button>
                <button
                  name="nuevaAccion"
                  onClick={this.nuevoItem}
              >Acción</button>
              </Popover>
            </span>
         }
        <div style={this.state.expande ? this.ver : this.ocultar} className="contenedor-editor">
          {this.props.sub}
        </div>
      </li>
    )
  }
}

export default Contenedor;
