import React from 'react'
import FieldSign from '../fieldSign/FieldSign'
import styles from './Field.module.css'
const Field = ({ signs, winnerSign }) => {
	return (
		<>
			{winnerSign ? (
				<div className={`${styles.fieldCol}`}>
					{winnerSign === 'draw' ? (
						<h2>No winner</h2>
					) : (
						<h2>The winner is.....</h2>
					)}
					<FieldSign sign={winnerSign} classes={`${styles.winnerAppearance}`} />
				</div>
			) : (
				<>
					<div
						className={`${styles.field}  ${
							!signs ? styles.fieldAppearance : styles.fieldAppearance2
						}`}
					>
						<FieldSign sign={signs.userSign ? signs.userSign : 'question'} />
						<h3>VS</h3>
						<FieldSign
							sign={signs.computerSign ? signs.computerSign : 'question'}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default Field
