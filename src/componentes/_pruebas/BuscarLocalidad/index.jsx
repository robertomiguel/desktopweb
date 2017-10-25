import React, { Component } from 'react'
import api from './api'
import AutoComplete from 'material-ui/AutoComplete';

class BuscarLocalidad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buscar: '',
      resultado: [],
    }
    this.dataSourceConfig = {
      text: 'buscar',
      value: 'localidadId',
    }
    this.buscar = this.buscar.bind(this)
  }


  async buscar(texto) {
    let buscar = texto
    let res = []
    if (buscar.length>1){
      res = await api.consulta.conectar({buscar:buscar})
    }
    this.setState({
      buscar: buscar,
      resultado: res,
    })
  }

  seleccion(a,b) {
    console.log(a);
    console.log(b);
  }

  render() {
    return (
      <div>
        <h3>Buscar por localidad</h3>
        <AutoComplete
          hintText="CP, Localidad"
          dataSource={this.state.resultado}
          onUpdateInput={this.buscar}
          filter={AutoComplete.noFilter}
          dataSourceConfig={this.dataSourceConfig}
          onNewRequest={this.seleccion}
          fullWidth={true}
        />
        {/* <input type="text" onChange={this.buscar} />
        { this.state.resultado.map((m,i)=>
          <div key={`key-${i}`}>
            {m.localidadNombre}
            {' '}
            {m.localidadCp}
          </div>
        ) } */}
      </div>
    )
  }
}

export default BuscarLocalidad
