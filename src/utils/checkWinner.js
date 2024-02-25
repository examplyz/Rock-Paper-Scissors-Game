import winCombinations from '../winCombinations.js'

export function checkWinner(setCounter, signs, setWinner, clear) {
	let winner = winCombinations[`${signs.userSign}-${signs.computerSign}`]
	if (winner === undefined) {
		winner = winCombinations[`${signs.computerSign}-${signs.userSign}`]
	}
	if (winner === 0) {
		setTimeout(() => {
			setWinner('draw')
		}, 4000)
		setTimeout(() => {
			setCounter(counter => ({
				...counter,
				draws: counter.draws + 1,
			}))
			clear()
		}, 7000)
	}
	if (winner === signs.userSign) {
		setTimeout(() => {
			setWinner(signs.userSign)
		}, 4000)
		setTimeout(() => {
			setCounter(counter => ({
				...counter,
				userWins: counter.userWins + 1,
			}))
			clear()
		}, 7000)
	}
	if (winner === signs.computerSign) {
		setTimeout(() => {
			setWinner(signs.computerSign)
		}, 4000)
		setTimeout(() => {
			setCounter(counter => ({
				...counter,
				computerWins: counter.computerWins + 1,
			}))
			clear()
		}, 7000)
	}
}
