import React, { Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class InputText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: '',
    }
    this.handleCambiar = this.handleCambiar.bind(this);
  }
  handleCambiar(event) {
    this.setState({texto: event.target.value});
  }
  render() {
    return (
      <TextField onChange={this.handleCambiar} value={this.state.nombre} hintText={this.props.hintText} />
    )
  }
}

export default class Ventana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nombre: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    try {
      this.props.cerrar(this.nombreInput.getValue());
    } catch (e) {
        return;
    }
  }

  componentDidMount() {
    //this.nombreInput.focus();
    console.log('ventana cargada');
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Seleccionar" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <InputText valor={this.state.nombre} hintText='Nombre' />
          <TextField ref={(input) => this.nombreInput = input } hintText="apellido" />
        </Dialog>
      </div>
    );
  }
}
