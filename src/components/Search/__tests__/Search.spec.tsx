import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import Search from '../Search'

afterEach(cleanup)

test('<Search />', () => {
	const { container, debug, getByText } = render(<Search />)
	expect(container.firstChild).toMatchSnapshot()
})
