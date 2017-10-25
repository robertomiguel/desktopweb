import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class InputTexto extends Component {
  getValidationState = () => {
        if (typeof this.props.min === 'undefined' || this.props.min === null) return 'success'
        const length = this.props.value.length;
        if (length > this.props.min) return 'success';
        return 'error'
  }
  render() {
    return (
      <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>{this.props.titulo}</ControlLabel>
          <FormControl
            type="text"
            value={this.props.value}
            placeholder="Enter text"
            onChange={this.props.onChange}
            name={this.props.name}
            min={this.props.min}
            style={{'border-bottom':'solid 3px !important'}}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.props.info}</HelpBlock>
        </FormGroup>
    )
  }
}

export default InputTexto
