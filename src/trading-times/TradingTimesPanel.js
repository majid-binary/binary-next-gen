import React from 'react';
import { Panel } from '../_common';
import TradingTimesContainer from './TradingTimesContainer';

export default (props) => (
	<Panel title="Trading Times" position={props.position}>
		<TradingTimesContainer {...props} />
	</Panel>
);
