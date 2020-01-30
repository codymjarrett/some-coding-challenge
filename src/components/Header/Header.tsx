import React from 'react'

import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<Link className="header__link" to="/">
						San Fran Movie Fun
					</Link>
				</h1>
			</div>
		</header>
	)
}

export default Header
