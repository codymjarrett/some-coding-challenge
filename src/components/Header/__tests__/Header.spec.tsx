import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header'

afterEach(cleanup)

it('<Header />', () => {
	const { container, debug } = render(
		<Router>
			<Header />
		</Router>
	)
	expect(container.firstChild).toMatchSnapshot()
})
