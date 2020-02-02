import React from 'react'
import { render, cleanup } from '@testing-library/react'
import LeftCard from '../LeftCard'

import { mockData } from '../../../mock-data/mock-data'

afterEach(cleanup)

it('<LeftCard/>', () => {
	const { container } = render(<LeftCard movie={mockData()} />)
	expect(container.firstChild).toMatchSnapshot()
})
