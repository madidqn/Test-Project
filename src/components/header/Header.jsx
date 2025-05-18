import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles['header__container-logo']}>
				<h1 className={styles.header__logo}>Jon Hunter</h1>
				<div className={styles['header__container-menu']}>
					<ul className={styles.header__menu}>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? `${styles['header__link--active']} ${styles.header__link}` : styles.header__link)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/profiles'
								className={({ isActive }) => (isActive ? `${styles['header__link--active']} ${styles.header__link}` : styles.header__link)}
							>
								Profiles
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header
