import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { mockData } from '../../../mock-data/mock-data'

import TopCard from '../TopCard'

afterEach(cleanup)

it('<TopCard/>', () => {
	const { container, debug } = render(<TopCard movie={mockData} />)
	expect(container.firstChild).toMatchSnapshot()
	debug()
})
