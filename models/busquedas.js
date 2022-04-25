const axios = require('axios');

class Busquedas {

    historial = ['Buenos Aires', 'Madrid', 'Montevideo'];

    constructor() {
        //leer DB si existe
    }

    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiYWxhbmJhc3VhbGRvIiwiYSI6ImNsMmY0YXVpZzAydzkzaW8wMWNzaWJrNmgifQ.2ws8pN_Jw4j0IfO49zUaUg',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {

        try {
            //hacer peticion HTTP

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await instance.get();

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