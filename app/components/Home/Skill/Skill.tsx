import React from 'react';
import Heading from '../../Helper/Heading';
import SkillCard from './SkillCard';

const Skill = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] ">
			<Heading headingPrimary="Explore My Skills" headingSub="My Skills" />
			<div className="grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
				{/* Skill Card */}
				<div data-aos="fade-right">
					<SkillCard image="/images/react.svg" percent="90" title="React" />
				</div>
				<div data-aos="fade-right" data-aos-delay="200">
					<SkillCard image="/images/css.svg" percent="95" title="CSS" />
				</div>
				<div data-aos="fade-right" data-aos-delay="400">
					<SkillCard image="/images/js.svg" percent="80" title="JavaScript" />
				</div>
				<div data-aos="fade-right" data-aos-delay="600">
					<SkillCard image="/images/ts.svg" percent="90" title="TypeScript" />
				</div>
				<div data-aos="fade-right" data-aos-delay="800">
					<SkillCard image="/images/html.svg" percent="90" title="HTML" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1000">
					<SkillCard image="/images/node.svg" percent="90" title="Node Js" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1200">
					<SkillCard image="/images/mongo.svg" percent="60" title="MongoDB" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1400">
					<SkillCard image="/images/python.svg" percent="90" title="Python" />
				</div>
			</div>
		</div>
	);
};

export default Skill;
