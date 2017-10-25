import React, { Component } from 'react'
import api from './api'
import AutoComplete from 'material-ui/AutoComplete';

class BuscarSocio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buscar: '',
      resultado: [],
    }
    this.dataSourceConfig = {
      text: 'buscar',
      value: 'socioId',
    }
    this.buscar = this.buscar.bind(this)
  }

  async buscar(buscar) {
    let res = []
    if (buscar.length>1){
      res = await api.consulta.conectar({buscar:buscar}, 'socios.php')
    }
    this.setState({
      buscar: buscar,
      resultado: res,
    })
  }

  seleccion(a) {
    console.log(a);
  }

  render() {
    return (
      <div>
        <h3>Buscar Socio</h3>
        <AutoComplete
          hintText="Apellido, Nombre"
          dataSource={this.state.resultado}
          onUpdateInput={this.buscar}
          filter={AutoComplete.noFilter}
          dataSourceConfig={this.dataSourceConfig}
          onNewRequest={this.seleccion}
          fullWidth={true}
        />
      </div>
    )
  }
}

export default BuscarSocio
