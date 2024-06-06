import ScrollLink from '../../Helper/ScrollLink';
import { ImCross } from 'react-icons/im';
import React from 'react';

interface Props {
	showNav: boolean;
	closeNav: () => void;
}

// Mobile NavBar
const MobileNav = ({ closeNav, showNav }: Props) => {
	const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

	return (
		<div>
			{/* OverLay */}
			<div
				className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-full h-[100vh]`}
			></div>
			{/* NavLinks */}
			<ul
				className={`text-white ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh] transform transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-blue-500 space-y-10 z-[10006]`}
			>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="home">
						<div onClick={closeNav}>Home</div>
					</ScrollLink>
				</li>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="about">
						<div onClick={closeNav}>About</div>
					</ScrollLink>
				</li>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="experience">
						<div onClick={closeNav}>Experience</div>
					</ScrollLink>
				</li>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="services">
						<div onClick={closeNav}>Services</div>
					</ScrollLink>
				</li>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="projects">
						<div onClick={closeNav}>Projects</div>
					</ScrollLink>
				</li>
				<li className="navlink text-[25px] sm:text-[30px]">
					<ScrollLink to="contact">
						<div onClick={closeNav}>Contact</div>
					</ScrollLink>
				</li>
				{/* Cross icon for closing the navbar */}
				<ImCross
					onClick={closeNav}
					className="absolute top-[-1.4rem] right-[1.4rem] w-[1.4rem] h-[1.4rem] text-white cursor-pointer"
				/>
			</ul>
		</div>
	);
};

export default MobileNav;
