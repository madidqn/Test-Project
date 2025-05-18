import styles from './UserCard.module.scss'
import { BiPhone } from 'react-icons/bi'
import { MdMarkEmailUnread, MdLocationOn } from 'react-icons/md'

const UserCard = ({ user, index }) => {
	console.log(user)
	return (
		<section className={styles['user-card']}>
			<span className={styles['user-card__index']}>{index + 1}</span>
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
				<div className={[styles['user-card__info-contact-item']]}>
					<BiPhone />
					<p className={styles['user-card__phone']}>{user.phone}</p>
				</div>
				<div className={[styles['user-card__info-contact-item']]}>
					<MdMarkEmailUnread />
					<p className={styles['user-card__email']}>{user.email}</p>
				</div>
				<div className={[styles['user-card__info-contact-item']]}>
					<MdLocationOn />
					<p className={styles['user-card__location']}>
						{user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}, {user.nat}
					</p>
				</div>
			</div>
		</section>
	)
}

export default UserCard
