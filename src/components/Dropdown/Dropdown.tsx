import React, { ChangeEvent, useContext } from 'react'
import { MovieContext } from '../../context/context'

type DropdownProps = {
	sortMovies: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ sortMovies }) => {
	const { state } = useContext(MovieContext)

	let content: any

	if (state === 'error' || (state.length && state.length < 1)) {
		content = null
	} else if (state.length > 0) {
		content = (
			<div className="dropdown">
				<div className="dropdown__content">
					<p className="dropdown__content-title">Sort:</p>
					<div className="select-wrapper">
						<select
							onChange={(ev: ChangeEvent<HTMLSelectElement>): void =>
								sortMovies(ev.target.value)
							}
						>
							<option value="ASC">Ascending</option>
							<option value="DSC">Descending</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
	return <div>{content}</div>
}

export default Dropdown
