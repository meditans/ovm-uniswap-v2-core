import { MockProvider } from 'ethereum-waffle'
import { waffleV2 } from '@eth-optimism/ovm-toolchain'

const getProvider = async () => {
  const providerOpts: any = {
    hardfork: 'istanbul',
    mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
    gasLimit: 9999999,
    allowUnlimitedContractSize: true
  }
  const provider: any = process.env.MODE === 'OVM' ? new waffleV2.MockProvider(providerOpts) : new MockProvider(providerOpts)
  return provider
}

export { getProvider }
