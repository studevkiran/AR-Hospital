import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Doctors from '@/components/Doctors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedPlusBackground from '@/components/AnimatedPlusBackground'
import BloodCursor from '@/components/BloodCursor'
import MobileAmbulance from '@/components/MobileAmbulance'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-[#FFE4CC]/30 to-[#FFF8F0] relative overflow-hidden">
      <AnimatedPlusBackground />
      <BloodCursor />
      <Navbar />
      <MobileAmbulance />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </main>
  )
}
