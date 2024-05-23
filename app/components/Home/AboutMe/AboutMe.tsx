import React from 'react';
import Heading from '../../Helper/Heading';
import AboutInfoBox from './AboutInfoBox';
import AboutImage from '@/public/images/about.svg';
import Image from 'next/image';

const AboutMe = () => {
	return (
		<div className="mt-[5rem] mb-[3rem]" id="about">
			{/* Heading (props: headingPrimary, headingSub) */}
			<Heading
				headingPrimary="I Can Build Your Dream Website"
				headingSub="About Me"
			/>
			<div className="w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[4rem] ">
				{/* Personal Infos */}
				<div>
					<h1 className="mb-[1.4rem] text-[27px] font-semibold text-orange-500">
						Personal Infos :
					</h1>
					{/* AboutInfoBox (props: text1, text2) */}
					<AboutInfoBox text1="First Name : Hoon" text2="Last Name : Kim" />
					<AboutInfoBox
						text1="Address : Halifax, NS, Canada"
						text2="Phone : +1 647 869 7027"
					/>
					<AboutInfoBox
						text1="Nationality : South Korea"
						text2="Language : English, Korean"
					/>
					<AboutInfoBox
						text1={`Education: Seneca College [Computer Programming]`}
						text2="Email : hoonkim.tech@gmail.com"
					/>
					<AboutInfoBox
						text1="LinkedIn : linkedin.com/in/henrykimkr"
						text2="Github : github.com/henrykimKR"
					/>
				</div>
				{/* Image */}
				<Image
					data-aos="zoom-in"
					data-aos-anchor-placement="top-center"
					src={AboutImage}
					alt="About"
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default AboutMe;
