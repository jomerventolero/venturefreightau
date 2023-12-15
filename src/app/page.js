import CardCollection from '@/components/CardCollection'
import ImageSlider from '@/components/ImageSlider'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <main className="bg-white w-screen h-screen">
        <Navbar />
        <ImageSlider />
        <CardCollection />
      </main>
    </>
  )
}
