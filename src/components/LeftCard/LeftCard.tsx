import React from 'react'

export interface LeftCardInputProps {
	movie: any
}

const LeftCard: React.SFC<LeftCardInputProps> = ({ movie }) => (
	<div className="leftCard">
		{movie.actors.length > 0 ? (
			<div className="leftCard__content">
				<p className="detail-highlight">Actors</p>
				{movie.actors.map((actor: any, index: number) => (
					<p className="leftCard__detail" key={index}>
						{actor}
					</p>
				))}
			</div>
		) : null}
		{movie.director ? (
			<div className="leftCard__content">
				<p className="detail-highlight">Director</p>
				<p className="leftCard__detail">{movie.director}</p>
			</div>
		) : null}

		{movie.writer ? (
			<div className="leftCard__content">
				<p className="detail-highlight">
					Writer{movie.writer.split(',').length > 1 ? 's' : ''}
				</p>
				{movie.writer.split(',').map((writer: any, index: number) => (
					<p className="leftCard__detail" key={index}>
						{writer}
					</p>
				))}{' '}
			</div>
		) : null}
	</div>
)

export default LeftCard
