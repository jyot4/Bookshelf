import React from 'react'
import './About.css'
import image from './img2.jpg'
import image2 from "./imgg.jpg"
// import aboutimg from './aboutimg.jpg'
// import {Link} from "react-router-dom"


function About() {
    return (
        <div className='About'>
            <div className='AboutContent'>

                <h1>"Open the door to infinite worlds of wonder and wisdom on our bookshelf, where every page holds the magic of storytelling."</h1>
                <button>FOR LEARN MORE</button>
                {/* <img src={aboutimg}/> */}
            </div>
            <div className='AboutContent2'>
                <div className='left'>
                    <h2>Welcome To BookShelf!</h2>

                    <p>  a place where the written word takes flight and the beauty of literature unfolds like a vibrant tapestry before your eyes.  Our love for literature goes beyond the simple act of reading; we believe that books have the power to connect, inspire, and transform individuals from all walks of life. </p>
                </div>
                <div className='right'>
                    <img src={image}></img>
                </div>

            </div>

            <div className='Content2'>
                <div className='right'>
                    <img src={image2}></img>
                </div>
                <div className='left'>
                <h3>Mission of Bookshelf</h3>
                <p>Our mission at Bookshelf is to foster a vibrant and inclusive community of readers, celebrating the magic of books and the power of storytelling. We are committed to promoting literary exploration, encouraging thoughtful dialogue, and supporting authors as they share their unique voices with the world.</p>
                </div>
               
            </div>
        </div>
    )
}

export default About
