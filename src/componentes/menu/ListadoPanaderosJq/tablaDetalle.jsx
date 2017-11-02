import React, {Component} from 'react'
// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
// } from 'material-ui/Table';

class TablaDetalle extends Component {
    render() {
        return (
            <table>
                {this.props.listado.map((v,i)=>
                    <tr key={i}>
                        <td>{v.numero}</td>
                        <td>{v.interes}</td>
                        <td>{v.abono_al_capital}</td>
                        <td>{v.valor_de_cuota}</td>
                        <td>{v.saldo_al_capital}</td>
                    </tr>
                )}
             </table>
        )
    }
}

export default TablaDetalle