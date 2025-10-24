import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      <section id="home" className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-7xl font-bold text-gray-900 mb-6">
            AR Hospital
          </h1>
          <p className="text-4xl text-gray-600 mb-4">Healing Hands</p>
          <p className="text-2xl text-gray-500 mb-8">Personalized Care, Exceptional Outcomes</p>
          <p className="text-lg text-gray-400">Modern, professional website with salt & pepper theme ✨</p>
        </div>
      </section>
    </div>
  )
}
