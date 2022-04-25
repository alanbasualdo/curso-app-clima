const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let option;

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                await busquedas.ciudad(lugar)
                //Buscar los lugares

                //Seleccionar lugar

                //Clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green)
                console.log('Ciudad: ', )
                console.log('Lat: ', )
                console.log('Lng: ', )
                console.log('Temperatura: ', )
                console.log('Mínima: ', )
                console.log('Máxima: ', )

                await pausa()
                break;
            case 2:
                console.log({ option })
                await pausa()
                break;
            case 3:

                break;
        }

    } while (option !== 0);

}

main();