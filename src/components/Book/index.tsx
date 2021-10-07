import styles from './styles.module.scss'

export function Book() {
  return (
    <main className={styles.container}>
      <div className={styles.textSpan}>Easy and Fast</div>
      <section className={styles.description}>
        <h1>Book your next trip in 3 easy steps!</h1>
        <div className={styles.choose}>
          <img src="/images/choose.svg" alt="Choose destination" />
          <h2>Choose Destination</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>

        <div className={styles.make}>
          <img src="/images/make.svg" alt="Make payment" />
          <h2>Make payment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>

        <div className={styles.reach}>
          <img src="/images/reach.svg" alt="Reach Airport" />
          <h2>Reach Airport on selected date</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
        
      </section>
      <span className={styles.details}>
        <img src="/images/book-card-detail.svg" alt="Card with details" />
        <div className={styles.shadow}>
          <img src="/images/book-card-detail-shadow.svg" alt="Shadow card of details" />
        </div>
      </span>
    </main>
  )
}