import React, { useState, useEffect } from 'react'
import axios from "axios";
import Api from './Api'
import './style.css'
// import logo from '../logo.svg'


function Books() {

  const [product, setProduct] = useState([])

  useEffect(() => {


    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=mostpopular&maxResults=40&orderBy=newest&key=${Api}`)
      .then((response) => {
        //   console.log(result)
        console.log(response.data.items)
        setProduct(response.data.items)
        
      })

  }, [])



  return (
    <div className='book'>
      {/* <div className='allBook'> */}
      {
        product.map((products, index) => {
          // console.log(products.volumeInfo.imageLinks.thumbnail)
          return (
            <div className='content' key={index}>
              <div className='image'>
              {/* (products?.volumeInfo?.imageLinks?.thumbnail)  */}
      
                <img src={ (products?.volumeInfo?.imageLinks?.thumbnail) ?products.volumeInfo.imageLinks.thumbnail :"" } alt='image'></img>
              </div>
              <h1> Title{(products.volumeInfo.title.length > 25)? products.volumeInfo.title.slice(0,25)+"...":products.volumeInfo.title}</h1>
              {/* <h4> Subtitle:- {products.volumeInfo.subtitle}</h4> */}
              <p> Author :-{products.volumeInfo.authors}</p>

              {/* <p>{products.volumeInfo.description}</p> */}


            </div>
          )
        })
      }
      {/* </div> */}

      <Api />
    </div>
  )
}

export default Books