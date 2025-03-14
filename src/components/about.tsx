import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Conheça um pouco mais sobre minha jornada e paixão pelo desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-emerald-400">Quem Sou Eu</h3>
            <p className="text-gray-300">
              Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e funcionais. Com experiência em
              desenvolvimento web e mobile, busco sempre entregar produtos de alta qualidade que atendam às necessidades
              dos usuários e clientes.
            </p>
            <p className="text-gray-300">
              Minha jornada na programação começou há 4 anos, e desde então venho aprimorando minhas habilidades e
              conhecimentos para me tornar um profissional mais completo e versátil.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="font-medium">Nome: Adriel</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="font-medium">Idade: 22 anos</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="font-medium">Localização: Palmas TO</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <p className="font-medium">Disponível: Sim</p>
              </div>
            </div>

            <a
              href="#contato"
              className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-on-scroll opacity-0">
            {[
              { title: "Experiência", value: "4+ Anos", icon: "💼" },
              { title: "Projetos", value: "10+", icon: "🚀" },
              { title: "Clientes", value: "5+", icon: "👥" },
              { title: "Formação", value: "Bacharel em Sistemas de Informação", icon: "🎓" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-emerald-400 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

