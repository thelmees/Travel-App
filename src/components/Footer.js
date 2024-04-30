import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>T R  <i className="fa-solid fa-mountain" />V Z</h1>
                <p className='f-para'>Choose your favourite destination.</p>
            </div>
            <div>
                <a href='/'>
                <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href='/'>
                <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href='/'>
                <i class="fa-brands fa-square-behance"></i>
                </a>
                <a href='/'>
                <i class="fa-brands fa-square-twitter"></i>
                </a>
            </div>
        </div>

        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Version</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Tourbleshooting</a>
                <a href='/'>Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href='/'>Terms of Services</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer