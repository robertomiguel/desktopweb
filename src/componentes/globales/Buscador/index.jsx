import React, { Component } from 'react'
import api from './api'
import AutoComplete from 'material-ui/AutoComplete';

class Buscador extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buscar: '',
      resultado: [],
      cache: [],
      buscando: -1,
    }
    this.dataSourceConfig = {
      text: 'buscar',
      value: 'id',
    }
    this.buscar = this.buscar.bind(this)
  }

  async buscar(buscar = []) {
    if (buscar.length<3) return;
    // let res = []
    // if (buscar.length>1) {
    //   let cache = this.state.cache.filter(f=>f.buscar===buscar)|| []
    //   console.log(cache[0].res)
    //   if (cache.length>0) {
    //     res = cache[0].res
    //   } else {
    //     res = await api.consulta.conectar({buscar:buscar}, this.props.ruta)
    //     this.state.cache.push({buscar:buscar,res:res})
    //   }
    // }
    let res = await api.consulta.conectar({buscar:buscar}, this.props.ruta)
    this.state.cache.push({buscar:buscar,res:res})

    this.setState({
      buscar: buscar,
      resultado: res,
    })
  }

  seleccion(a) {
    console.log(a);
    //this.props.seleccion
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText={this.props.titulo}
          hintText={this.props.hint}
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

export default Buscador
