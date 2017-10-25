import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class BarraPrincipal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selecion: 0,
    }
  }
  selecion = (_, id) => {
    this.props.activarVentana(id)
  }
  render() {
    return (
      <div className="barra-menu" >
        <span className="boton-menu"
          onClick={this.props.abrirCerrarMenu} >
          <Glyphicon glyph="menu-hamburger"/>
        </span>
        {this.props.ventanas.length>0 &&
          <div className="ventana-selector">
            <SelectField
              value={this.props.activa}
              onChange={this.selecion}
              fullWidth={true}
              labelStyle={{color:'white'}}
            >
              {this.props.ventanas.map((m,i)=>
                <MenuItem key={`vsel-${i}`} value={i} primaryText={<span><Glyphicon glyph={m.icon}/> {m.titulo}</span>} />
              )}
            </SelectField>
            <span className="boton-cerrar-ventana" onClick={this.props.cerrarVentana} >
              <Glyphicon glyph="remove-circle" />
            </span>
          </div>
        }
        <span
          className="boton-notif"
          onClick={this.props.abrirCerrarNotif}
        >
          <Glyphicon glyph="exclamation-sign"/>
          {this.props.notificaciones>0 &&
            <span className="notif-cuenta">{this.props.notificaciones}</span>
          }
      </span>
      </div>
    )
  }
}

export default BarraPrincipal
