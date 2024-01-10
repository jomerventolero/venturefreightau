"use client"
import CardCollection from '@/components/CardCollection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import LandingSection from '@/components/LandingSection'
import RequestQuote from '@/components/RequestQuote'
import BoxCollection from '@/components/BoxCollection'
import { useRouter } from "next/navigation";
import Loader from '@/components/Loader'

export default function Home() {
  const router = useRouter()

  const isLoading = router.isFallback || router.isReady;
  return (
    <>
      <main className="bg-white w-screen h-screen overflow-x-hidden">
        <Navbar />
        <ImageSlider />
        <BoxCollection />
        <LandingSection />
        <CardCollection />
        <RequestQuote />
        <Footer />
      </main>
      {isLoading && <Loader />}
    </>
  )
}
