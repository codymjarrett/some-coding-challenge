import React, { createContext, useEffect, useReducer } from 'react'
import movieDataService from '../services/movieDataService'
import { SET_INITIAL_STATE } from '../constants'


// come back to this!!!
export interface MovieValueInterface {
	state: any
	dispatch: any
}

const fetchMovieService: Function = (): any => {
	return movieDataService.get()
}

const initialState = {
	data: null,
}

//change type
const getInitialState: Function = (dispatch: any): void => {
	const initialState = fetchMovieService()
	initialState.then((data: []) => {
		if (Array.isArray(data)) {
			dispatch({
				type: SET_INITIAL_STATE,
				payload: data,
			})
		} else {
			dispatch({
				type: SET_INITIAL_STATE,
				payload: 'error',
			})
		}
	})
}

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'SET_INITIAL_STATE':
			return action.payload
		case 'PARTIAL_MATCH':
			return state
				.slice(0)
				.filter((movie: any) =>
					movie.title.toLowerCase().includes(action.substring)
				)
		case 'DESCEND':
			return state
				.slice(0)
				.sort(
					(a: any, b: any) =>
						parseInt(b.release_year) - parseInt(a.release_year)
				)
		case 'ASCEND':
			return state
				.slice(0)
				.sort(
					(a: any, b: any) =>
						parseInt(a.release_year) - parseInt(b.release_year)
				)
		case 'RESET':
			return action.payload
		default:
			return state
	}
}

export const MovieContext = createContext({} as MovieValueInterface)

const MovieProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		getInitialState(dispatch)
	}, [])

	return (
		<MovieContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</MovieContext.Provider>
	)
}

export default MovieProvider
