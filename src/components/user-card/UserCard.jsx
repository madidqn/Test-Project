import styles from './UserCard.module.scss'

const UserCard = ({ user }) => {
	console.log(user)
	return (
		<section className={styles['user-card']}>
			<div className={styles['user-card__info-person']}>
				<img className={styles['user-card__image']} src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
				<p>
					<h6 className={styles['user-card__name']}>
						{user.name.first} {user.name.last}
					</h6>
					<p className={styles['user-card__gender']}>{user.gender}</p>
				</p>
			</div>
			<div className={styles['user-card__info-contact']}>
				<p className={styles['user-card__phone']}>{user.phone}</p>
				<p className={styles['user-card__email']}>{user.email}</p>
				<p className={styles['user-card__location']}>
					{user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}, {user.nat}
				</p>
			</div>
		</section>
	)
}

export default UserCard
