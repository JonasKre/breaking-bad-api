import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import Form from './components/form.js';
import Card from './components/card.js';
import Loader from './components/loader.js';
import axios from 'axios';
import './App.scss';

function App() {
	const BASE_URL = 'https://www.breakingbadapi.com/api/characters?name=';

	const [query, setQuery] = useState('');
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		getCharacters();
	}

	function handleChange(e) {
		setQuery(e.target.value);
	}

	async function getCharacters() {
		setLoading(true);
		try {
			const response = await axios(`${BASE_URL}${query}`);
			setLoading(false);
			const { data } = response;
			setCharacters(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div className="App">
			{loading && <Loader />}
			<Header />
			<Form handleSubmit={handleSubmit} handleChange={handleChange} />
			<div className="cards">
				{characters.length > 0 &&
					characters.map((character) => (
						<Card key={character.char_id} character={character} />
					))}
			</div>
		</div>
	);
}

export default App;
