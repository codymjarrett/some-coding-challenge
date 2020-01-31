import React from 'react'

export interface RightCardInputProps {
	// change type

	movie: any
}

const RightCard: React.FC<RightCardInputProps> = ({ movie }) => (
	<div className="rightCard">
		<p className="detail-highlight">
			Location{movie.locations.length > 1 ? 's' : ''}
		</p>
		{movie.locations.length > 0 ? (
			<ul>
				{movie.locations.map((loc: any, index: number) => (
					<li className="rightCard__detail" key={index}>
						{loc}
					</li>
				))}
			</ul>
		) : (
			<p className="rightCard">No disclosed Location</p>
		)}
	</div>
)

export default RightCard
