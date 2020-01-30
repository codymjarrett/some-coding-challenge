import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../Layout'

afterEach(cleanup)

it('renders', () => {
	const { asFragment } = render(
		<Router>
			<Layout />
		</Router>
	)
	expect(asFragment()).toMatchSnapshot()
})
