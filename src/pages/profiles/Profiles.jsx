import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '../../components/container/Container'
import UserCard from '../../components/user-card/UserCard'
import styles from './Profiles.module.scss'

const Profiles = () => {
	const [data, setData] = useState([])
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)

	const getUsers = async () => {
		setLoading(true)
		try {
			const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`)
			const data = response.data.results
			setData(prev => [...prev, ...data])
		} catch (error) {
			console.error('Error fetching users:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getUsers(page)
	}, [page])

	const handleScroll = () => {
		const scrollTop = window.scrollY
		const windowHeight = window.innerHeight
		const fullHeight = document.documentElement.scrollHeight

		if (!loading && scrollTop + windowHeight + 200 >= fullHeight) {
			setPage(prev => prev + 1)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [loading])

	return (
		<Container>
			<ul className={styles.profiles}>
				{data.map((user, index) => (
					<UserCard key={index} user={user} index={index} />
				))}
				{loading && <p className={styles.loading}></p>}
			</ul>
		</Container>
	)
}

export default Profiles
