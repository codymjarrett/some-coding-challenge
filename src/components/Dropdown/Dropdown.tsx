import React, { ChangeEvent } from 'react'

type DropdownProps = {
	sortMovies: (option: string) => void
	state: any
}

const Dropdown: React.FC<DropdownProps> = ({ state, sortMovies }) => {
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
