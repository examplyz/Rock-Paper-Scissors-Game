import React from 'react'
import images from '../../images'

const FieldSign = ({ sign, classes }) => {
	return (
		<div className={`field-sign ${classes}`}>
			{sign !== 'draw' ? (
				<img src={images[sign]} width={'150px'} height={'150px'} alt={sign} />
			) : (
				<h4 style={{ fontSize: '60px' }}>X</h4>
			)}
		</div>
	)
}

export default FieldSign
