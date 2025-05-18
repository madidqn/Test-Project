import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profiles from '../pages/profiles/Profiles'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/profiles' element={<Profiles />} />
		</Routes>
	)
}

export default AppRoutes
