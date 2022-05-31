import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className='footer-subscription'>
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="footer-input" 
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              TRVL <i className='fa-brands fa-typo3' />
            </Link>
          </div>
          <small className="website-rights">TRVL &copy; 2020</small>
          <div className="social-icons">
            <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Youtube" className="social-icon-link youtube">
              <i class="fa-brands fa-youtube"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Twitter" className="social-icon-link twitter">
              <i class="fa-brands fa-twitter"></i>
            </Link>
            <Link to="/" target="_blank" aria-label="Linkedin" className="social-icon-link linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer