import React, { Component } from 'react'

class ServerGo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: [],
    }
  }
  async componentDidMount() {
    let datos = await fetch('http://localhost:8888/graphql')
    //datos = datos.json()
    this.setState({
      datos: datos,
    })
  }
  render() {
    return (
      <div>
        {this.state.datos.map((m,i)=>
          <div key={i}>
            id: {m.id} - Nombre: {m.nombre} - DNI: {m.dni}
          </div>
        )}
      </div>
    )
  }
}

export default ServerGo
