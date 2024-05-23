import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
	number: string;
	company: string;
	duration: string;
	title: string;
	description: string;
}

const ExperienceButton = ({
	number,
	company,
	duration,
	title,
	description,
}: Props) => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="relative w-full mb-4">
			<button
				onClick={toggleActive}
				className="relative w-full text-left p-2 bg-red-500 text-white rounded hover:bg-red-700"
			>
				<div className="flex justify-between items-center">
					{/* <div className="ml-[1rem] text-[36px] font-bold">{number}</div> */}
					<div>
						<div className="ml-[2rem] text-[24px] font-bold">{company}</div>
						<div className="ml-[2rem] text-[16px] text-white text-opacity-80">
							{duration}
						</div>
					</div>
					<div className="text-3xl mr-[2rem]">
						<FaArrowRight />
					</div>
				</div>
			</button>
			{isActive && (
				<div className=" mt-2 p-2 bg-yellow-400 rounded whitespace-pre-line">
					<div className="ml-[2rem] text-[24px] text-black font-semibold">
						{title}
					</div>
					<div className="ml-[2rem] text-[16px] text-black text-opacity-80">
						{description}
					</div>
					<div className="ml-[2rem] text-[16px] text-black text-opacity-80">
						{description}
					</div>
					<div className="ml-[2rem] text-[16px] text-black text-opacity-80">
						{description}
					</div>
				</div>
			)}
		</div>
	);
};

export default ExperienceButton;
