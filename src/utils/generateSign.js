const signs = {
	0: 'rock',
	1: 'paper',
	2: 'scissors',
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

export default function generateSign() {
	const sign = randomNumber(0, 2)
	return signs[sign]
}
