const server = `http://${location.hostname}`

const api = {
  consulta: {
          async conectar(json, ruta) {
                  const datos = await fetch(`${server}/${ruta}`, {
                                method: 'POST',  // GET, POST, PUT, etc.
                                mode: 'no-cords',
                                body: JSON.stringify(json)
                              })
                                .then((response) => {
                                  const data  = response.json();
                                  return data
                                }).catch((err) => {
                                  console.log(err)
                                  return {buscar:'error', id:'0'}
                                });
                  return datos
          },
      }
}

export default api
