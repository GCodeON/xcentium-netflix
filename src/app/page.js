'use client'
import '@/scss/home.scss';

import Slider from '@/components/slider';

export default function Home() {
  
  return (
    <main className="home">
      <section className="hero">
        <div className="content container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
      </section>
      <section className="lists">
        <Slider query="Star Wars"/>
        <Slider query="Avengers"/>
        <Slider query="Harry Potter"/>
      </section>
    </main>
  )
}
