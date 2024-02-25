import { useEffect, useState } from 'react'
import Field from './components/field/Field.jsx'
import Menu from './components/menu/Menu.jsx'
import './index.css'
import { checkWinner } from './utils/checkWinner.js'

function App() {
	const [counter, setCounter] = useState({
		userWins: 0,
		computerWins: 0,
		draws: 0,
	})
	const [signs, setSigns] = useState(0)
	const [currentWinner, setCurrentWinner] = useState(0)
	const clear = () => {
		setCurrentWinner(0)
		setSigns(0)
	}
	useEffect(() => {
		if (signs) {
			checkWinner(setCounter, signs, setCurrentWinner, clear)
		}
	}, [signs])
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>USER</th>
						<th>COMPUTER</th>
						<th>DRAWS</th>
					</tr>
					<tr>
						<td>{counter.userWins}</td>
						<td>{counter.computerWins}</td>
						<td>{counter.draws}</td>
					</tr>
				</tbody>
			</table>
			<Field signs={signs} winnerSign={currentWinner} />
			<Menu signsSetter={setSigns} />
		</div>
	)
}

export default App
