import Image from 'next/image';
import React from 'react';

interface Props {
	image: string;
	title: string;
}

const ServiceCard = ({ image, title }: Props) => {
	return (
		<div className="shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg">
			{/* Image */}
			<Image
				src={image}
				alt={title}
				width={80}
				height={80}
				className="mt-[2rem] mb-[2rem] mx-auto"
			/>
			<div className="text-center">
				{/* Title */}
				<h1 className="font-semibold text-[26px] text-white">{title}</h1>
				<p className="mt-[0.5rem] text-white text-opacity-60">
					Promote your blog posts, case udie, and product ouncems nts with the
					branded videos.
				</p>
				<button className="px-5 py-2 bg-blue-600 mt-[2rem] text-white rounded-lg">
					Read More
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
