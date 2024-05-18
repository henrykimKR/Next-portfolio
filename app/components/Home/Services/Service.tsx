import React from 'react';
import Heading from '../../Helper/Heading';
import ServiceCard from './ServiceCard';

const Service = () => {
	return (
		<div className="pt-[5rem] pb-[3rem]">
			{/* Heading */}
			<Heading
				headingPrimary="What can I do for clients"
				headingSub="Creative Services"
			/>
			<div className="w-[80%] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center">
				<div>
					<ServiceCard image="/images/icon1.png" title="Web Developer" />
				</div>
				<div>
					<ServiceCard image="/images/icon2.png" title="React Developer" />
				</div>
				<div>
					<ServiceCard image="/images/icon3.png" title="Next JS Developer" />
				</div>
				<div>
					<ServiceCard image="/images/icon4.png" title="Node Js Developer" />
				</div>
				<div>
					<ServiceCard image="/images/icon5.png" title="Frontend Developer" />
				</div>
				<div>
					<ServiceCard image="/images/icon2.png" title="Backend Developer" />
				</div>
			</div>
		</div>
	);
};

export default Service;
