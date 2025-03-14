import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    { icon: "📧", title: "Email", value: "adrielitamar@gmail.com" },
    { icon: "📱", title: "Telefone", value: "+55 (63) 99226-9961" },
    { icon: "📍", title: "Localização", value: "Palmas, TO, Brasil" },
    { icon: "🌐", title: "Website", value: "www.seusite.com" },
  ]

  const socialMedia = [
    { name: "GitHub", url: "https://github.com/seuusuario", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/seuusuario", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/seuusuario", icon: "twitter" },
    { name: "Instagram", url: "https://instagram.com/seuusuario", icon: "instagram" },
  ]

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Vamos trabalhar juntos? Entre em contato comigo para discutirmos seu projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Informações de Contato</h3>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-emerald-400">{item.title}</h4>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Me Siga nas Redes Sociais</h3>
              <div className="flex gap-4">
                {socialMedia.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Envie uma Mensagem</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

