import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { FiDivideCircle } from 'react-icons/fi';

interface Props {
	plan: string;
	save: string;
	price: string;
	bg: string;
	num: string;
}

const Pricecard = ({ bg, num, plan, price, save }: Props) => {
	const scaleup = num == '2' ? 'scale-100 z-[10] lg:scale-110' : 'scale-100';

	return (
		<div className={`${scaleup} text-center relative rounded-lg bg-gray-900 `}>
			<div className={`p-6 rounded-t-lg ${bg}`}>
				<h1 className="text-white text-[30px]">{plan}</h1>
				<p className="text-[16px] text-[#d7d7d7] ">
					Try out {plan} plan Save{' '}
					<span className="text-yellow-400">{save}</span>
				</p>
				<div className="flex justify-center items-end mt-[1rem] space-x-1">
					<h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
					<p className="text-white">/Hour</p>
				</div>
			</div>
			<div className="p-6">
				<div className="flex items-center space-x-3">
					<BiCheckCircle className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
					<p className="text-[17px] text-white opacity-80">React Website</p>
				</div>
				<div className="flex items-center mt-[1rem] mb-[1rem] space-x-3">
					<BiCheckCircle className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
					<p className="text-[17px] text-white opacity-80">Next Js Website</p>
				</div>
				<div className="flex items-center space-x-3">
					<BiCheckCircle className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
					<p className="text-[17px] text-white opacity-80">Node Js Website</p>
				</div>
				<div className="flex mt-[1rem] mb-[1rem] items-center space-x-3">
					<BiCheckCircle className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
					<p className="text-[17px] text-white opacity-80">MERN Website</p>
				</div>
				<div className="flex items-center space-x-3">
					<BiCheckCircle className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
					<p className="text-[17px] text-white opacity-80">Fullstack Website</p>
				</div>
			</div>
			<button
				className={`mt-[1.5rem] px-8 py-4 ${bg} text-white block w-full hover:bg-red-800 transition-all duration-300`}
			>
				Get Started
			</button>
		</div>
	);
};

export default Pricecard;
