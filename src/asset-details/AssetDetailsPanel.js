import React from 'react';
import { Panel } from '../_common';
import AssetDetailsContainer from './AssetDetailsContainer';

export default (props) => (
	<Panel title="Asset Details" position={props.position}>
		<AssetDetailsContainer {...props} />
	</Panel>
);
