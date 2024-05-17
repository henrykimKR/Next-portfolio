'use client'; // Convert a server component to a client component.(By default a server component in next.js

import React, { useState } from 'react'; // useState: One of the React hooks that allows you to manage state in functional components.
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
	const [showNav, setShowNav] = useState(false);
	const showNavHandler = () => setShowNav(true);
	const closeNavHandler = () => setShowNav(false);
	return (
		<div>
			<Nav openNav={showNavHandler} />
			<MobileNav closeNav={closeNavHandler} showNav={showNav} />
		</div>
	);
};

export default ResponsiveNav;
