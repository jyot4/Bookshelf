import React from 'react'
import imgwr from './imgwr.jpg'
import imgwr1 from './imgwr1.jpg'
import imgwr2 from './imgwr2.jpg'
import img22 from './img22.png'
import './LearnMore.css'

function LearnMore() {
  return (
    <div className='Learnmore'>
      <div className='Learn'>
      <div className='learn-b'>
          <img className='image1' src={imgwr} alt='hi'/>
          <img className='image2' src={imgwr1} alt='hello' />
          <img className='image3' src={imgwr2}  alt='hey'/>

        </div>

        <div className='learn-a'>
          <h2>Who are we?</h2>
          <p>
            We are a dynamic team of diverse individuals, brought together by our shared love for books and our desire to create a welcoming space for fellow bibliophiles. Our backgrounds span a multitude of professions and interests, from writers and editors to designers and technologists. What unites us is our unwavering dedication to curating a collection of books that reflect the beauty of diversity in literature and the human experience.
          </p>
        </div>
       
      </div>
      <div className='Learn1'>
      <div className='learn-c'>
        <h2>Our Love for Literature</h2>
        <p>At Bookshelf  we are more than just avid readers; we are ardent admirers of the art of storytelling. Our journey into the world of books began with the turning of pages and the discovery of magical universes hidden within words. Through countless narratives, we found solace, knowledge, and a profound connection to the shared human experience.</p>
        </div>
        <div className='learn-d'>
          <img src={img22}/>
        </div>
        
      </div>
      <div className='Learn0'>
      <div className='Learn2'>
        <h2>A Haven for Bibliophiles</h2>
        <p>Our passion for literature led us to create Bookshelf , a haven where bibliophiles can find solace and like-minded individuals to embark on literary voyages together. Whether you seek thrilling adventures, philosophical musings, heartwarming romances, or thought-provoking insights, our meticulously curated collection ensures that you'll find books that captivate and resonate with your soul.</p>


      </div>

      <div className='Learn3'>
        <h2>Discover the Literary Treasures</h2>
        <p>Every book on our virtual shelves has been handpicked with love and care. We believe in the transformative power of reading and its ability to transport readers to new realms, spark imagination, and broaden horizons. Here, you'll discover timeless classics that have shaped the course of human history, alongside contemporary gems that mirror the complexities of our modern lives.</p>

      </div>
      <div className='Learn4'>

        <h2>Building a Community of Readers</h2>
        <p>Books not only inspire solitary introspection but also thrive in the warmth of shared experiences.Bookshelf  is more than just a repository of literary wonders; it is a thriving community of book enthusiasts. Join us in spirited discussions, insightful book clubs, and engaging reading challenges, as we explore the vast landscapes of human imagination and wisdom together.</p>

      </div>
      <div className='Learn5'>
        <h2>Author Empowerment and Appreciation</h2>
        <p>Behind every remarkable book lies the dedication and creativity of talented authors. We consider it our privilege to support and celebrate these literary artisans, from established maestros to emerging voices. Through our author spotlights, interviews, and features, we illuminate the brilliance of these storytellers, fostering an
          environment where they can thrive and continue to enrich our lives with their art.</p>
      </div>
      </div>
    </div>


  )
}

export default LearnMore
