import React from 'react'
import { Footer } from './Footer'
export const Home=()=> {
  return (
      <>
      <main>
        <section className='section-hero'>
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <div className="para">
                We are the best IT compony
                <h1>Welcome to Shreyash Semwal</h1>
                </div>
                <div className="paragraph">
                <p>
                  Are you ready to take your business to the next level with cutting-edge IT solutions? 
                  Look no further!At Shreyash Semwal,
                  we specialize in providing innovaiton IT services and solutions tailored to meet your unique needs.
                </p>
                </div>
                <div className="btn-group">
                  <a href="/contact">
                    <button className='btn'>connect now</button>
                  </a>
                  <a href="/service">
                  <button className='second'>learn more</button>
                  </a>
                </div>
              </div>
              {/* hero images */}
              <div className="hero-image">
                <img src="/images/home.png" alt="home page" height="500"width="500"/>
              </div>
            </div>
        </section>
      </main>
      <section className='section-analytics'>

        <div className="container grid grid-four-cols">
        
          <div className="div1">
            <h2>50+</h2>
            <p>Registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
           <div className="div1">
            <h2>500+</h2>
            <p>Well known Developers</p>
           </div>
           <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
           </div>
        </div>
      </section>
      <section className='Section-footer'>
        <div className="container grid grid-two-cols">
          <div className="footer-image">
            <img src="/images/design.png" alt="Home page" height="400"width="400"/>
          </div>
          <div className="hero-footer">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>Ready to take the first step towards a more efficient and secure IT infrasturcture?
              Contact us today for a free consultation and lets's discuss how Shreyash Semwal can help your business thrive in digital age.
            </p>
          <div className="footer-btn">
          <a href="/contact">
                    <button className='first'>Contact Now</button>
          </a>
          <a href="/service">
                    <button className='second'>Learn More</button>
                  </a>
          </div>
        </div>
          </div>
      </section>
<Footer/>
      </>
  )
}
