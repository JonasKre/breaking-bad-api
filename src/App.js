import React, { useState } from 'react';
import Header from './components/header.js';
import Form from './components/form.js';
import Card from './components/card.js';
import axios from 'axios';
import './App.scss';

function App() {
	const BASE_URL = 'https://www.breakingbadapi.com/api/characters?name=';

	const [query, setQuery] = useState('');
	const [characters, setCharacters] = useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		getCharacters();
    }

	async function getCharacters() {
		try {
            const response = await axios(`${BASE_URL}${query}`);
            const { data } = response;
			setCharacters(data);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="App">
			<Header />
			<Form handleSubmit={handleSubmit} handleChange={handleChange} />
			<div className="cards">
				{characters.length > 0 &&
                    characters.map((character) => (<Card key={character.char_id} character={character} />))
                }
			</div>
		</div>
	);
}

export default App;
