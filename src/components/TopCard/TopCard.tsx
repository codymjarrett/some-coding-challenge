import React from 'react'

export interface TopCardInputProps {
	movie: any
}

const TopCard: React.SFC<TopCardInputProps> = ({ movie }) => (
	<div className="topCard">
		{movie.fun_facts ? (
			<div className="topCard__content">
				<p className="detail-highlight">Fun Fact</p>
				<p className="topCard__detail"> {movie.fun_facts}</p>
			</div>
		) : null}
		{movie.production_company ? (
			<div className="topCard__content">
				<p className="detail-highlight">Production Company</p>{' '}
				<p className="topCard__detail">{movie.production_company}</p>
			</div>
		) : null}
		{movie.distributor ? (
			<div className="topCard__content">
				<p className="detail-highlight">Distributor</p>{' '}
				<p className="topCard__detail">{movie.distributor}</p>
			</div>
		) : null}
	</div>
)

export default TopCard
