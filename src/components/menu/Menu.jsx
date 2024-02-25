import React, { useState } from 'react'
import generateSign from '../../utils/generateSign'
import Button from '../button/Button'
import styles from './Menu.module.css'
const Menu = ({ signsSetter }) => {
	const [isDisabled, setIsDisabled] = useState(false)
	const startGame = userSign => {
		const computerSign = generateSign()
		signsSetter({
			userSign,
			computerSign,
		})
		setIsDisabled(true)
		setTimeout(() => setIsDisabled(false), 8500)
	}

	return (
		<div className={`${styles.menu} ${isDisabled && styles.menuDisabled}`}>
			<h2>Choose your sign!</h2>
			<div className={styles.buttonsContainer}>
				<Button sign={'paper'} onClick={isDisabled ? () => {} : startGame} />
				<Button sign={'scissors'} onClick={isDisabled ? () => {} : startGame} />
				<Button sign={'rock'} onClick={isDisabled ? () => {} : startGame} />
			</div>
		</div>
	)
}

export default Menu
