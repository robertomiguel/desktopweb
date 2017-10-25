// function leerMenu(item) {
//   return {
//     type: 'LEER_MENU',
//     item: item
//   }
// }

function leerNotas(item) {
  return {
    type: 'LEER_NOTAS',
    nota: item
  }
}

function borrarNotas(item) {
  return {
    type: 'BORRAR_NOTAS',
    nota: item
  }
}

export default {
  leerNotas, borrarNotas
}
