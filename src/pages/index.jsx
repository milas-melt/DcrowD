import Head from 'next/head'
import React from "react";

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { gql } from "@apollo/client";
import client from "./apollo-client";
import Link from 'next/link'
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    {
      activeProjects(where: { funded: false }) {
        projectId
        creator
        expires
        funded
        goal
        balance
        uri
      }
    }
    `,
  });

  return {
    props: {
      t_projects: data
    },
 };
}



export default function Home({t_projects}) {
  console.log(t_projects)
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
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />

        <Faqs />
      </main>
      <Footer />
    </>
  )
}
