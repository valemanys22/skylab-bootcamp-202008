import React, { useState, useEffect } from 'react';

import FilmSlider from './filmSlider/filmSlider';
import TopFilmList from './topFilmList/topFilmList';

import {
	sliderData,
	comingSoonData,
	mostPopularData
} from '../../actions/filmActions';
import filmStore from '../../stores/filmStore';

import './home.css';

function Home() {
	const [comingSoon, setComingSoon] = useState(filmStore.getComingsoonId());
	const [mostPopular, setMostPopular] = useState(filmStore.getPopularId());
	const [slider, setSlider] = useState(filmStore.getSliderId());

	useEffect(() => {
		filmStore.addChangeListener(onChange);
		if (comingSoon.length === 0) comingSoonData();
		if (mostPopular.length === 0) mostPopularData();
		if (slider.length === 0) sliderData();
		return () => filmStore.removeChangeListener(onChange);
	}, [comingSoon.length]);

	function onChange() {
		setComingSoon(filmStore.getComingsoonId());
		setMostPopular(filmStore.getPopularId());
		setSlider(filmStore.getSliderId());
	}
	return (
		<>
			<FilmSlider data={slider} />
			<div className="list-container">
				{comingSoon.length === 5 && (
					<TopFilmList title="Coming soon Movies" data={comingSoon} />
				)}
				{mostPopular.length === 5 && (
					<TopFilmList title={'Most popular movies'} data={mostPopular} />
				)}
			</div>
		</>
	);
}

export default Home;
