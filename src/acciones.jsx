
function cargarMenu(datos) {
  return {
    type: 'CARGAR_MENU',
    menuPrincipal: datos
  }

}

function nuevaNota(item) {
  return {
    type: 'NUEVA_NOTA',
    nota: item
  }
}

function borrarNota(item) {
  return {
    type: 'BORRAR_NOTA',
    fecha: item
  }
}


export default {
  nuevaNota, borrarNota, cargarMenu
}
