import './Main.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
// import Signup from '../signup/Signup';
// import About from '../about/About'
import Books from '../Book/Books';
// import Footer from '../footer/Footer';
import img from './img.jpeg'

// const bookApi = createContext()
const Main = () => {


	const [search, setsearch] = useState("")
	const searchBook =(e)=>{
		if(products.volumeInfo.title === search){
			console.log(e)
		}
		// console.log(e.target.value)
	}
	return (
		<>
			<div>
				<div className="main_container">
					<nav className="navbar">
						<h1>BookShelf</h1>
						<Link to = "/about">About</Link>
						
						<input type='search' name='search' placeholder='Search for books...' value={search} onChange={e => setsearch(e.target.value)} onKeyUp={searchBook} />
						<button className="white_btn" onClick={handleLogout}>
							Logout
						</button>
					</nav>

				</div>
				
			</div>
			<Books />
			{/* <About/> */}
			{/* <Footer /> */}

			{/* <bookApi.provider> */}
	
			{/* </bookApi.provider> */}
		</>
	);
	};

export default Main;