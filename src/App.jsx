import React, {Component} from 'react';
import {connect} from 'react-redux'
import Ventanas from './componentes/Ventanas'
import Drawer from 'material-ui/Drawer'
import MenuPrincipal from './componentes/MenuPrincipal'
import Notificaciones from './componentes/Notificaciones'
import acciones from './acciones'
import BarraPrincipal from './componentes/BarraPrincipal'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ventanas: [],
            activa: 0,
            open: false,
            openNotif: false,
        }
    }

    abrirVentana = (datos) => {
        this.props.dispatch(
            acciones.nuevaNota({
                titulo: datos.contenido,
                texto:  datos.titulo,
                })
        );
        let index = -1
        this.state.ventanas.forEach((m, i) => {
            if (m.id === datos.id) {
                index = i;
                this.setState({activa: i})
            }
        });
        if (index > -1) return
        this.setState({
            ventanas: this.state.ventanas.concat(datos),
            open: false,
            activa: this.state.ventanas.length,
        })
    }

    activarVentana = (id) => {
        this.setState({
            activa: id,
        })
    }

    cerrarVentana = () => {
        let nuevo = this.state.ventanas
        nuevo.splice(this.state.activa, 1)
        this.setState({
            ventanas: nuevo,
            activa: 0,
        })
    }

    abrirCerrarMenu = () => {
        this.setState({open: !this.props.estadoMenu})
    }

    estado = () => {
        this.setState({open: false})
    }

    abrirCerrarNotif = () => {
        this.setState({openNotif: !this.props.openNotif})
    }

    cerrarNotaNotif = (fecha) => {
        //let nota = this.props.nota
        //nota.splice(id, 1)
        this.props.dispatch(
            acciones.borrarNota(fecha)
        )
    }

    render() {

        return (

            <div>
                <section>

                    <BarraPrincipal
                        activa={this.state.activa}
                        ventanas={this.state.ventanas}
                        cerrarVentana={this.cerrarVentana}
                        abrirCerrarNotif={this.abrirCerrarNotif}
                        abrirCerrarMenu={this.abrirCerrarMenu}
                        activarVentana={this.activarVentana}
                        notificaciones={this.props.nota.length}
                    />
                    {/* Menu Principal */}
                    <Drawer
                        docked={false}
                        width={350}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        containerStyle={{background: 'rgba(0, 188, 212, 0.7)'}}
                    >
                        <MenuPrincipal accion={this.abrirVentana} estado={this.estado}/>
                    </Drawer>

                    {/* Panel Notificaciones */}
                    <Drawer
                        docked={false}
                        width={300}
                        open={this.state.openNotif}
                        onRequestChange={() => this.setState({openNotif: !this.state.openNotif})}
                        openSecondary={true}
                        containerStyle={{background: 'rgba(0, 188, 212, 0.7)'}}
                    >
                        <Notificaciones cerrar={this.cerrarNotaNotif}/>
                    </Drawer>

                </section>
                <section>
                    <Ventanas
                        ventanas={this.state.ventanas}
                        activa={this.state.activa}
                        activarVentana={this.activarVentana}
                        verTabs={this.state.verTabs}
                    />
                </section>
            </div>

        )
    }
}

function mapStateToProps(estado) {
    return {
        nota: estado.nota,
    }
}

export default connect(mapStateToProps)(App)
