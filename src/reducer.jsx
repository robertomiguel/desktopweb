const estadoInicial = {
  menuPrincipal: [],
  nota: [],
}

function reducer (estado = estadoInicial, accion = {}) {
  switch (accion.type) {

    case 'CARGAR_MENU':
      return Object.assign({}, estado, {menuPrincipal: accion.menuPrincipal})

      case 'LEER_NOTAS':
        let d = new Date()
        accion.nota.fecha = d.getTime()
        return Object.assign({}, estado,{
          nota: estado.nota.concat(accion.nota)
                .sort((a,b) => {
                  return a.fecha<b.fecha
                })
        })

      case 'BORRAR_NOTAS':
        return Object.assign({}, estado, {
          nota: accion.nota
        })

    default:
      return estado;
  }
}

export default reducer
