import React, { useState } from 'react';

const App = () => {
	const [temperatureValue, setTemperatureValue] = useState(0);
	const [temperatureColor, setTemperatureColor] = useState("cold");

	const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
	
		if(newTemperature >= 25){
			setTemperatureColor("hot");
		}

		if(newTemperature <= 30){
			setTemperatureValue(newTemperature);	
		} else {
			alert("Essa é a temperatura máxima!");
		}
	}

	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;

		if(newTemperature < 25){
			setTemperatureColor("cold");
		}

		if(newTemperature >= 0){
			setTemperatureValue(newTemperature);
		} else {
			alert("Essa é a menor temperatura!");
		}
	}

	return(
		<div className="app-container">
			<div className="temperature-display-container">
				<div className={`temperature-display ${temperatureColor}`}>
					{temperatureValue}°C
				</div>	
			</div>
			<div className="button-container">
				<button onClick={() => increaseTemperature()}>+</button>
				<button onClick={() => decreaseTemperature()}>-</button>
			</div>
		</div>
	)
}

export default App;

