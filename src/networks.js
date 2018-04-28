module.exports = {
    vipstarcoin: {
        messagePrefix: '\x18VIPSTARCOIN Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x46,
        scriptHash: 0x32,
        wif: 0x80
    },
    vipstarcoin_testnet: {
        messagePrefix: '\x18VIPSTARCOIN Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x64,
        scriptHash: 0x6e,
        wif: 0xe4
    }
}
