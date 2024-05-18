import Image from 'next/image';
import React from 'react';

interface Props {
	image: string;
	percent: string;
	title: string;
}

const SkillCard = ({ image, percent, title }: Props) => {
	return (
		<div className="p-6 hover:bg-red-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
			{/* image */}
			<Image
				src={image}
				width={80}
				height={80}
				alt="Skill"
				className="mx-auto object-cover"
			/>
			{/* title */}
			<h1 className="text-[18px] mt-[1rem] text-white font-bold">{title}</h1>
			{/* progress */}
			<div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40">
				{percent}%
			</div>
		</div>
	);
};

export default SkillCard;
