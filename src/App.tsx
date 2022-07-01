import React from 'react';
import Navbar from './components/Navbar';
import evan from './img/evan.jpg';

function App() {
	return (
		<div className="flex flex-wrap justify-center">
			<Navbar />
			<div className="flex basis-1/2 mt-10 bg-split-blue-white">
				<img src={evan} alt="Evan LaHurd, the website's owner" className="w-36"></img>
			</div>
		</div>
	);
}

export default App;
