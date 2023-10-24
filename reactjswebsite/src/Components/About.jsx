import React from 'react'
import '../Styles/About.css'
import about from '../images/about.png'

const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <div className="left">
          <h1 className="about_heading">Why Choose Us For <br /> Your <span>Bussines</span></h1>
          <p className="about_para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus debitis quo fugiat accusantium perspiciatis nesciunt deserunt veritatis ut quisquam alias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.</p>
          <button className="btn">More details</button>
        </div>
        <div className="right">
          <img src={about} alt="about_img" />
        </div>
      </div>
    </section>
  )
}

export default About