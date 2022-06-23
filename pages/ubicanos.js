import Head from 'next/head'
import Image from 'next/image'



import Header from '../components/layout/header.jsx'

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <>
    <Header/>
    <main className={styles.home} >
    
      <section className={styles.welcome}>
        <h1 className={styles.title}>
          Encuentranos en
        </h1>

      </section>

      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7897424297375!2d-74.17899109999999!3d4.6315656999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9dd6586b8bff%3A0x7f2b2858372a5fe2!2sM%C3%8DSTER%20JOE%20-%20BOSA%20BRASIL!5e0!3m2!1ses!2sco!4v1656013311275!5m2!1ses!2sco" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

        
    </main>
    
    </>
  )
}
