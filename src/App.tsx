import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MovieProvider from './context/context'

import Home from './pages/Home'
import LocationsPage from './pages/LocationsPage'

const App: React.FC = () => {
	return (
		<MovieProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/locations/:pageId" component={LocationsPage} />
				</Switch>
			</Router>
		</MovieProvider>
	)
}

export default App
