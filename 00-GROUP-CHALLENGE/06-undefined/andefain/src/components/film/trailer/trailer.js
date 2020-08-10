import React from 'react';
import { Link } from 'react-router-dom';
import './trailer.css';
import PropTypes from 'prop-types';

function Trailer({ trailer }) {
	debugger;
	return (
		<div className="trailer-container">
			<Link to="/film">
				<img
					src={trailer.image}
					className="poster-img"
					//style={{ backgroundImage: `url(${details.image.url})` }}
				/>
			</Link>
			<Link to="/film">
				<img
					src={trailer.trailer ? trailer.trailer.thumbnailUrl : ''}
					className="trailer-img"
					//style={{backgroundImage: `url(${trailer.resource.videos[0].image.url})`}}
				/>
			</Link>
		</div>
	);
}

Trailer.propTypes = {
	details: PropTypes.object,
	trailer: PropTypes.object
};

export default Trailer;
