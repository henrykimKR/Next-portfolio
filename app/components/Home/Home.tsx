'use client';

import AboutMe from './AboutMe/AboutMe';
import Hero from './Hero/Hero';
import React, { useEffect } from 'react';
import Service from './Services/Service';
import Skill from './Skill/Skill';
import Project from './Projects/Project';
// import Price from './Price/Price';
import Review from './Reviews/Review';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Adding all homepage related components
const Home = () => {
	useEffect(() => {
		const initAOS = async () => {
			await import('aos');
			AOS.init({
				duration: 1000,
				easing: 'ease',
				once: true,
				anchorPlacement: 'top-bottom',
			});
		};

		initAOS();
	}, []);

	return (
		<div className="overflow-hidden" id="home">
			<Hero />
			<AboutMe />
			<Experience />
			<Service />
			<Skill />
			<Project />
			{/* <Price /> */}
			<Review />
			<Contact />
			<Footer />
			<ToastContainer />
		</div>
	);
};

export default Home;
