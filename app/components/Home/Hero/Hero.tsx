/* eslint-disable react/no-unescaped-entities */
import { BiCheckCircle, BiClipboard } from 'react-icons/bi';
import Image from 'next/image';
import React, { useState } from 'react';
import { copyText } from '../../Helper/utils';

const Hero = () => {
	const [isCopied, setIsCopied] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleCopy = (text: string) => {
		copyText(text);
		setIsCopied(true);

		// Reset the message after a few seconds
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<div className="h-[87vh] flex justify-center flex-col ">
			<div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-5 items-center gap-[5rem]">
				<div className="col-span-2 hidden sm:block">
					{/* Image */}
					<div
						data-aos="zoom-in"
						className="mx-auto w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]"
					>
						<Image
							src="/images/hero.png"
							alt="Hero"
							width={400}
							height={400}
							className="w-[100%] h-[100%]"
						/>
					</div>
					{/* complete order number */}
					<div
						data-aos="fade-right"
						data-aos-delay="2000"
						className="bg-red-700 flex p-4 rounded-lg justify-between items-center"
					>
						<BiCheckCircle className="w-[2.5rem] h-[2.5rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem] text-white" />
						<h1 className="text-[20px] xl:text-[30px] text-yellow-300 font-bold">
							1965k+{' '}
						</h1>
						<p className="text-[20px] md:text-[18px] lg:text-[16px] xl:text-[20px] font-medium text-white">
							Complete Projects
						</p>
					</div>
				</div>
				<div className="col-span-3">
					<h1
						data-aos="fade-left"
						data-aos-delay="400"
						className="text-[20px] xl:text-[26px] uppercase text-orange-500 font-semibold"
					>
						Hello I'm
					</h1>
					<h1
						data-aos="fade-right"
						data-aos-delay="600"
						className="text-[35px] lg:text-[45px] xl:text-[60px] font-bold text-white"
					>
						Hoon <span className="text-red-500">Kim!</span>
					</h1>
					<h1
						data-aos="fade-left"
						data-aos-delay="800"
						className="text-[24px] lg:text-[28px] xl:text-[35px] text-white text-opacity-80"
					>
						Fullstack Web Developer
					</h1>
					<p
						data-aos="fade-right"
						data-aos-delay="1000"
						className="text-[16px] xl:text-[18px] text-white text-opacity-60 mt-[1.5rem]"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						earum, nemo blanditiis molestias sint cum, quibusdam nobis
						cupiditate perferendis atque dolorum quia adipisci quaerat dicta
						voluptatem veritatis asperiores numquam voluptatum.
					</p>
					<div
						className="relative inline-block mt-[2rem]"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<button
							onClick={() => handleCopy('hoonkim.tech@gmail.com')}
							data-aos="zoom-in"
							data-aos-delay="1200"
							className="group h-12 w-60 overflow-hidden rounded-full bg-red-500 text-lg shadow flex items-center justify-center"
						>
							<span className="absolute inset-0 w-3 bg-amber-400 transition-all duration-300 ease-out group-hover:w-full block"></span>
							<span className="relative flex items-center justify-center space-x-3 text-white">
								<BiClipboard />
								<span>hoonkim.tech@gmail.com</span>
							</span>
						</button>
						<div
							className={`absolute top-1/2 left-full ml-4 transform -translate-y-1/2 whitespace-nowrap text-green-500 transition-opacity duration-300 ${
								isHovered ? 'opacity-100' : 'opacity-0'
							}`}
						>
							{isCopied ? 'Copied to clipboard!' : 'Click to copy'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
