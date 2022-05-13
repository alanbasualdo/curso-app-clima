const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
require('dotenv').config()

const main = async () => {

    const busquedas = new Busquedas();

    let option;

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ')
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino)
                //Seleccionar lugar
                const id = await listarLugares(lugares)
                if (id === 0) continue;
                const lugarSel = lugares.find(l => l.id === id)
                busquedas.agregarHistorial(lugarSel.nombre)
                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)
                //Mostrar resultados
                console.clear()
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad: ', lugarSel.nombre.yellow)
                console.log('Lat: ', lugarSel.lat)
                console.log('Lng: ', lugarSel.lng)
                console.log('Temperatura: ', clima.temp)
                console.log('Mínima: ', clima.min)
                console.log('Máxima: ', clima.max)
                console.log('Cómo está el clima: ', clima.desc.yellow)

                await pausa()
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`)
                })
                await pausa()
                break;
            case 3:

                break;
        }

    } while (option !== 0);

}

main();