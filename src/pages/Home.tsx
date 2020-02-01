import React, { useContext, useEffect } from 'react'
import { DESCEND, ASCEND } from '../constants'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Dropdown from '../components/Dropdown/Dropdown'
import Search from '../components/Search/Search'

import { MovieContext } from '../context/context'

const Home: React.FC = () => {
	const { state, dispatch } = useContext(MovieContext)

	useEffect(() => {}, [state])

	const sortMovies = (option: string): void => {
		if (option === 'ASC') {
			dispatch({
				type: ASCEND,
			})
		} else if (option === 'DSC') {
			dispatch({
				type: DESCEND,
			})
		}
	}

	let content: any

	if (state === 'error') {
		content = (
			<div className="error">
				<span
					role="img"
					aria-label="crying face emoji"
					className="crying-face-emoji emoji"
				>
					😩
				</span>
				<p className="error__message">
					Welp! Looks like your vacay is ruined...
				</p>
			</div>
		)
	} else if (state.length > 0) {
		//change type
		content = state.map((movie: any, index: number) => (
			<Card key={index} id={index} movie={movie} />
		))
	} else {
		content = <div className="loading">LOADING...</div>
	}

	return (
		<Layout>
			<div className="main-wrapper">
				<Search />
				<Dropdown sortMovies={sortMovies} />
				{content}
			</div>
		</Layout>
	)
}

export default Home
