document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const width = 8;
	const squares = [];

	// Create Board
	const createBoard = () => {
		for (let i = 0; i < width * width; i++) {
			const square = document.createElement('div');
			grid.appendChild(square);
			squares.push(square);
		}
	};
});
