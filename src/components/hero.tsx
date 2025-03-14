import { useEffect, useRef } from "react"

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-orange-500/20 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-medium text-emerald-400 animate-fadeIn">Olá, eu sou</h2>
            <h1 className="text-5xl md:text-7xl font-bold animate-slideUp">
              <span className="block">DESENVOLVEDOR</span>
              <span className="block text-emerald-400">CRIATIVO</span>
            </h1>
            <p className="text-xl text-gray-300 animate-fadeIn animation-delay-500">
              Transformando ideias em experiências digitais excepcionais
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn animation-delay-1000">
              <a
                href="#projetos"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border border-white hover:border-emerald-400 hover:text-emerald-400 font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-fadeIn animation-delay-500">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="../../public/adriel.jpg"
                  alt="Adriel photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black px-6 py-2 rounded-full text-5xl font-bold border border-emerald-400">
                01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

