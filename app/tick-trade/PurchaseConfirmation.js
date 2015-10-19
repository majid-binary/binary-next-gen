import React from 'react';
import { dateTimeStr } from '../common/DateUtils';

const PurchaseConfirmation = ({receipt}) => (
	<div>
		<table>
			<thead>
				<tr>
					<th colSpan="2">Purchase Confirmation</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colSpan="2">{receipt.get('longcode')}</td>
				</tr>
				<tr>
					<td>Purchase Price</td>
					<td>{receipt.get('buy_price')}</td>
				</tr>
				<tr>
					<td>Purchase Time</td>
					<td>{dateTimeStr(receipt.get('purchase_time'))}</td>
				</tr>
				<tr>
					<td>Balance</td>
					<td>{receipt.get('balance_after')}</td>
				</tr>
			</tbody>
		</table>
		<button>Back</button>
	</div>
);

PurchaseConfirmation.propTypes = {
	proposal: React.PropTypes.object,
};

export default PurchaseConfirmation;
