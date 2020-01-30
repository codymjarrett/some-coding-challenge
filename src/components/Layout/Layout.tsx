import React from 'react'

import Header from '../Header/Header'

interface ChildrenProps {
	children: any
}

const Layout: React.FC<ChildrenProps> = ({ children }) => (
	<div className="layout">
		<Header />
		{children}
	</div>
)

export default Layout
