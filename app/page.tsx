import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Doctors from '@/components/Doctors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedPlusBackground from '@/components/AnimatedPlusBackground'
import BloodCursor from '@/components/BloodCursor'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedPlusBackground />
      <BloodCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </main>
  )
}
