import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <section id="home">
      <div className="home_content">
        <h1 className="home_heading">Build <span>ReactJS</span> <br />Website</h1>
        <p className="home_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maiores. Expedita, at voluptatem? Alias eum dolorum inventore, facilis voluptate perspiciatis!</p>
        <button className="btn">Buy Now</button>
      </div>
    </section>
  )
}

export default Home