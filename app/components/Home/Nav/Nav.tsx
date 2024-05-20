import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import ScrollLink from '../../Helper/ScrollLink';
import Link from 'next/link';

interface Props {
	openNav: () => void;
}

// NavBar Components
const Nav = ({ openNav }: Props) => {
	return (
		<nav className="h-[8vh] w-full bg-[#181a1d] fixed top-0 z-50">
			<div className="flex items-center justify-between w-[90%] xl:w-[80%] h-full mx-auto">
				{/* Logo */}
				<div className="text-[35px] font-semibold text-white">
					Hoo<span className="text-red-500">N</span>
				</div>
				{/* Nav Links */}
				<ul className="lg:flex hidden text-white items-center space-x-6 xl:space-x-10">
					<li className="navlink">
						<ScrollLink to="home">Home</ScrollLink>
					</li>
					<li className="navlink">
						<ScrollLink to="about">About</ScrollLink>
					</li>
					<li className="navlink">
						<ScrollLink to="services">Services</ScrollLink>
					</li>
					<li className="navlink">
						<ScrollLink to="projects">Projects</ScrollLink>
					</li>
					<li className="navlink">
						<ScrollLink to="contact">Contact</ScrollLink>
					</li>
				</ul>
				{/* Download and menu */}
				<div className="flex items-center space-x-6">
					{/* Download Resume button */}
					<Link
						href="/images/Resume(Henry_Kim)_Final.pdf"
						download="Resume"
						target="_blank"
					>
						<button className="group relative h-12 w-48 overflow-hidden rounded-full bg-red-500 text-lg shadow">
							<span className="absolute inset-0 w-3 bg-amber-400 transition-all duration-300 ease-out group-hover:w-full block"></span>
							<span className="relative flex items-center justify-center space-x-3 text-white">
								<FaDownload />
								<span>Resume</span>
							</span>
						</button>
					</Link>
					{/* Burger menu - hidden */}
					<HiBars3BottomRight
						onClick={openNav}
						className="w-[2rem] text-white h-[2rem] cursor-pointer lg:hidden"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
