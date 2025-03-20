import { Footer } from "./Footer"
import {useAuth} from '../store/auth';
export const About=()=>{
  const {user}=useAuth();
    return (
        <>
        <section>
            <div className="container grid grid-two-cols">
                <div className="about-text">
                    <p>Welcome {user?`${user.username} to our website`:`to our website`}</p>
                    <h1>Why Choose Us?</h1>
                    <p className="para">Expertise:Our team consists of experienced IT perfessionals who are passionate 
                        about staying up-to-date with the 
                        latest industry trends.</p>
                        <p className="para">
                            Customizaton: We understand that every business in unique.
                            That's why we create solutions that are tailored to your specific needs and goals.
                        </p>
                        <p className="para">
                         Customer-Centric Approach:We prioritize 
                         your satisfaction and provide top-notch 
                         support to address your IT concerns.
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
                <div className="about-image">
                    <img src="/images/about.png" alt="about page" height="400" width="400"/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
        )
}