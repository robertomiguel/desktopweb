import React, {Component} from 'react'
import api from '../../MenuPrincipal/Api'

class Immutable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: [],
    }
  }

  async componentDidMount() {
    let m = await api.menu.getLista()
    this.setState({menu: m.map((k,i)=>Object.assign(k,{key:i}) )})
  }

  cambiar = () => {
    let item = this.state.menu[0]
    item.nombre = 'nuevo nombre'
    this.setState({
      menu: Object.assign(this.state.menu, item)
    })
  }

  render() {

    return (
      <div>
        <ul>
          {this.state.menu.map( (item,i) =>
            <li key={i}>{item.nombre}</li>
          )}
        </ul>
        <button onClick={this.cambiar}>cambiar 39</button>
      </div>
    )
  }

}

export default Immutable
