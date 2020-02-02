import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../Layout'

afterEach(cleanup)

test('<Layout />', () => {
	const { container, debug } = render(
		<Router>
			<Layout />
		</Router>
	)
	expect(container.firstChild).toMatchSnapshot()
})
