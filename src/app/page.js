"use client"
import CardCollection from '@/components/CardCollection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import LandingSection from '@/components/LandingSection'
import BoxCollection from '@/components/BoxCollection'
import Loader from '@/components/Loader'
import Head from 'next/head'

import { useRouter } from "next/navigation";
import { CardStackDemo } from '@/components/CardStackDemo'

export default function Home() {
  const router = useRouter()

  const isLoading = router.isFallback || router.isReady;
  return (
    <>
      <Head>
        <title>Venture Freight Australia</title>
        <meta name="description" content="Venture Freight Australia - Your reliable partner for freight forwarding services. We provide documentation advice, packing services, warehousing, and more to meet your shipping needs." />
      </Head>
      <main className="bg-white w-screen h-screen overflow-x-hidden">
        <Navbar />
        <ImageSlider />
        <BoxCollection />
        <LandingSection />
        <CardCollection />
        <CardStackDemo />
        <Footer />
      </main>
      {isLoading && <Loader />}
    </>
  )
}
