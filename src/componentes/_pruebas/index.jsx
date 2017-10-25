import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { MemoryRouter, Redirect  } from 'react-router'
import { IconTabla } from '../_pruebas/Icon'
import Lista from '../_pruebas/Lista';
class Cargar extends Component {
  render() {
    return(
      <MemoryRouter>


      <div>
          <h1>{this.props.contenido}</h1>
            <Redirect to={this.props.contenido} />
            <Route path="/configurar-clientes" component={Lista}/>
            <Route path="/editar-menu-principal" component={this.props.componente}/>
            <Route path="/eliminar-cliente" component={IconTabla}/>
      </div>

    </MemoryRouter>
    )
  }
}

export default Cargar;
