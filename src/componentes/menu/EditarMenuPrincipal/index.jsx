import React, { Component } from 'react'
import { connect } from 'react-redux'
import CargarMenu from './CargarMenu'
import EditorItemMenu from './EditorItemMenu'
// import VentanaPopUp from '../../globales/VentanaPopUp'
import './estilo.css'
import {plantilla} from './plantilla'

class Contenido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cargando: true,
      menu: [],
      editar: false,
      abm: {
        a:[], b:[], m:[],
      },
      itemNuevos: 0,
      itemEliminados: 0,
      itemModificados: 0,
    }
  }

  async componentDidMount() {
    let datos = this.props.menuPrincipal
    let texto = JSON.stringify(datos)
    let nuevo = JSON.parse(texto)
    this.setState({
      menu: nuevo.map((k,i)=>Object.assign(k,{indice:i}) ),
      cargando: false,
    })
  }

  seleccion = (datos, accion) => {
    if (accion!=='editar') {
      let indice=this.state.menu.length
      let tempID = Math.random().toString(36).substr(2,9)
      let directorio = datos
      switch (accion) {
        case 'nuevoContenedor':
          datos = {
            nombre: 'Nuevo contenedor',
            icon: '',
            href: '+',
          }
          break;
        case 'nuevaAccion':
          datos = {
            nombre: 'Nueva Acción',
            icon: 'leaf',
            href: `Accion_${tempID}`,
          }
          break;
        default:
      }
        let attrComun = {
          nuevo: true,
          id: `nuevo-${tempID}`,
          directorio: directorio,
          visible: '1',
          indice: indice,
        }
        datos = Object.assign(datos, attrComun)
        this.setState({
          menu: this.state.menu.concat(Object.assign({}, datos)),
          itemNuevos: this.state.menu.filter(f=>f.nuevo).length + 1
        })
    }

      let item = {
      id: datos.id,
      directorio: datos.directorio,
      nombre: datos.nombre,
      icon: datos.icon,
      href: datos.href,
      visible: datos.visible,
      indice: datos.indice,
      eliminar: datos.eliminar,
      nuevo: datos.nuevo,
    }
    this.setState({
      item: item,
      editar: true,
    })
  }

  nuevoModulo = () => {
    this.seleccion('9999','nuevoContenedor')
  }

  accionModificar = (e, item, indice) => {
    this.setState({editar: false})
    if (e==='cancelar') return
        if(item.eliminar && item.href==='+') {
          let subMenu = this.state.menu
                          .filter(f=>f.directorio===item.id)
                          .filter(f=>!f.eliminar)
          if ( subMenu.length > 0 ) {alert('eliminar sub menu'); return}
        }
        if (item.nuevo && item.eliminar) {
          this.state.menu.splice(indice, 1)
          this.setState({
            menu: this.state.menu.map((k,i)=>Object.assign(k,{indice:i}) ),
            itemEliminados: this.state.menu.filter(f=>f.eliminar).length,
            itemNuevos: this.state.menu.filter(f=>f.nuevo).length
          })

        } else {
          if (!item.nuevo) item = Object.assign(item, {modificar:true})
          let editItem = Object.assign(this.state.menu[indice], item)
          this.setState({
            menu: Object.assign(this.state.menu, editItem),
            itemEliminados: this.state.menu.filter(f=>f.eliminar).length,
            itemModificados: this.state.menu
                                      .filter(f=>f.modificar)
                                      .filter(f=>!f.eliminar).length
          })
        }
  }

  compararObj = (item, itemOrig) => {
    const omitir = "indice,modificar"
    var cambios = {}
    var c = ''
    for(let key in item) {
      if (item[key]!==itemOrig[key] && omitir.indexOf(key)===-1) {
        c = JSON.parse(`{ "${key}" : "${item[key]}" }`)
        cambios = Object.assign(cambios, c)
      }
    }
    return Object.assign(cambios, {id:item.id})
  }

  grabar = () => {
    this.setState ({
      abm: {
        a: this.state.menu.filter(f=>f.nuevo)
                .map(m=> Object.assign( {},
                  {directorio: m.directorio,
                    href: m.href,
                    icon: m.icon,
                    nombre: m.nombre,
                    invisible: m.visible}
                )),
        b: this.state.menu.filter(f=>f.eliminar).map(m=>m.id),
        m: this.state.menu.filter(f=>f.modificar).filter(f=>!f.eliminar)
                          .map(m=> this.compararObj(m, this.props.menuPrincipal[m.indice])),
      }
    })

    console.log(this.state.abm);
  }

  render() {
    return (
      <div className="EditarMenuPrincipal noSel">
        <div style={plantilla.titulo}>Editar Menú Principal</div>
        <div className="div2" style={plantilla.div234} >

          <button onClick={this.nuevoModulo}>Nuevo Módulo +</button>

          <span>
            Nuevos: {this.state.itemNuevos} -
            {' '}
            Eliminados: {this.state.itemEliminados} -
            {' '}
            Modificados: {this.state.itemModificados}
          </span>

          <button onClick={this.grabar}>Grabar</button>

          {this.state.cargando && <div>cargando...</div>}

          <div>
            <CargarMenu menu={this.state.menu} accion={this.seleccion} />
          </div>
        </div>
        <div className="div3" style={plantilla.div234}>
          {this.state.editar &&
            <EditorItemMenu {...this.state.item} accion={this.accionModificar} />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(estado) {
  return {
    nota: estado.nota,
    menuPrincipal: estado.menuPrincipal
  }
}

const Conectado = connect(mapStateToProps)(Contenido)

const EditarMenuPrincipal = <Conectado />

export default EditarMenuPrincipal;
