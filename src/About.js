import React from 'react'
import "./about.css"
import image from "./assets/bhel.png"

function About() {
  return (
		  <div className="container">
			  <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h4>Bharat Heavy Electricals Limited is an Indian central public sector undertaking.</h4>
            <p> 
Bharat Heavy Electricals Limited (BHEL) established in the mid fifties (1956) is the largest engineering and manufacturing enterprise in India in the energy–related/infrastructure sector, today. BHEL was established more than 40 years ago, ushering in the indigenous Heavy Electrical Equipment industry in India – a dream that has been more than realized with a well–recognized track record of performance. The company has been earning profits continuously since 1971–72 and paying dividends since 1976–77.</p>
            <div className="button">
              <a href="https://en.wikipedia.org/wiki/Bharat_Heavy_Electricals_Limited">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="image-section">
          <img src={image} alt="Image" />
        </div>
      </div>
  )
}

export default About