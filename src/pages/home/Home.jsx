import Container from '../../components/container/Container'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<Container>
			<div className={styles.home}>
				<h2 className={styles.home__title}>Welcome to the Home Page</h2>
				<section className={styles['hero-box']}>
					<img src='/job.jpg' alt='image job' className={styles['hero-box__image']} />
					<p className={styles['hero-box__paragraph']}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis a eligendi soluta, saepe ut maxime distinctio velit suscipit porro ab
						vero adipisci repudiandae eaque facere, esse sunt ipsa, numquam minus!
					</p>
				</section>
			</div>
		</Container>
	)
}

export default Home
