import React, { useContext, useState, ChangeEvent, MouseEvent } from 'react'
import { PARTIAL_MATCH, RESET } from '../../constants'
import { MovieContext } from '../../context/context'
import movieDataService from '../../services/movieDataService'
import { MovieValueInterface } from '../../context/context'

const Search: React.FC = () => {
	const { dispatch } = useContext<MovieValueInterface>(MovieContext)
	const [input, setInput] = useState<string>('')

	const handleOnChange = (ev: ChangeEvent<HTMLInputElement>): void => {
		setInput(ev.currentTarget.value.toLowerCase())
	}

	const handleReset = (ev: MouseEvent): void => {
		resetState()
	}

	const fetchMovieService = (): any => {
		return movieDataService.get()
	}

	const resetState = (): void => {
		fetchMovieService().then((data: []) => {
			setInput('')
			if (Array.isArray(data)) {
				dispatch({
					type: RESET,
					payload: data,
				})
			}
		})
	}

	const handleSearch = (ev: MouseEvent): void => {
		fetchMovieService().then((data: []) => {
			setInput('')
			if (Array.isArray(data)) {
				const filteredSearch = data
					.slice(0)
					.filter((movie: any) => movie.title.toLowerCase().includes(input))
				dispatch({
					type: PARTIAL_MATCH,
					payload: filteredSearch,
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
