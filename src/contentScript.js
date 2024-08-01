'use strict';
import { bringInitContentScript } from "@bringweb3/sdk";

bringInitContentScript({
    iframeEndpoint: process.env.IFRAME_ENDPOINT,
    getWalletAddress: async () => { },// A function that returns the current wallet address
    promptLogin: async () => { },// A function that will prompt the user to login
    walletAddressListeners: [],// Array of strings with all event names that will indicate a change of the wallet address
});