import Types from '../types'

interface MovieDataServiceResponseInterface {
	title: string
	release_year: number
	locations: string
	fun_facts: string
	production_company: string
	distributor: string
	director: string
	writer: string
	actor_1: string
	actor_2: string
	actor_3: string
}
class MovieDataService {
	// https://dev.socrata.com/foundry/data.sfgov.org/yitu-d5am

	handleErrorResponse(response: any) {
		if (!response.ok) {
			throw Error(response.statusText)
		}
		return response
	}
	async get() {
		return await fetch(
			'https://data.sfgov.org/resource/yitu-d5am.json?$limit=100',
			{
				headers: { 'X-App-Token': 'BOEjdyaAE7igQWstbEO1Nc72T' },
			}
		)
			.then(this.handleErrorResponse)
			.then(response => response.json())
			.then(data => {
				const movies: Record<string, Types.MovieInterface> = {}

				data.forEach((item: MovieDataServiceResponseInterface) => {
					if (!movies[item.title]) {
						const { actor_1, actor_2, actor_3 } = item
						const actors = [actor_1, actor_2, actor_3].filter(actor => !!actor)
						const locations = !!item.locations ? [item.locations] : []
						movies[item.title] = { ...item, locations, actors }
					} else {
						const locations = movies[item.title].locations
						!!item.locations &&
							!locations.includes(item.locations) &&
							movies[item.title].locations.push(item.locations)
					}
				})
				return Object.values(movies)
			})
			.catch(error => error)
	}
}

const movieDataService = new MovieDataService()

export default movieDataService
