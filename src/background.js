import { account, save } from 'lib/storage'
import { dispatchRpc, decorate } from 'lib/rpc'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.port == 'background') {
    switch (message.type) {

      case 'ACCOUNT_GEN':
        account.generate(message.secret)
          .then(save)
          .then(sendResponse);
        break;

      case 'ETH_RPC':
        dispatchRpc(message)
          .then(r => decorate(message, r))
          .then(sendResponse)
        break;
    }
    return true;
  }
});
