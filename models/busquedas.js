const axios = require('axios');

class Busquedas {

    historial = ['Buenos Aires', 'Madrid', 'Montevideo'];

    constructor() {
        //leer DB si existe
    }

    async ciudad(lugar = '') {
        //hacer peticion HTTP
        // console.log('Ciudad: ', lugar);

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data)
            return [];
        } catch (error) {
            console.log(error)
            return [];
        }

        return [];
    }

}

module.exports = Busquedas;