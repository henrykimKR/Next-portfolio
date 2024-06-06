import React from 'react';
import Heading from '../../Helper/Heading';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
	return (
		<div className="mt-[5rem] mb-[3rem]" id="experience">
			<Heading
				headingPrimary="How I have contributed"
				headingSub="Work Experience"
			/>
			<div className="w-[80%] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
				<div data-aos="fade-right">
					<ExperienceCard
						image="/images/l1.png"
						company="Pawniverse Inc, Toronto"
						duration="Aug 2023 - Feb 2024"
						title="App Developer"
						description={`
                    	- Built pet app with Flutter\n
                    	- Optimized server integration for profiles\n
                    	- Enhanced app responsiveness via Riverpod\n
                    	- Collaborated, used Git, reviewed code`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="200">
					<ExperienceCard
						image="/images/l2.png"
						company="City of Toronto, Toronto"
						duration="Jan 2023 - Apr 2023"
						title="Data Anaylst"
						description={`
                    	- Automated script conversion with Python\n
                    	- Led team knowledge sharing session\n
                    	- Transcribed stakeholder meeting records\n
                    	- Created MS Word report analysis`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="400">
					<ExperienceCard
						image="/images/l3.png"
						company="Mood Corporation, Toronto"
						duration="Aug 2020 - Apr 2021"
						title="Web Developer"
						description={`
						- Designed dynamic coffee web pages\n
						- Enhanced code readability\n
						- Built web with HTML, CSS, JS, Bootstrap\n
						- Parsed data using JSON, SQL`}
					/>
				</div>
				<div data-aos="fade-right" data-aos-delay="600">
					<ExperienceCard
						image="/images/l4.png"
						company="Pawniverse Inc, Toronto"
						duration="Jan 2017 - Apr 2017"
						title="QA Engineer"
						description={`
						- Conducted regression tests for 'RecurDyn'\n
						- Tested 40+ cases daily\n
						- Documented manual test defects\n
						- Improved user manual with new features`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
