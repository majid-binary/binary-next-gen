import React from 'react';
import { Link } from 'react-router';
import { RangeGroup } from '../_common';
import * as LiveData from '../_data/LiveData';
import { tradeTypeCodeToText } from '../_utils/TradeUtils';

export default class TickTradeParameters extends React.Component {

	static propTypes = {
		assetName: React.PropTypes.string.isRequired,
		actions: React.PropTypes.object.isRequired,
		assets: React.PropTypes.object.isRequired,
		tickTrade: React.PropTypes.object.isRequired,
		workspace: React.PropTypes.object.isRequired,
	};

	getPrice() {
		const {tickTrade} = this.props;

		LiveData.api.unsubscribeFromAllProposals();

		LiveData.api.subscribeToPriceForContractProposal({
			amount: tickTrade.get('amount').toString(),
			basis: tickTrade.get('basis'),
			contract_type: tickTrade.get('tradeType'),
			currency: tickTrade.get('currency'),
			duration: tickTrade.get('duration').toString(),
			duration_unit: 't',
			symbol: tickTrade.get('assetSymbol'),
		});
	}

	render() {
		const {actions, assetName, tickTrade} = this.props;
		const tradeTypeText = tradeTypeCodeToText(tickTrade.get('tradeType'));

		return (
			<div>
				<div className="row">
					<label>Asset</label>
					<fieldset style={{flex: 4}}>
						<Link to={'/asset-selector?goback&tick'} className="button">
							{assetName}
						</Link>
					</fieldset>
				</div>
				<div className="row">
					<label>Type</label>
					<fieldset style={{flex: 4}}>
						<Link
							className="button"
							to="/trade-type-selector">
							{tradeTypeText}
						</Link>
					</fieldset>
				</div>
				<div className="row">
					<label>Ticks</label>
					<div style={{flex: 4}}>
						<RangeGroup
							min={5} max={10}
							items={['5', '6', '7', '8', '9', '10']}
							value={+tickTrade.get('duration')}
							onChange={e => {
								actions.updateTickTradeParameters({ duration: e.target.value });
								this.getPrice();
							}} />
					</div>
				</div>
				<div className="row">
					<label>Amount</label>
					<fieldset style={{flex: 4}}>
						<Link
							className="button"
							to="/payout-selector">
							{tickTrade.get('basis')}: {tickTrade.get('currency')} {tickTrade.get('amount')}
						</Link>
					</fieldset>
				</div>
			</div>
		);
	}
}
