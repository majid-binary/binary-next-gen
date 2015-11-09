import React from 'react';
import TickTradePanel from '../tick-trade/TickTradePanel';
import AssetSelectorPanel from '../asset-selector/AssetSelectorPanel';
import AssetDetailsPanel from '../asset-details/AssetDetailsPanel';
import PortfolioPanel from '../portfolio/PortfolioPanel';
import TradingTimesPanel from '../trading-times/TradingTimesPanel';
import AssetIndexPanel from '../asset-index/AssetIndexPanel';
import WatchlistPanel from '../watchlist/WatchlistPanel';
import ProfitTablePanel from '../profit-table/ProfitTablePanel';
import StatementPanel from '../statement/StatementPanel';

export default () => (
	<div>
		<TickTradePanel position={{left: 70, top: 52, width: 300, height: 545 }} />
		<AssetSelectorPanel position={{left: 70, top: 52, width: 300, height: 545 }} />
		<AssetDetailsPanel position={{left: 70, top: 615, width: 300, height: 370 }} />

		<WatchlistPanel position={{left: 375, top: 52, width: 550, height: 200 }} />
		<AssetIndexPanel position={{left: 375, top: 255, width: 550, height: 360 }} />
		<TradingTimesPanel position={{left: 375, top: 620, width: 550, height: 360 }} />

		<PortfolioPanel position={{left: 930, top: 52, width: 800, height: 300 }} />
		<StatementPanel position={{left: 930, top: 355, width: 800, height: 300 }} />
		<ProfitTablePanel position={{left: 930, top: 660, width: 800, height: 320 }} />
	</div>
);