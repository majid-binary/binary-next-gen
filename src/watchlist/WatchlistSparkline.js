import React from 'react';

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const WatchlistSparkline = (props) => (
	<Sparklines {...props} data={props.history.map((h) => h.quote)} limit={30} >
		<SparklinesLine />
		<SparklinesSpots />
	</Sparklines>
);

WatchlistSparkline.propTypes = {
	history: React.PropTypes.array,
};

WatchlistSparkline.defaultProps = {
	history: [],
};

export default WatchlistSparkline;
