import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="jadoo" />
        <nav>
          <a>Destinations</a>
          <a>Hotels</a>
          <a>Flights</a>
          <a>Booking</a>
          <a>Login</a>
          <a className={styles.login} >Sign Up</a>
          <a>EN</a>
        </nav>
      </div>
    </header>
  )
}