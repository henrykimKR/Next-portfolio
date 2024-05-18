import React from 'react';
import Heading from '../../Helper/Heading';
import Pricecard from './Pricecard';

const Price = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] ">
			<Heading
				headingPrimary="Best Pricing for your project"
				headingSub="Price"
			/>
			<div className="w-[80%] mx-auto grid grid-cols-1 gap-[2rem] lg:gap-0 sm:grid-cols-2 lg:grid-cols-3 items-center pt-[4rem] md:pt-[7rem] ">
				<div>
					<Pricecard
						plan="Basic"
						price="10$"
						num="1"
						save="25%"
						bg="bg-orange-700"
					/>
				</div>
				<div>
					<Pricecard
						plan="Popular"
						price="20$"
						num="2"
						save="35%"
						bg="bg-pink-900"
					/>
				</div>
				<div>
					<Pricecard
						plan="Premium"
						price="40$"
						num="3"
						save="55%"
						bg="bg-blue-900"
					/>
				</div>
			</div>
		</div>
	);
};

export default Price;
