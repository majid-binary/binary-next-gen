import * as types from '../_constants/ActionTypes';

export function serverDataTradingTimes(serverResponse) {
    return {
        type: types.SERVER_DATA_TRADING_TIMES,
        serverResponse,
    };
}