import * as types from '../_constants/ActionTypes';

export const serverDataProfitTable = serverResponse => ({
    type: types.SERVER_DATA_PROFIT_TABLE,
    serverResponse,
});
