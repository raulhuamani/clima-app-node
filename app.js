const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(-12.2205199, -76.9036562)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        //console.log(direccion);
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion.green} es de ${ colors.yellow(temp) } ºC`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);