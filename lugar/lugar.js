const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    //console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?auth=776050628946473792774x7057&locate=${encodeUrl}&json=1`,
    });

    // const instance = axios.create({
    //     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    //     headers: {
    //         'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
    //         'x-rapidapi-key': '2f2bdf81f7msh7b52b1ee61cf3c0p108409jsn338f7c8a4f6e',
    //         'useQueryString': true
    //     }
    // });

    const resp = await instance.get();

    if (resp.data.standard.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}