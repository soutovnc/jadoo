import { FiNavigation } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Destination() {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <span>Top Selling</span>
        <h1>Top Destinations</h1>
      </div>
      <section className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/rome.png" alt="Rome, Italy" />
          <div className={styles.info}>
            <h4>Rome, Italy</h4>
            <p>$ 5,42k</p>
            <span>
              <FiNavigation />
              10 Days trip
            </span>
          </div>
        </div>
        
      </section>
    </main>
  )
}