const axios = require('axios');

const getClima = async (lat, lon) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6a5f6059d597ccc00263e658c9ab8b44&units=metric`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}
