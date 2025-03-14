import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState("all")

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

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Um site de e-commerce completo com carrinho de compras, pagamentos e painel de administração.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "App de Finanças",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "Aplicativo mobile para controle de finanças pessoais com gráficos e relatórios.",
      technologies: ["React Native", "Firebase", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Dashboard Administrativo",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Dashboard para gerenciamento de dados com múltiplos gráficos e visualizações.",
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Landing Page",
      category: "design",
      image: "/placeholder.svg?height=600&width=800",
      description: "Landing page moderna e responsiva para produto digital.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      github: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projetos" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">Confira alguns dos meus trabalhos mais recentes e relevantes.</p>
        </div>

        <div className="flex justify-center mb-12 animate-on-scroll opacity-0">
          <div className="flex flex-wrap gap-4 justify-center">
            {["all", "web", "mobile", "design"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter ? "bg-emerald-500 text-white" : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {filter === "all" ? "Todos" : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition-all duration-500 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-sm transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Projeto
                      </a>
                      <a
                        href={project.github}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Mais Projetos
          </a>
        </div>
      </div>
    </section>
  )
}

