import React from 'react';
import { Link } from 'react-router-dom';

function App() {
	return (
		<header className="flex mt-10 ml-48 mr-48 items-center justify-between basis-full">
			<h2 className="text-3xl font-bold">Evan <span className="text-blue-500">LaHurd</span></h2>
			<div className="space-x-12 decoration-2 underline-offset-8 decoration-blue-500">
				<Link className="hover:underline" to="/">Home</Link>
				<Link className="hover:underline" to="/resume">Resume</Link>
				<Link className="hover:underline" to="/portfolio">Portfolio</Link>
				<Link className="hover:underline" to="/blog">Blog</Link>
			</div>
		</header>
	);
}

export default App;
