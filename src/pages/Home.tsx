import React, { useContext, useState, useEffect, ChangeEvent } from 'react'
import { DESCEND, ASCEND } from '../constants'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Dropdown from '../components/Dropdown/Dropdown'
import Search from '../components/Search/Search'

import { MovieContext } from '../context/context'

const Home: React.SFC = () => {
	const { state, dispatch } = useContext(MovieContext)

	useEffect(() => {}, [state])

	const sortMovies = (ev: string) => {
		if (ev === 'ASC') {
			dispatch({
				type: ASCEND,
			})
		} else if (ev === 'DSC') {
			dispatch({
				type: DESCEND,
			})
		}
	}

	let content
	if (state === 'error') {
		content = <div>error</div>
	} else if (state.length > 0) {
		content = state.map((movie: any, index: number) => (
			<Card key={index} id={index} movie={movie} />
		))
	} else {
		content = <div>Loading...</div>
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
