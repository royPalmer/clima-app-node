const axios = require('axios');

const getLugarLatLng = async (dir) =>{
	const encodeUlr = encodeURI(dir);

	const instance = axios.create({
	  baseURL: `https://geocode.xyz/${encodeUlr}?json=1`
	});

	const resp = await instance.get();

	if(resp.data.Result.length === 0){
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data = resp.data.Result[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return{
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
