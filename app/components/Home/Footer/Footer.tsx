import React from 'react';
import {
	BiEnvelope,
	BiMapPin,
	BiPhone,
	BiLogoLinkedinSquare,
	BiLogoGithub,
} from 'react-icons/bi';
import ScrollLink from '../../Helper/ScrollLink';

const Footer = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] bg-black">
			<div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
				{/* first part */}
				<div>
					<div className="text-[35px] font-semibold text-white">
						Hoo<span className="text-red-500">N</span>
					</div>
					<p className="mt-[1px] text-yellow-300 underline font-semibold">
						hoonkim.tech@gmail.com
					</p>
					<h1 className="text-[14px] mt-[2px] text-white opacity-70">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis
						repellat fuga, sit beatae quos quaerat quo aspernatur esse
						perferendis quia explicabo iure! Labore esse numquam nisi distinctio
						facilis voluptate!
					</h1>
					<div className="pt-[8px] flex justify-start gap-2">
						<a
							href="https://www.linkedin.com/in/henrykimkr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLogoLinkedinSquare className="w-[1.5rem] h-[1.5rem] lg:w-[1.5rem] lg:h-[1.5rem] xl:w-[2rem] xl:h-[2rem] text-white" />
						</a>
						<a
							href="https://github.com/henrykimKR"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BiLogoGithub className="w-[1.5rem] h-[1.5rem] lg:w-[1.5rem] lg:h-[1.5rem] xl:w-[2rem] xl:h-[2rem] text-white" />
						</a>
					</div>
				</div>
				{/* second part */}
				<div className="md:mx-auto">
					<h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
						Quick Links
					</h1>
					<div className="grid grid-cols-2 gap-x-4 gap-y-2">
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="home">Home</ScrollLink>
						</p>
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="about">About</ScrollLink>
						</p>
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="experience">Experience</ScrollLink>
						</p>
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="services">Services</ScrollLink>
						</p>
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="projects">Projects</ScrollLink>
						</p>
						<p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
							<ScrollLink to="contact">Contact</ScrollLink>
						</p>
					</div>
				</div>
				{/* third part */}
				<div className="lg:mx-auto ">
					<h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
						Address
					</h1>
					<div className="flex items-center mt-[1rem] space-x-2 ">
						<BiMapPin className="w-[1rem] h-[1rem] text-yellow-400 " />
						<p className="text-[17px] font-normal text-white opacity-75">
							Halifax, NS, Canada
						</p>
					</div>
					<div className="flex items-center mt-[1rem] space-x-2 ">
						<BiEnvelope className="w-[1rem] h-[1rem] text-yellow-400 " />
						<p className="text-[17px] font-normal text-white opacity-75">
							hoonkim.tech@gmail.com
						</p>
					</div>
					<div className="flex items-center mt-[1rem] space-x-2 ">
						<BiPhone className="w-[1rem] h-[1rem] text-yellow-400 " />
						<p className="text-[17px] font-normal text-white opacity-75">
							+1 647 869 7027
						</p>
					</div>
				</div>
			</div>
			<div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
				&#169; Copyright Hoon Kim
			</div>
		</div>
	);
};

export default Footer;
