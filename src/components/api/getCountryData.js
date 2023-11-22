/** @format */

import axios from "axios";

//Fetching Data From Backend API
export const getCountryData = async (country) => {
	const response = await axios.get(
		`https://bounsebackend-production.up.railway.app/country/${country}`
	);
	return response;
};
