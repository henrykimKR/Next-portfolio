import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
	image: string;
	company: string;
	duration: string;
	title: string;
	description: string;
}

const ExperienceCard = ({
	image,
	company,
	duration,
	title,
	description,
}: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="rounded-xl shadow-xl transition-all duration-500">
				{/* Front Side */}
				<div
					className={`pt-[52px] pb-[52px] rounded-xl bg-gray-900 items-center justify-center ${
						isHovered ? 'hidden' : ''
					}`}
				>
					<div className="text-center">
						{/* image */}
						<Image
							src={image}
							width={80}
							height={80}
							alt="Company"
							className="mx-auto object-cover rounded-full"
						/>
						<div className="text-2xl mt-[1rem] text-white font-bold">
							{company}
						</div>
						<div className="text-lg text-white text-opacity-60">{duration}</div>
					</div>
				</div>
				{/* Back Side */}
				<div
					className={`pt-[2rem] pb-[2rem] rounded-xl bg-blue-500 flex flex-col items-center justify-center transition-all duration-500 ${
						isHovered ? 'shadow-lg shadow-blue-500/50' : 'hidden'
					}`}
				>
					<h1 className="text-2xl font-bold text-white">{title}</h1>
					<p
						className={
							'ml-[4px] text-lg text-left text-white text-opacity-60 leading-[20px] whitespace-pre-line '
						}
						style={{ lineHeight: '1.1' }}
					>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
