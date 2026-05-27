function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop>
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Explore the Solar System</h1>
        <p>Discover the planets, their distances, and the mysteries of our universe.</p>
        <button className="hero-btn" onClick={() => document.getElementById('planets').scrollIntoView({ behavior: 'smooth' })}>
          Explore the Data
        </button>
        <button className="hero-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;