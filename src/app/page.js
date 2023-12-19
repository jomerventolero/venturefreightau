import CardCollection from '@/components/CardCollection'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import LandingSection from '@/components/LandingSection'
import Navbar from '@/components/Navbar'
import RequestQuote from '@/components/RequestQuote'

export default function Home() {
  return (
    <>
      <main className="bg-white w-screen h-screen overflow-x-hidden">
        <Navbar />
        <ImageSlider />
        <LandingSection />
        <CardCollection />
        <RequestQuote />
        <Footer />
      </main>
    </>
  )
}
