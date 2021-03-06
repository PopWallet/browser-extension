import BigNumber                                 from 'bignumber.js'
import parseDomain                               from 'parse-domain'
import { createStore }                           from 'redux'
import { store }                                 from 'lib/store'
import { reducers }                              from 'lib/store/reducers'
import { enqueuePendingCnxs, enqueuePendingTxs } from 'lib/store/actions'
import { account, connection, transaction }      from 'lib/storage'

export async function initOrRedirect (render) {
  const deviceAddress = await account.address.device();
  const pendingCnxs   = await connection.pending.get();
  const pendingTxs    = await transaction.get();

  if (deviceAddress && pendingCnxs.length > 0)
    store.dispatch(enqueuePendingCnxs(pendingCnxs));
  else if (deviceAddress && pendingTxs.length > 0)
    store.dispatch(enqueuePendingTxs(pendingTxs));
  else if (deviceAddress)
    chrome.tabs.create({ 'url': process.env.POPLOCKER_WALLET_URL });

  return render(store);
}

export function initOptions (render) {
  return render(createStore(reducers, {page: 'options'}));
}

export const badge = {
  set cnxs (value) {
    this.color = '#f48f42';
    this.text = `${value}`;
  },

  set txs (value) {
    this.color = '#386BE1';
    this.text = `${value}`;
  },

  set text(text) {
    chrome.browserAction.setBadgeText({ text });
  },

  set color(value) {
    chrome.browserAction.setBadgeBackgroundColor({ color: value });
  },

  reset () {
    this.text = '';
  },

  warning () {
    this.color = '#FF0054';
    this.text  = '!';
  }
}

export function lockerRedirect () {
  chrome.tabs.create({ 'url': process.env.POPLOCKER_WALLET_URL + process.env.SMARTLOCKER_PATH});
}

export function fixedEth (bn) {
  return BigNumber(bn.toString(10)).dividedBy('1e13')
           .integerValue(BigNumber.ROUND_CEIL)
           .dividedBy('1e5').toFixed();
}

export function toHex (bignumber) {
  return '0x' + bignumber.toString(16);
}

export function getDomain (origin) {
  const parts = parseDomain(origin, { customTlds: /localhost/ });
  return parts? Object.values(parts).filter(i => i != "").reverse().join('.') : null;
}
