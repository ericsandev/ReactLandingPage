import { list_top_creator } from '@/fake_data';
import React from 'react';
import { Container, CreatorItem } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter, fadeInDownShorter2 } from '@/keyframes';
import { Helmet } from 'react-helmet';

const Team = () => {
	return (
		<Container className={'mb-44'} id="team">
			<Helmet>
				<title>Kraneoz | Team Hypnfrens NFT</title>
				<meta name="description" content="Team Kraneoz" />
			</Helmet>
			<div className="text-center mb-8">
				<h2 className="font-bold text-3xl mb-2">BEHIND THE SCENES</h2>
				<Reveal
					keyframes={fadeInDownShorter2}
					duration={800}
					delay={100}>
					<p className="opacity-50 w-full sm:w-[400px] mx-auto"></p>
				</Reveal>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
				{list_top_creator.map((item, i) => (
					<Reveal
						key={i}
						keyframes={fadeInDownShorter}
						duration={500}
						delay={100 * (i + 1)}>
						<CreatorItem key={i} data={item} />
					</Reveal>
				))}
			</div>
		</Container>
	);
};

export default Team;
