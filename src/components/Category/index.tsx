import styles from './styles.module.scss'

export function Category() {
  return (
    <main className={styles.container}>
      <img src="/images/plus.svg" alt="+" className={styles.plus} />
      <div className={styles.title}>
        <span>Category</span>
        <h1>We Offer Best Services</h1>
      </div>
      <section className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/satellite.png" alt="satellite" />
          <h2>Calculated Weather</h2>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className={styles.active} >
          <img src="/images/plane.png" alt="plane"/>
          <h2>Best Flights</h2>
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
          <img src="images/background-plane.svg" alt="background" className={styles.backPlane} />
        </div>
        <div className={styles.card}>
          <img src="/images/mic.png" alt="microfone" />
          <h2>Local Events</h2>
          <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
        </div>
        <div className={styles.card}>
          <img src="/images/settings.png" alt="settings" />
          <h2>Customization</h2>
          <p>We deliver outsourced aviation services for military customers</p>
        </div>
      </section>
    </main>
  )
}