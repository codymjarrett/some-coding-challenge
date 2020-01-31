import React from 'react'

import Header from '../Header/Header'

const Layout: React.FC = ({ children }) => (
	<div className="layout">
		<Header />
		{children}
	</div>
)

export default Layout
