import Image from 'next/image';
import React from 'react';

interface Props {
	image: string;
	title: string;
	description: string;
}

const ServiceCard = ({ image, title, description }: Props) => {
	return (
		<div className="shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg flex-grow-0">
			{/* Image */}
			<Image
				src={image}
				alt={title}
				width={80}
				height={80}
				className="mt-[1rem] mb-[1rem] mx-auto"
			/>
			<div className="text-center">
				{/* Title */}
				<h1 className="font-semibold text-[26px] text-white">{title}</h1>
				<p
					className="mt-[0.5rem]  text-white text-opacity-60 whitespace-pre-line"
					style={{ lineHeight: '0.8' }}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export default ServiceCard;
