const estadoInicial = {
    menuPrincipal: [],
    nota: [],
}

function reducer(estado = estadoInicial, accion = {}) {
    switch (accion.type) {

        case 'CARGAR_MENU':
            return Object.assign({}, estado, {menuPrincipal: accion.menuPrincipal})

        case 'NUEVA_NOTA':
            let d = new Date()
            accion.nota.fecha = d.getTime()
            return Object.assign({}, estado, {
                nota: estado.nota.concat(Object.assign({},accion.nota))
                    .sort((a,b) => a.fecha<b.fecha )
            })

        case 'BORRAR_NOTA':
            return Object.assign({}, estado, {
                nota: estado.nota.filter(f=>f.fecha!==accion.fecha)

            })

        default:
            return estado;
    }
}

export default reducer
