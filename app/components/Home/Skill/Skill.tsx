import React from 'react';
import Heading from '../../Helper/Heading';
import SkillCard from './SkillCard';

const Skill = () => {
	return (
		<div className="pt-[5rem] pb-[3rem] ">
			<Heading headingPrimary="Explore My Skills" headingSub="My Skills" />
			<div className="grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[1rem] items-center">
				{/* Skill Card */}
				<div data-aos="fade-right">
					<SkillCard image="/images/react.svg" title="React" />
				</div>
				<div data-aos="fade-right" data-aos-delay="400">
					<SkillCard image="/images/js.svg" title="JavaScript" />
				</div>
				<div data-aos="fade-right" data-aos-delay="600">
					<SkillCard image="/images/ts.svg" title="TypeScript" />
				</div>
				<div data-aos="fade-right" data-aos-delay="800">
					<SkillCard image="/images/html.svg" title="HTML" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1000">
					<SkillCard image="/images/css.svg" title="CSS" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1200">
					<SkillCard image="/images/bootstrap.svg" title="Bootstrap" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1400">
					<SkillCard image="/images/tailwind.svg" title="Tailwind CSS" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1600">
					<SkillCard image="/images/node.svg" title="NodeJS" />
				</div>
				<div data-aos="fade-right" data-aos-delay="1800">
					<SkillCard image="/images/mongo.svg" title="MongoDB" />
				</div>
				<div data-aos="fade-right" data-aos-delay="2000">
					<SkillCard image="/images/python.svg" title="Python" />
				</div>
				<div data-aos="fade-right" data-aos-delay="2200">
					<SkillCard image="/images/c++.svg" title="C/C++" />
				</div>
				<div data-aos="fade-right" data-aos-delay="2400">
					<SkillCard image="/images/dart.svg" title="Dart" />
				</div>
				<div data-aos="fade-right" data-aos-delay="2600">
					<SkillCard image="/images/flutter.svg" title="Flutter" />
				</div>
				<div data-aos="fade-right" data-aos-delay="2800">
					<SkillCard image="/images/git.svg" title="Git" />
				</div>
			</div>
		</div>
	);
};

export default Skill;
