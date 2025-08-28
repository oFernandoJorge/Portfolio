"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Server } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Altura aproximada do header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const skills = {
    backend: ["Java", "Spring Boot", "C#", ".NET", "SQL", "PostgreSQL", "MySQL"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    tools: ["Git", "Docker", "Maven", "Visual Studio", "IntelliJ IDEA"],
  }

  const projects = [
    {
      title: "Sistema de Pagamentos",
      description:
        "O PicPay Simplificado é uma plataforma de pagamentos simplificada. Nela é possível depositar e realizar transferências de dinheiro entre usuários.",
      technologies: ["Java", "Spring Boot", "Maven"],
      github: "https://github.com/FJdevdev/picpaydesafio-simplificado",
    },
    {
      title: "Gerenciador de Tarefas",
      description:
        "Desafio de fazer um gerenciador de tarefas (to-do list) com React, permitindo adicionar, editar e remover tarefas.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/FJdevdev/Desafio-de-vaga-de-estagio",
    },
    {
      title: "Landinfg Page Comercial",
      description:
        "Landing page comercial para uma empresa do meu pai, desenvolvida com TypeScript, Tailwind CSS, Next.js.",
      technologies: ["TypeScript", "Next.js", "Lucide React"],
      github: "https://github.com/FJdevdev/tita-estofados-page",
    },
    {
      title: "API Gerenciadora de Tarefas",
      description:
        "Api RESTful para gerenciar tarefas, permitindo criar, ler, atualizar e deletar tarefas com Java, Spring Boot 3.5.5, JPA/Hibernate.",
      technologies: ["Java", "Spring Boot", "Spring Web", "H2 Database"],
      github: "https://github.com/FJdevdev/API-Task",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{"<Fernando Jorge />"}</h1>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("sobre")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Contato
              </button>
            </nav>
            <Button variant="outline" size="icon" onClick={toggleTheme} className="ml-4 bg-transparent">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Olá, eu sou <span className="text-blue-600 dark:text-blue-400">Fernando Jorge</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Estudante de Análise e Desenvolvimento de Sistemas
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Especializado em desenvolvimento back-end com Java, mas também apaixonado por criar experiências web
                completas. Sempre em busca de novos desafios e oportunidades de aprendizado.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Entre em Contato
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                  <a href="https://github.com/FJdevdev" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Sou estudante de Análise e Desenvolvimento de Sistemas com foco principal em desenvolvimento
                    back-end utilizando Java e Spring Boot. Tenho experiência sólida em desenvolvimento web com HTML,
                    CSS, JavaScript e React, além de conhecimentos em C# e .NET.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Minha paixão pela programação me leva a estar sempre aprendendo novas tecnologias e buscando as
                    melhores práticas de desenvolvimento. Acredito na importância de código limpo, arquitetura bem
                    estruturada e na colaboração em equipe.
                  </p>
                  <div className="flex space-x-4">
                    <Badge variant="secondary" className="text-sm">
                      <Database className="w-3 h-3 mr-1" />
                      Back-end Specialist
                    </Badge>
                    <Badge variant="secondary" className="text-sm">
                      <Globe className="w-3 h-3 mr-1" />
                      Full-stack Ready
                    </Badge>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Formação</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Análise e Desenvolvimento de Sistemas</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Unifametro • 2025 - 2027</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Certificações</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Java • Udemy</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">C# • Microsoft</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Programação FullStack • Rocketseat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Section */}
        <section id="habilidades" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="w-5 h-5 mr-2 text-blue-600" />
                      Back-end
                    </CardTitle>
                    <CardDescription>Desenvolvimento de APIs e sistemas robustos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-green-600" />
                      Front-end
                    </CardTitle>
                    <CardDescription>Interfaces modernas e responsivas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-600" />
                      Ferramentas
                    </CardTitle>
                    <CardDescription>Desenvolvimento e versionamento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos Section */}
        <section id="projetos" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo para discutirmos como
              posso contribuir com seu projeto!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="https://www.linkedin.com/in/fernando0jorg3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="https://github.com/FJdevdev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Modal de Contato */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Entre em Contato</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target as HTMLFormElement)
                  const nome = formData.get("nome")
                  const email = formData.get("email")
                  const mensagem = formData.get("mensagem")

                  const subject = `Contato do Portfólio - ${nome}`
                  const body = `Nome: ${nome}%0AEmail: ${email}%0A%0AMensagem:%0A${mensagem}`

                  window.open(`mailto:fernandojorgedossantosfilho@gmail.com?subject=${subject}&body=${body}`)
                  setIsContactModalOpen(false)
                }}
              >
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <div className="flex space-x-3">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Enviar Email
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsContactModalOpen(false)}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Fernando Jorge. Desenvolvido com Next.js e Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
