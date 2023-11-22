/** @format */

import React, { useState } from "react";
import { getCountryData } from "../api/getCountryData";
import Iframe from "react-iframe";
import "./Country.css";

function Country() {

	//Handling States For Application
	const [country, setCountry] = useState("");
	const [countryInfo, setCountryInfo] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	//Taking Input 
	const handleInputChange = (e) => {
		setCountry(e.target.value);
		setError(null);
	};

	// Data Loading 
	const handleSubmit = async () => {
		try {
			setLoading(true);
			const response = await getCountryData(country);
			setCountryInfo(response.data);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
		setCountry("");
	};

	return (
		<div id='country-info-app'>
			<h1 id='country-inf-title'>̣̣🗺️ Country Information App 🚀🚀🚀</h1>
			<div>
				<input type='text' value={country} onChange={handleInputChange} />
				<span />
				<button onClick={handleSubmit}>Get Country Info</button>
			</div>
			{loading && <p className='country-info-data'>Loading...</p>}
			{error && (
				<p className='country-info-data country-info-data-error' >
					Error: Country not Found. {console.log(error)}
				</p>
			)}
			{countryInfo && (
				<div className='country-info-data'>
					<h2>
						{countryInfo.name}
						{countryInfo.flag}
					</h2>
					<p>
						Name:{" "}
						<span className='country-info-data-higlight'>
							{countryInfo.officialName}
						</span>
					</p>
					<p>
						Continent:{" "}
						<span className='country-info-data-higlight'>
							{countryInfo.continents}
						</span>
					</p>
					<p>
						Capital:{" "}
						<span className='country-info-data-higlight'>
							{countryInfo.capital}
						</span>
					</p>
					<p>
						Population:{" "}
						<span className='country-info-data-higlight'>
							{countryInfo.population}
						</span>
					</p>
					<div
						className='country-info-data'
						style={{ width: "100%", height: "300px" }}>
						<Iframe
							src={`https://www.google.com/maps/embed/v1/place?q=${countryInfo.name}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
							width='500px'
							height='300px'
							id='myId'
							loading='lazy'
							className='myClassname country-info-data'
							display='initial'
							position='relative'
							target='_parent'
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Country;
