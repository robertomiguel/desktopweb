
function cargarMenu(datos) {
  return {
    type: 'CARGAR_MENU',
    menuPrincipal: datos,
  }

}

function nuevaNota(item) {
  return {
    type: 'NUEVA_NOTA',
    nota: item,
    meta: {
      socket: {
          channel: 'socketTito',
          namespace: 'ns',
          room: 'recibido',
      },
    },
  }
}

function borrarNota(item) {
  return {
    type: 'BORRAR_NOTA',
    fecha: item,
  }
}

function enviarNota(item) {
    return {
        type: 'ADD_TODOSSSS',
        payload: {message: item},
        meta: {
            socket: {
                channel: 'socketTito',
                namespace: 'ns',
                room: 'recibido',
            },
        },
    }

}

export default {
  nuevaNota, borrarNota, cargarMenu, enviarNota
}
