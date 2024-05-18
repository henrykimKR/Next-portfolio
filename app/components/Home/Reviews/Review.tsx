import React from 'react';
import Heading from '../../Helper/Heading';
import ReviewSlider from './ReviewSlider';

const Review = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] ">
			<Heading headingPrimary="Our Client Reviews" headingSub="Reviews" />
			<div className="pt-[5rem] mb-[4rem] w-[80%] mx-auto">
				<ReviewSlider />
			</div>
		</div>
	);
};

export default Review;
