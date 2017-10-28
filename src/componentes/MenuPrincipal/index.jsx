import React, { Component} from 'react'
import { connect } from 'react-redux'
import Api from './Api'
import Contenedor from './Contenedor'
import Accion from './Accion'
import FiltroBuscar from './FiltroBuscar'

import './estilo.css'
import acciones from "../../acciones"


class MenuPrincipal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cargando: true,
    }
  }

  async componentDidMount() {
    let datos = await Api.menu;
    this.props.dispatch(
        acciones.cargarMenu(datos)
    );
    this.setState({
      cargando: false,
    })
    console.log(`Items Menú Cargados: ${this.props.menuPrincipal.length}`)
  }

  render() {
    let raiz = this.props.menuPrincipal.filter(f=>f.directorio==='9999');

    let subDirs = (id) => {
      let sd = this.props.menuPrincipal.filter(f=>f.directorio===id);
      if (sd.length<1) {
          return;
      }
      return (
        <ul>
          {sd.map(m=>
            <span key={m.id}>
              {m.href!=='+' ? <Accion
                                  {...m}
                                  accion={this.props.accion}
                                  estado={this.props.estado}
                              /> :
              <Contenedor nombre={m.nombre} sub={subDirs(m.id)} clase="nombre-contenedor" /> }
            </span>
        )}
        </ul>
      )
    };

    return (
      <div className="menu_principal">
        <FiltroBuscar   datos={this.props.menuPrincipal}
                        accion={this.props.accion}
                        estado={this.props.estado}
                        autoFocus={true}
                        />
        {this.state.cargando && <div>cargando...</div>}
        {raiz.map( m =>
            <span key={m.id}>
                {m.href!=='+' ? <Accion nombre={m.nombre} /> :
                <Contenedor nombre={m.nombre} sub={subDirs(m.id)} clase="nombre-modulo" /> }
            </span>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(estado) {
  return {
    menuPrincipal: estado.menuPrincipal
  }
}

export default connect(mapStateToProps)(MenuPrincipal)