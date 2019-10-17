import React from 'react';
import GameMode from './GameMode';
import Difficulty from './Difficulty';
import Categories from './Categories';
import GameType from './GameType';
import Players from './Players';

const Menu = () => {
	return (
		<div>
			<GameMode />
			<Difficulty />
			<Categories />
			<GameType />
			<Players />
			<button>Start</button>
		</div>
	);
};

export default Menu;
