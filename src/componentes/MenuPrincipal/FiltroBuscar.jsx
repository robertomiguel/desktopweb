import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class FiltroBuscar extends Component {
    constructor(props){
        super(props)
        this.state = {
            datos: {},
            textoBuscar: '',
        }
    }

    componentWillReceiveProps() {
        this.setState({datos: this.props.datos.filter(f=>f.href!=='+')})
    }

    seleccion = (datos,indice)=>{
        if (indice < 0 ) return
        let infoVentana = {
            titulo: datos.nombre,
            contenido: datos.href,
            icon: datos.icon,
            id: datos.id,}
        this.setState({textoBuscar:''})
        this.props.accion(infoVentana)
        this.props.estado()
    }

    actualiza = (texto) => {
        this.setState({textoBuscar:texto})
    }

    render(){
        return(
            <div>
                {this.state.datos.length>0 && <AutoComplete
                    searchText={this.state.textoBuscar}
                    onUpdateInput={this.actualiza}
                    floatingLabelText="Buscar..."
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.state.datos}
                    dataSourceConfig={{text: 'nombre', value: 'href'}}
                    maxSearchResults={5}
                    fullWidth={true}
                    onNewRequest={this.seleccion}
                />}
            </div>
        )
    }
}

export default FiltroBuscar