import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class VentanaPopUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      abrir: true,
    }
  }

  cerrar = () => {
    this.props.cerrar('cerrado')
  }
    render() {
      return (
          <Modal
             show={this.state.abrir}
             onHide={this.cerrar}

          >
          <Modal.Header closeButton>
             <Modal.Title>{this.props.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {this.props.contenido}
          </Modal.Body>
         </Modal>
      )
  }
}

export default VentanaPopUp
