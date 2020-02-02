import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { mockData } from '../../../mock-data/mock-data'

import RightCard from '../RightCard'

afterEach(cleanup)

it('<RightCard />', () => {
	const { container, debug } = render(<RightCard movie={mockData()} />)
	expect(container.firstChild).toMatchSnapshot()
})
