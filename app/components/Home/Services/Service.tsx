import React from 'react';
import Heading from '../../Helper/Heading';
import ServiceCard from './ServiceCard';

const Service = () => {
	return (
		<div className="mt-[5rem] mb-[3rem] " id="services">
			{/* Heading */}
			<Heading
				headingPrimary="What can I do for clients"
				headingSub="Creative Services"
			/>
			<div className="w-[60%] mt-[4rem] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[3rem]">
				<div data-aos="fade-right">
					<ServiceCard
						image="/images/icon1.png"
						title="Web Development"
						description={`
						- Unique and tailored design and development\n
						- Responsive design for optimal viewing
						`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="200">
					<ServiceCard
						image="/images/icon2.png"
						title="Full Stack Development"
						description={`
						- Frontend & Backend\n
						- RESTful API design and implementation
						`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="400">
					<ServiceCard
						image="/images/icon3.png"
						title="Maintenance & Updates"
						description={`
						- Ongoing maintenance and performance\n
						- Regular content updates and management
						`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="600">
					<ServiceCard
						image="/images/icon4.png"
						title="SEO & Optimization"
						description={`
						- Search Engine Optimization for better visibility\n
						- Performance optimization for faster load times
						`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Service;
