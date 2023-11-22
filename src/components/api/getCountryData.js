/** @format */

import axios from "axios";
export const getCountryData = async (country) => {
	const response = await axios.get(
		`https://bounsebackend-production.up.railway.app/country/${country}`
	);
	return response;
};
