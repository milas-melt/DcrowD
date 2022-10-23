import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import logoDcrowD from '@/images/logos/dcrowd.svg'
import { Header } from '@/components/Header'
import { ethers } from 'ethers'
import ConnectWallet from '../components/ConnectWallet.jsx'

async function handleConnectWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
  // Prompt user for account connections
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  console.log('Account:', await signer.getAddress())
}

// If you don't specify a //url//, Ethers connects to the default
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/yZK8rsR8iPy1ET2_EkACVEI9Dotd2XO4')

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile - DcrowD</title>
      </Head>
      <Header />
      <main>
      <ConnectWallet />
      </main>
    </>
  )
}
