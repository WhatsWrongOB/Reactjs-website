import React from 'react'
import Servicebox from './Servicebox'
import '../Styles/Services.css'
import icon1 from '..//images/icon1.png'
import icon2 from '..//images/icon2.png'
import icon3 from '..//images/icon3.png'

const Serices = () => {
  return (
    <section id="services">
      <div className="service_container">
        <Servicebox image = {icon1} tittle = "Product Analysis"/>
        <Servicebox image = {icon2} tittle = "Website Analysis"/>
        <Servicebox image = {icon3} tittle = "Software Analysis"/>
      </div>
    </section>
  )
}

export default Serices