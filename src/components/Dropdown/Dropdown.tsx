import React, { ChangeEvent } from 'react'

export interface DropdownProps {
	sortMovies: any
}
const Dropdown: React.SFC<DropdownProps> = ({ sortMovies }) => {
	return (
		<div className="dropdown">
			<div className="dropdown__content">
				<p className="dropdown__content-title">Sort</p>
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

export default Dropdown
