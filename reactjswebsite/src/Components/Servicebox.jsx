import React from 'react'
import '../Styles/Services.css'

const Servicebox = ({image,tittle}) => {
    return (
        <div className="service_card">
           <img src={image} alt="img" />
           <h1 className="service_heading">{tittle}</h1>
           <p className="Servive_para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
            <button className="btn">View</button>
        </div>
    )
}

export default Servicebox