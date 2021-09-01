import styles from './styles.module.scss'

export function Book() {
  return (
    <main className={styles.container}>
      <span>Easy and Fast</span>
      <section className={styles.description}>
        <h1>Book your next trip in 3 easy steps!</h1>
        <div>
          <img src="/images/choose.svg" alt="Choose destination" />
          <h2>Choose destination</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>

        <div>
          <img src="/images/make.svg" alt="Make payment" />
          <h2>Make payment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>

        <div>
          <img src="/images/reach.svg" alt="Reach Airport" />
          <h2>Reach Airport on selected date</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </section>
    </main>
  )
}