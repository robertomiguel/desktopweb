import React, { Component } from 'react'
import { connect } from 'react-redux'
import './estilo.css'
import {plantilla} from './plantilla'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import TablaDetalle from './tablaDetalle'

import {getValorDeCuotaFija, getAmortizacion, periodo, tasa_tipo} from './frances'

    class Contenido extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valores: {
                monto: 1180000,
                cuotas: 6,
                tasa: 9.5,
                tasa_tipo: 'anual',
                periodo: 'semestral',
            },
            listado: [],
            totales: {},
        }
    }


    calcular = () => {
        console.log(getValorDeCuotaFija(
            this.state.valores.monto,
            this.state.valores.tasa,
            this.state.valores.cuotas,
            this.state.valores.periodo,
            this.state.valores.tasa_tipo))
    //function getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo) {
        const lista = getAmortizacion(
            this.state.valores.monto,
            this.state.valores.tasa,
            this.state.valores.cuotas,
            this.state.valores.periodo,
            this.state.valores.tasa_tipo)
        this.setState({listado:lista.listado})
    }

  render() {
    return (
      <div className="nombre_accion">
        <div style={plantilla.titulo}>Configurar Cliente</div>
        <div className="div2" style={plantilla.div234} >
          div 1
        </div>
        <div className="div3" style={plantilla.div234}>
            <TextField  floatingLabelText='MONTO'
                        value={this.state.valores.monto}/>
            <TextField  floatingLabelText='TASA'
                        value={this.state.valores.tasa}/>
            <TextField  floatingLabelText='CUOTAS'
                         value={this.state.valores.cuotas}/>
            <SelectField value={this.state.valores.tasa_tipo}
                            floatingLabelText='TIPO DE TASA'>
                {tasa_tipo.map((t,i)=>
                    <MenuItem key={i} value={t} primaryText={t}/>
                )}
            </SelectField>
            <SelectField value={this.state.valores.periodo}
                            floatingLabelText='PERIODO'>
                {periodo.map((p, i)=>
                    <MenuItem key={i} value={p} primaryText={p}/>
                )}
            </SelectField>
            <RaisedButton   label='Calcular'
                            onClick={this.calcular}/>

        </div>
        <div className="div4" style={plantilla.div234}>
            <TablaDetalle listado={this.state.listado}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(estado) {
  return {
    nota: estado.nota
  }
}

const Conectado = connect(mapStateToProps)(Contenido)

const nombre_accion = <Conectado />

export default nombre_accion
