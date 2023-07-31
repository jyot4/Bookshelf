import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <>
      <div className='footer'>
        <h3>Contact</h3>
        <ul>
          <Link to="https://www.linkedin.com/in/jyoti-vyas-901993244/" className='icon'> <LinkedInIcon/></Link><br />
          <Link to="https://github.com/jyot4" className='icon'> <GitHubIcon/></Link>
          <Link to="https://mail.google.com/mail/u/0/#inbox" className='icon'><EmailIcon/></Link>



          {/* <li>priya</li> */}
        </ul>

        <h3>About us </h3>
        <p>Our mission at Bookshelf is to create an engaging and inclusive online platform that celebrates the written word and fosters a love for books. We aim to provide a vibrant community where book enthusiasts can come together, discover new literary treasures, and engage in meaningful discussions. Through thoughtful book recommendations, insightful reviews, and interactive features, we strive to guide readers on their literary journeys, expand their horizons, and inspire a lifelong passion for reading.</p>

<h5><CopyrightIcon/> Bookshelf. All Right Reserved</h5>



      </div>

    </>
  )
}

export default Footer
