import React, { Component } from 'react'
import Contenedor from './Contenedor'
import Accion from './Accion'

// import './estilo.css'

class CargarMenu extends Component {
  render() {
    let raiz = this.props.menu.filter(f=>f.directorio==='9999');
    let subDirs = (id) => {
      let sd = this.props.menu.filter(f=>f.directorio===id)
      if (sd.length<1) return
      return (
        <ul>
          {sd.map(m=>
            <span key={m.id}>
              {m.href!=='+' ? <Accion
                {...m}
                accion={this.props.accion}
            /> :
              <Contenedor {...m} sub={subDirs(m.id)}
                accion={this.props.accion}
                clase="nombre-contenedor-editor" /> }
            </span>
        )}
        </ul>
      )
    }

    return (
      <div>
        <ul>
          {raiz.map( m =>
            <span key={m.id}>
              {m.href!=='+' ? <Accion nombre={m.nombre} /> :
              <Contenedor {...m} sub={subDirs(m.id)}
                accion={this.props.accion}
                clase="nombre-modulo-editor" /> }
            </span>
          )}
        </ul>
      </div>
    )
  }
}

export default CargarMenu

/*

estado:
href:
icon:
id:
nombre:
visible:

*/
