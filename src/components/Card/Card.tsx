import React, { useEffect } from 'react'
import TopCard from '../TopCard/TopCard'
import LeftCard from '../LeftCard/LeftCard'
import RightCard from '../RightCard/RightCard'
import { Link } from 'react-router-dom'

export interface CardInputProps {
	movie: any
	id: number
}

const Card: React.FC<CardInputProps> = ({ movie, id }) => {
	useEffect(() => {}, [movie])
	return (
		<div className="card">
			<div className="card__wrapper">
				<div className="card__title-wrapper">
					<h2 className="card__title">{movie.title}</h2>
					<button className="checklist checklist-position">
						{movie.locations.length > 0 ? (
							<Link to={`/locations/${id}`}>
								<span>Location</span>
								<span>Checklist</span>
							</Link>
						) : null}
					</button>
				</div>
				<div className="card__detail">
					<TopCard movie={movie} />
					<LeftCard movie={movie} />
					<RightCard movie={movie} />
				</div>
			</div>
		</div>
	)
}

export default Card
