import React from 'react';
import {
	AboutUs,
	Button,
	Collections,
	Container,
	FAQ,
	Footer,
	Hero,
	Navbar,
	Team,
	Marketing,
	CallTo,
	Social,
	Coming,
} from '@/components';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div className="h-full main_bg text-white overflow-hidden" id="top">
			<Helmet>
				<title>Kraneoz | Welcome 6666 NFTS Kraneoz</title>
				<meta
					name="description"
					content='Kraneoz focuses on establishing a brand IRL through partnerships with companies around the world. In addition to a partnership with an animation studio and writers for the creation of an animated series at the same time that we are preparing the next collection called "The Sensors".'
				/>
			</Helmet>
			<Navbar />
			<Marketing />
			<Hero />
			<AboutUs />
			<Collections />
			<Team />
			<FAQ />
			<CallTo />
			<Footer />
		</div>
	);
};

export default Home;
