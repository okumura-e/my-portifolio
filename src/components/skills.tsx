import { useEffect, useRef } from "react"

export default function Skills() {
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

  const frontendSkills = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "JavaScript", level: 100 },
    { name: "TypeScript", level: 100 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "Firebase", level: 75 },
    { name: "REST API", level: 85 },
    { name: "GraphQL", level: 70 },
  ]

  const otherSkills = [
    "Git & GitHub",
    "Responsive Design",
    "UI/UX Principles",
    "Performance Optimization",
    "SEO Basics",
    "Agile/Scrum",
    "Testing (Jest)",
    "Docker Basics",
  ]

  return (
    <section id="habilidades" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Tecnologias e ferramentas que domino para criar soluções digitais excepcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Frontend</h3>

            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transform origin-left transition-all duration-1000 ease-out"
                      style={{ width: "0%" }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Backend</h3>

            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transform origin-left transition-all duration-1000 ease-out"
                      style={{ width: "0%" }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Outras Habilidades</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-emerald-400 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

