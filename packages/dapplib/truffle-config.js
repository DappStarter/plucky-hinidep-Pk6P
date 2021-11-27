require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name reflect pizza snake good clog army gauge'; 
let testAccounts = [
"0x2b18995aaf4927c6b2dae223ffc00b5a70aee4b97476be6f2a94958355a3a9f8",
"0x70d4d26c5fc9629629a4d2f37f7ee3906737fcc1c7d1bb5aa86d2e4234c09428",
"0xed3a99888215c6c547904dd3da3de1ff2f91d27ab54cb7c1b4a8ff1544395972",
"0xc36a86de10528f8df8980622bd7dc0b23480de91c34040ed6a12d57cb76f09c0",
"0x6c6bb84a28629a02cd3d9371954277bab6cad10cce6d8435f7b1ceac60fa1d89",
"0x0d7c497ddc90b93e451ee46f79680b71290ec4108542bcafc0b3d5cbec7d592f",
"0xedb2ea89cd4cdbbcd26bb1d10baadda0e9b8df46c3bf3dfc74fd1d48711d10c5",
"0x11eaf9fbcd0a2a919d2cfad727d90f2ba12caf23712da4dc642bbbfed5f2e65d",
"0x3971fc1247e386640b815415ca442f470465dc2a59d2a3595acff282b3397ae2",
"0xe183b23d2c364d3038843b3987d242f3cf43c793351adae12f21ed6a844b9bb6"
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


