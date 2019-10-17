import React from 'react';

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
