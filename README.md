PopLocker Browser Extension
============================

A Google Chrome/Chromium browser extension for the [PopLocker project](https://github.com/poplocker-dev/poplocker-dev.github.io/blob/master/README.md).

# Running and building instructions

Source code in "stable" condition is marked with version release tags.

Download [latest release](https://github.com/poplocker-dev/browser-extension/releases) or clone the repo and switch to latest release tag.

## Prerequisites

- nodejs
- npm
- [yarn](https://yarnpkg.com/en/docs/install)

## Building

To build and install clone the repo and within root directory issue:

```
$ yarn
```

next copy `.env.sample` to `.env` and update placeholder values. `RPC_URL` can be set to any Ethereum node - here are Ropsten and Mainnet nodes for convenience (however also see **Mainnet Disclaimer**):

https://mainnet.infura.io/v3/da2b4575adf34626a444ed36c11c1939
https://ropsten.infura.io/v3/da2b4575adf34626a444ed36c11c1939

finally:

```
$ npm run build
```
### Mainnet Disclaimer

The current version of PopLocker has no way to backup or recover keys (this will be possible soon in a future release with Universal Login functionality) therefore if using mainnet and PopLocker is uninstalled (or your device is lost) **you will lose access to your funds**. 

## Running in development mode

issue: 

```
$ npm run dev
```

# Instalation in the browser

In Google Chrome or Chromium open Menu ↦ More tools ↦ Extensions. 

Toggle "Developer Mode" in top right. Click "Load unpacked", open `dist/` directory of the extension's source tree. PopLocker should appear on the list of available extensions.

**If you use Metamask**: disable it otherwise it will clash with PopLocker.

