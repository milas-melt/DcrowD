import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/future/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import logoDcrowD from '@/images/logos/dcrowd.svg'

import { ethers } from 'ethers'
import ConnectWallet from '../components/ConnectWallet.jsx'
import Header from '../components/Header.jsx'

async function handleConnectWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
  // Prompt user for account connections
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  console.log('Account:', await signer.getAddress())
}

export default function Profile() {
  return (
    <>
      <Head>
        <title>DcrowD - Crowdfunding made simple for small everyone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      {/* <Header /> */}
      <ConnectWallet />
    </>
  )
}
