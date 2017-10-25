const server = `http://${location.hostname}`

const api = {
  consulta: {
          async conectar(json) {
                  const datos = await fetch(`${server}/localidad.php`, {
                                method: 'POST',  // GET, POST, PUT, etc.
                                mode: 'no-cords',
                                body: JSON.stringify(json)
                              })
                                .then((response) => {
                                  const data  = response.json();
                                  return data
                                }).catch((err) => {
                                  console.log(err)
                                  return 'error'
                                });
                  return datos
          },
      }
}

export default api
