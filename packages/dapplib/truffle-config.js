require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stool rice stereo smile guess kangaroo army genuine'; 
let testAccounts = [
"0xd92647d49a53a7a0d1be2b2b956568a5c14dcbd9b0bc94840506b13f7b0526bf",
"0x791017b56254426b7b56be4d4b0c3338b75486d91d6761924dce7a4632bd2fa3",
"0x641d68de2091eb72fa42e925745d68024044c79d30629bbb2530ec6f1fe2f901",
"0x0fd088396c9cb8fb6ac8b49ecb4dabf8810b79551bb384b10fe6c8763190ec34",
"0x2b96dda1c95f83a844f53da3427393440d0900e369b5e209a76907ff2d7200c8",
"0x352cb0333fd28f2cab8afcbc517b2e0647575b1860577e52b4f64ef13c1fe80b",
"0xab6e8df20bcc66dc40058daa9de8f0b6caf203887a40d0fe828fea5638b8c262",
"0xc4018ef5f61d840949908669b4735897d04aaed151c7693397683320fadb2151",
"0x36014bb5b8381828669e41efaee4cde3775f447bb60c9ac98798c4c391fc7851",
"0xfe9080ef99027899057d301310d077744804a6d742f54b73e14247754bd00f2c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


