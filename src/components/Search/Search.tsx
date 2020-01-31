import React, { useContext, useState, ChangeEvent, MouseEvent } from 'react'
import { PARTIAL_MATCH, RESET } from '../../constants'
import { MovieContext } from '../../context/context'
import movieDataService from '../../services/movieDataService'

const Search: React.FC = () => {
	const { dispatch } = useContext(MovieContext)
	const [input, setInput] = useState('')

	const handleOnChange = (ev: ChangeEvent<HTMLInputElement>): void => {
		let substring = ev.currentTarget.value.toLowerCase()
		setInput(substring)
	}

	const handleSearch = (ev: MouseEvent) => {
		dispatch({
			type: PARTIAL_MATCH,
			substring: input,
		})
		setInput('')
	}
	const handleReset = (ev: MouseEvent): void => {
		resetState()
	}

	const fetchMovieService = (): any => {
		return movieDataService.get()
	}

	const resetState = (): void => {
		const initialState = fetchMovieService()
		initialState.then((data: []) => {
			setInput('')
			if (Array.isArray(data)) {
				dispatch({
					type: RESET,
					payload: data,
				})
			}
		})
	}

	return (
		<div className="search">
			<div className="search__search-bar">
				<input
					placeholder="search for movie..."
					type="text"
					value={input}
					onChange={handleOnChange}
				/>
			</div>
			<div className="search__buttons">
				<button
					className="search__button button"
					type="button"
					onClick={handleSearch}
				>
					Search
				</button>
				<button
					className="search__button button"
					type="button"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Search
