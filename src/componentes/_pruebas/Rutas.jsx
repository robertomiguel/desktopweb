import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Lista from './Lista';
import ActionIcon from './ActionIcon';
import {Icon, IconTabla } from './Icon';
import Ventana from './Ventana';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-statess`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class Rutas extends Component {
  constructor(props) {
    super(props)
    this.state={
      texto:'',
    }
    this.retorno = this.retorno.bind(this);
  }
  retorno(x) {
    this.setState({texto:x});
  }
  render() {
    this.nombre = "account_balance_wallet";
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/"><Icon texto="Home" indice={80} /></Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/lista">Lista</Link></li>
            <li><Link to="/iconos">Iconos SVG</Link></li>
            <li><Link to="/iconosf">Iconos FONT</Link></li>
            <li><Link to="/ventana">Ventana</Link></li>
            <li>
              <input type="text" value={this.state.texto} />
              <Ventana cerrar={this.retorno} />
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/lista" component={Lista}/>
          <Route path="/iconos" component={ActionIcon}/>
          <Route path="/iconosf" component={IconTabla}/>
          <Route path="/ventana" render={() => <Ventana />} />
        </div>
      </Router>
    )
  }
}

export default Rutas;
