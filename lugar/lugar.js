const axios = require('axios');

const getLugarLatLng = async (dir) =>{
	const encodeUlr = encodeURI(dir);
	//console.log("palabra seteada", encodeUlr);

	const instance = axios.create({
	  baseURL: `https://geocode.xyz/${encodeUlr}?json=1`
	});

	const resp = await instance.get();

	if(resp.data.alt.length === 0){
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data = resp.data.alt.loc;
	const direccion = data.city;
	const lat = data.latt;
	const lng = data.longt;

	return{
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}
