import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header'

// test('Header component renders', () => {
// 	const div = document.createElement('div')
//   document.body.appendChild(div)
// 	ReactDOM.render(
//     <Router>
// 			<Header />
// 		</Router>,
// 		div
//     )
//     const link = document.body.querySelector('.header__link')
//     expect(link.textContent).toBe('San Fran Movie Fun')
// })

afterEach(cleanup)

it('renders', () => {
	const { asFragment } = render(
		<Router>
			<Header />
		</Router>
	)
	expect(asFragment()).toMatchSnapshot()
})
