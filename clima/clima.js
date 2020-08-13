const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6089b21bd5fe06f41e4b68923ed8108a&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}