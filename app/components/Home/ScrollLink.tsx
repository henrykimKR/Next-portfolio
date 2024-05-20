import React from 'react';
import { Link } from 'react-scroll';

interface ScrollLinkProps {
	to: string;
	children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children }) => {
	return (
		<Link
			activeClass="active"
			to={to}
			spy={true}
			smooth={true}
			offset={-70} // Adjust this offset based on your layout
			duration={500}
			className="cursor-pointer"
		>
			{children}
		</Link>
	);
};

export default ScrollLink;
