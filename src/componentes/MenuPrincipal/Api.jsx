//import fetch from 'isomorphic-fetch';

//const rutaMenuPrincipal = `http://${location.hostname}`;
//console.log(location.hostname)

import datosJson from './menu_principal.json'

const api = {menu: datosJson};

/*
const api = {
    menu: {
        getLista: async function () {
            return await fetch(`${rutaMenuPrincipal}/menu_principal.php`, {
                mode: 'no-cors'
            })
                .then((response) => {
                    return response.json();
                }).catch((err) => {
                    console.log(err);
                    return 'error'
                })
        },
    }
};
*/

export default api;
