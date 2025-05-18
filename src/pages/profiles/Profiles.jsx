import Container from '../../components/container/Container'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserCard from '../../components/user-card/UserCard'
import styles from './Profiles.module.scss'

const Profiles = () => {
	const [data, setData] = useState([])

	const getUsers = async () => {
		try {
			const response = await axios.get('https://randomuser.me/api/?results=10')
			const data = response.data.results
			setData(data)
			console.log(data)
		} catch (error) {
			console.error('Error fetching users:', error)
		}
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<Container>
			<ul className={styles.profiles}>
				{data?.map(user => (
					<li key={user.login.uuid}>
						<UserCard user={user} />
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Profiles
