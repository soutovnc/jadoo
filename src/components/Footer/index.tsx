import styles from './styles.module.scss'

export function Footer() {
  return (
    <main className={styles.container}>
      <section className={styles.footerBox}>
        <div className={styles.firstColumn}>
          <h1>Jadoo.</h1>
          <p>Book your trip in minute, get full <br /> Control for much longer.</p>
        </div>

        <div className={styles.secondColumn}>
          <h1>Company</h1>
          <a>About</a>
          <a>Careers</a>
          <a>Mobile</a>
        </div>
        
        <div className={styles.thirdColumn}>
          <h1>Contact</h1>
          <a>Help/FAQ</a>
          <a>Press</a>
          <a>Affiliates</a>
        </div>
        
        <div className={styles.fourthColumn}>
          <h1>More</h1>
          <a>Airlinefees</a>
          <a>Airline</a>
          <a>Low fare tips</a>
        </div>

      </section>
    </main>
  )
}