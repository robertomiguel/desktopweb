import React, { Component } from 'react';
import Lista from './Lista'

class A extends Component{
  render(){
    return <h1>Hello! I'm A</h1>
  }
}

// class B extends Component{
//   render(){
//     return <h1>Hello! I'm B</h1>
//   }
// }

const map = {
  A, //equal to A: A
  Lista, //equal to B: B
}

class TextoAcomp extends Component{
  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
    this.state = {
      component: 'A'
    }
  }
  onChange(e){
    this.setState({
      component: e.target.value
    })
  }

  render(){
    const Component = map[this.state.component || 'A']
    return <div>
      <select onChange={this.onChange} selected={this.state.component}>
        <option value="A">A</option>
        <option value="Lista">B</option>
      </select>
     <Component/>
    </div>
  }
}

export default TextoAcomp;
