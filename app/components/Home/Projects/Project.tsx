import React from 'react';
import Heading from '../../Helper/Heading';
import Image from 'next/image';

const Project = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] ">
			<Heading headingPrimary="Explore My Project" headingSub="Project" />
			<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
				<div data-aos="fade-up" data-aos-anchor-placement="top-center">
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p1.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-delay="200"
				>
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p2.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-delay="400"
				>
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p3.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-delay="600"
				>
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p4.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-delay="800"
				>
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p5.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="top-center"
					data-aos-delay="1000"
				>
					{/* Image */}
					<div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
						<Image
							src="/images/p4.jpg"
							alt="Portfolio"
							width={300}
							height={300}
							className="object-contain w-[100%] h-[100%]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
