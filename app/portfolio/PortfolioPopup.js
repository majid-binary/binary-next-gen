import React from 'react';
import { connect } from 'react-redux';
import Popup from '../common/Popup';
import PortfolioPane from './PortfolioPane';

@connect(state => ({ account: state.account, portfolio: state.portfolio }))
export default class PortfolioPage extends React.Component {

	static propTypes = {
		account: React.PropTypes.object.isRequired,
		portfolio: React.PropTypes.object,
		dispatch: React.PropTypes.func,
	};

	render() {
		return (
			<Popup>
				<PortfolioPane {...this.props} />
			</Popup>
		);
	}
}