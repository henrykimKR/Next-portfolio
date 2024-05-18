import AboutMe from './AboutMe/AboutMe';
import Hero from './Hero/Hero';
import React from 'react';
import Service from './Services/Service';
import Skill from './Skill/Skill';
import Project from './Projects/Project';
import Price from './Price/Price';
import Review from './Reviews/Review';
import Contact from './Contact/Contact';

// Adding all homepage related components
const Home = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<AboutMe />
			<Service />
			<Skill />
			<Project />
			<Price />
			<Review />
			<Contact />
		</div>
	);
};

export default Home;
