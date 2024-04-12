import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = 'df2358cb1158972011d1a93dde013704'

// 2. Set chains
const chain = {
    chainId: 80001,
    name: 'BNB testnet',
    currency: 'BNB',
    explorerUrl: 'https://testnet.bscscan.com',
    rpcUrl: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545'
}

// 3. Create a metadata object
const metadata = {
    name: 'Zorotocol',
    description: 'Zorotocol Proxy',
    url: 'https://zorotocol.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    metadata,
})

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains: [chain],
    projectId,
})

