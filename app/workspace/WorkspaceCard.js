import React from 'react';
import AssetSelectorPanel from '../asset-selector/AssetSelectorPanel';
import PortfolioPanel from '../portfolio/PortfolioPanel';
import TradingTimesPanel from '../trading-times/TradingTimesPanel';
import ProfitTablePanel from '../profit-table/ProfitTablePanel';

export default (props) => (
	<div>
		<AssetSelectorPanel position={{left: 1, top: 55, width: 300, heigt: 600 }} />
		<PortfolioPanel position={{left: 50, top: 300, width: 500, heigt: 300 }} />
		<TradingTimesPanel position={{left: 650, top: 300, width: 500, heigt: 300 }} />
		<ProfitTablePanel position={{left: 1250, top: 300, width: 500, heigt: 300 }} />
	</div>
);