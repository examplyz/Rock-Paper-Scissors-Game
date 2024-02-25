import React from 'react'
import images from '../../images'
import styles from './Button.module.css'
const Button = ({ sign, onClick }) => {
	return (
		<div className={styles.button} onClick={() => onClick(sign)}>
			<img src={images[sign]} alt={sign} width={'150px'} height={'150px'} />
		</div>
	)
}

export default Button
