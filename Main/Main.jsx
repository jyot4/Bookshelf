import './Main.css';
import React from 'react';
import Books from '../Book/Books';
import Footer from '../footer/Footer';
import img from './img.jpeg'


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
			<div>
				<div className="main_container">
					<nav className="navbar">
						<h1>BookShelf</h1>
						<input type='search' name='search' placeholder='Search for books...' />
						<button className='current'>Current Reading</button>

						<button className="white_btn" onClick={handleLogout}>
							Logout
						</button>
					</nav>

				</div>
				<div className='content-container'>
					<img src={img} />
					<p className='para'>Unlock the door to endless imagination at Bookshelf, where every page holds a new adventure.</p>
				</div>
			</div>
			<Books />
			<Footer />
		</>
	);
};

export default Main;