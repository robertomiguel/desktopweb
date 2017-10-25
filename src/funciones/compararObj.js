export const compararObj = (item, itemOrig) => {
  var cambios = {}
  var c = ''
  for(let key in item) {
    if (item[key]!==itemOrig[key]) {
      c = JSON.parse(`{ "${key}" : "${item[key]}" }`)
      cambios = Object.assign(cambios, c)
    }
  }
  return cambios
}
