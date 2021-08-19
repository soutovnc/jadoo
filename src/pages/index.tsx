import styles from './home.module.scss'


export default function Home() {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>BEST DESTINATIONS AROUND THE WORLD</span>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <a>Find out more</a>
          <button>
            <img src="/images/play.png" alt="play button" />
            Play Demo
          </button>

        </section>
        <img src="/images/girl.png" alt="girl" className={styles.girl} />


        <img src="/images/underline.svg" alt="underline" className="underline" />
        <img src="/images/decore.svg" alt="decore" className="decore" />

      </main>

    </>
  )
}
