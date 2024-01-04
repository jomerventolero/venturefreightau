import CardCollection from '@/components/CardCollection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import LandingSection from '@/components/LandingSection'
import RequestQuote from '@/components/RequestQuote'
import BoxCollection from '@/components/BoxCollection'

export default function Home() {
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
    </>
  )
}
