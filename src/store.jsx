import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'


// Middleware
const info = store => next => (accion) => {

    console.group('storeLog')

        // Estado actual del store
        console.debug('Estado actual: ', store.getState())
        console.debug('Accion: ', accion)

        // pasar a la siguiente del Middleware (en este caso al store)
        const resultado = next(accion)
        console.debug('Estado nuevo: ', store.getState())

    console.groupEnd('storeLog')

    return resultado

}


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(info),

));

export default store
