export const compararObj = (item, itemOrig) => {
    let cambios = {}
    let c = ''
    for(let key in item) {
    if (item[key]!==itemOrig[key]) {
      c = JSON.parse(`{ "${key}" : "${item[key]}" }`)
      cambios = Object.assign(cambios, c)
    }
  }
  return cambios
}
