import {combineReducers} from "redux"

const estadoInicial = {
    menuPrincipal: [],
    nota: [],
}

function notaReducer(estado = estadoInicial.nota, accion = {}) {

    switch (accion.type) {
        case 'NUEVA_NOTA':
            let d = new Date()
            accion.nota.fecha = d.getTime()
            return estado.concat(Object.assign({}, accion.nota))
                .sort((a, b) => a.fecha < b.fecha)

        case 'BORRAR_NOTA':
            return estado.filter(f => f.fecha !== accion.fecha)

        default:
            return estado;
    }
}

function menuReducer(estado = estadoInicial.menuPrincipal, accion = {}) {
    switch (accion.type) {

        case 'CARGAR_MENU':
            return accion.menuPrincipal

        default:
            return estado;
    }
}

const reducer = combineReducers({
    nota: notaReducer,
    menuPrincipal: menuReducer,
})

export default reducer
