import React, { Component } from 'react'
import * as menuComponentes from '../menu/Menu'

class MenuComp extends Component {
  render() {
    const Comp = menuComponentes[this.props.c] || <h2>No existe:{this.props.c}</h2>
    return <div>{Comp}</div>
  }
}

export default MenuComp
