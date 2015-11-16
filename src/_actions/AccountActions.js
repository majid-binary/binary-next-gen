import * as types from '../_constants/ActionTypes';

export const serverDataAuthorize = serverResponse => ({
    type: types.SERVER_DATA_AUTHORIZE,
    serverResponse,
});

export const serverDataBalance = serverResponse => ({
    type: types.SERVER_DATA_BALANCE,
    serverResponse,
});

export const serverDataPayoutCurrencies = serverResponse => ({
    type: types.SERVER_DATA_PAYOUT_CURRENCIES,
    serverResponse,
});

export const serverDataAccountLimits = serverResponse => ({
    type: types.SERVER_DATA_ACCOUNT_LIMITS,
    serverResponse,
});

export const serverDataAccountSelfExclusion = serverResponse => ({
    type: types.SERVER_DATA_ACCOUNT_SELF_EXCLUSION,
    serverResponse,
});

export const serverDataAccountSettings = serverResponse => ({
    type: types.SERVER_DATA_ACCOUNT_SETTINGS,
    serverResponse,
});
