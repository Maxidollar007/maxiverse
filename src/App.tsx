import { useTheme } from "./context/themeContext"
import "remixicon/fonts/remixicon.css";
import { contactMethods, projects, services, skillCategories, socialLinks } from "./utils/helper";
import { Card } from "./components/card";
import { ProgressBar } from "./components/progressBar";
import { useState } from "react";
import type { FormData } from "./types";
function App() {

  const {theme , toogleTheme}=useTheme()

  const [formData,setFormData]=useState<FormData>({
    name:"",
    email:"",
    message:""
  })

  const  handleChange=(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement> )=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  return (
    <>
    <header  className={` ${theme=="light" ? "light" :'dark'} w-full h-dvh  bg-(--background) transition-all duration-700 `}>
      <div className="w-[80%] mx-auto p-4 " >
        <div className="flex justify-between items-center shadow-md   ">
          <div className=" text-3xl text-(--text) font-bold shadow-md   ">
            MD 
          </div>
          <nav className=" flex justify-center font-bold items-center transition-all duration-700 p-4 rounded-md text-(--primary)  backdrop-blur-md bg-(--background) ">
            <ul className=" flex gap-6 text-xl  ">
              <a href="#acceuil" className="hover:text-(--primary-hover) border px-6 py-3 rounded-md hover:rounded-xl border-(--border)   " >Acceuil</a>
              <a href="#services" className="hover:text-(--primary-hover) border px-6 py-3 rounded-md hover:rounded-xl border-(--border) ">Services</a>
              <a href="#realisations" className="hover:text-(--primary-hover) border px-6 py-3 rounded-md hover:rounded-xl border-(--border) ">Realisation</a>
              <a href="#contacts" className="hover:text-(--primary-hover) border px-6 py-3 rounded-md hover:rounded-xl border-(--border) ">Contact</a>
              <a onClick={toogleTheme}  className={`  ${theme=="light" ? "dark" :'light'} cursor-pointer hover:text-(--primary-hover) border border-(--background) hover:border px-6 py-3 rounded-md hover:rounded-xl hover:border-(--border) `}>
                {
                  theme=='light' ? "Light ": "Dark"
                }
              </a>
            </ul>
          </nav>
        </div>
        <div id="acceuil" className="mt-40 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" flex flex-col gap-2 ">
              <h1 className="text-(--primary) text-7xl font-bold " >
                Maxi Dollar
              </h1>
              <h2 className="text-3xl text-(--text) mt-4 w-[60%] ">
                Developpeur full stack, je crée des application web et mobiles pensées pour être simples , performantes  et adaptées aux besoins  des utilisateurs  
              </h2>
              <h3 className=" mt-4 text-(--text-muted) text-2xl  w-1/2 ">
                <span className="font-medium" >Mon objectif</span> : Construire des solutions simples, éfficaces et adaptées aux besoins réels.
              </h3>
              <div className="mt-6 flex gap-4 items-center">
                <div className="flex gap-4 items-center text-xl font-medium bg-(--primary) text-(--text) hover:bg-(--primary-hover) px-6 py-3 rounded-md transition-all duration-700 cursor-pointer ">
                  {/* <i></i> */}
                  <button type="button" className="cursor-pointer">Me contacter</button>
                </div>
                <div className="flex gap-4 font-medium items-center border text-xl border-(--border) text-(--primary) hover:text-(--primary-hover) px-6 py-3 rounded-md transition-all duration-700 cursor-pointer ">
                  <i></i>
                  <button className="cursor-pointer">Telecharger mon CV</button>
                </div>
              </div>
            </div>
            <div className="h-100 w-150 border border-(--primary)  rounded-full  shadow-(--primary) ">
              <img src="src/image/profile.png" className="h-full w-full object-cover rounded-full " alt="" />
            </div>
          </div>
          <div className={`${theme=='light' ? "text-black bg-white shadow-md" : "text-white bg-gray-900"} w-1/2   h-fit p-4 rounded-md mt-10 `}>
            <div className="flex gap-4">
              <div className="w-5 h-5 rounded-full bg-red-500">
              </div>
              <div className="w-5 h-5 rounded-full bg-blue-500">
              </div>
              <div className="w-5 h-5 rounded-full bg-green-500">
              </div>
              <span className="ml-4 text-green-400 font-medium">
                Maxi Dollar@MAXIDOLLAR
              </span>
            </div>
            <div className={` ${theme=="light" && "bg-gray-200"} bg-black/40 text-lg h-40 mt-4 p-4 flex gap-4`}>
            <span className="text-blue-400">
              $
            </span>
            <span className="font-semibold">
              Les qualités de MAxi Dollar
            </span>
            </div>
          
          </div>

        </div>
      </div>
    </header>

    <div id="services" className={` ${theme=="light" ? "light" :'dark'} w-full h-dvh  bg-(--background) transition-all duration-700 `}>
      <section id="services" className="w-[90%] md:w-[80%] mx-auto py-20">
        <div className="text-center mb-14">
          <span className="text-(--primary) font-mono uppercase tracking-wider text-sm">
            Ce que je propose
          </span>
          <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
            Mes services
          </h2>
          <p className="text-(--text-muted) text-lg mt-4 max-w-2xl mx-auto">
            Des solutions complètes, du concept au déploiement, adaptées à vos
            besoins réels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>

    {/* Mes compétences  */}
    <div className={` ${theme=="light" ? "light" :'dark'} w-full h-fit  bg-(--background) transition-all duration-700 `}>
        <section id="skills" className="w-[90%] md:w-[80%] mx-auto py-20">
        <div className="text-center mb-14">
          <span className="text-(--primary) font-mono uppercase tracking-wider text-sm">
            Stack technique
          </span>
          <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
            Compétences
          </h2>
          <p className="text-(--text-muted) text-lg mt-4 max-w-2xl mx-auto">
            Les technologies que j'utilise au quotidien pour construire des
            applications fiables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-(--border) bg-(--surface) p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-2 pb-4 border-b border-(--border)">
                <span className="flex items-center justify-center h-10 w-10 rounded-lg bg-(--background) border border-(--border) text-(--primary) text-xl">
                  <i className={category.icon} />
                </span>
                <h3 className="text-lg md:text-xl font-bold text-(--text)">
                  {category.title}
                </h3>
              </div>

              <div className="divide-y divide-(--border)">
                {category.skills.map((skill) => (
                  <ProgressBar key={skill.title} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Mes realisation  */}
    <div id="realisations" className={` ${theme=="light" ? "light" :'dark'} w-full h-fit  bg-(--background) transition-all duration-700 `}>
      <section id="realisations" className="w-[90%] md:w-[80%] mx-auto py-20">
      <div className="text-center mb-14">
        <span className="text-(--primary) font-mono uppercase tracking-wider text-sm">
          Portfolio
        </span>
        <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
          Réalisations
        </h2>
        <p className="text-(--text-muted) text-lg mt-4 max-w-2xl mx-auto">
          Une sélection de projets récents, du concept à la mise en
          production.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group rounded-2xl border border-(--border) bg-(--surface) overflow-hidden hover:border-(--primary) transition-colors duration-500 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className={`flex flex-col ${project.featured ? "lg:flex-row" : ""}`}>
              
              <div
                className={`relative bg-(--background) border-b lg:border-b-0 border-(--border) flex items-center justify-center overflow-hidden ${
                  project.featured ? "lg:w-1/2 lg:border-r h-56 lg:h-auto" : "h-48"
                }`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <i className="ri-image-2-line text-5xl text-(--text-muted)" />
                )}

                <span
                  className={`absolute top-4 left-4 flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${
                    project.status === "Terminé"
                      ? "bg-(--success)/10 text-(--success) border-(--success)/30"
                      : "bg-(--primary)/10 text-(--primary) border-(--primary)/30"
                  }`}
                >
                  <i
                    className={
                      project.status === "Terminé"
                        ? "ri-checkbox-circle-fill"
                        : "ri-loader-4-line"
                    }
                  />
                  {project.status}
                </span>
              </div>

              
              <div
                className={`p-6 md:p-7 flex flex-col gap-4 ${
                  project.featured ? "lg:w-1/2" : ""
                }`}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-(--text) mb-2">
                    {project.title}
                  </h3>
                  <p className="text-(--text-muted) text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-(--text)"
                    >
                      <i className="ri-arrow-right-s-line text-(--primary) mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-(--primary) bg-(--primary)/10 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.liveUrl || project.codeUrl) && (
                  <div className="flex gap-3 pt-2 border-t border-(--border) mt-1">
                    {project.liveUrl && (
                      <a
                      href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-(--text) hover:text-(--primary) transition-colors duration-300 pt-3"
                      >
                        <i className="ri-external-link-line" />
                        Voir le projet
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-(--text) hover:text-(--primary) transition-colors duration-300 pt-3"
                      >
                        <i className="ri-github-fill" />
                        Code source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section> 
    </div>
    <div className={` ${theme=="light" ? "light" :'dark'} w-full h-fit bg-(--background) transition-all duration-700 `}>
      <section
      id="contacts"
      className={`${theme === "light" ? "light" : "dark"} w-full bg-(--background) transition-colors duration-700`}
    >
      <header className="border-b border-(--border)">
        <div className="w-[90%] md:w-[80%] mx-auto flex items-center gap-4 py-6">
          <div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-xl text-(--primary) text-2xl backdrop-blur-md bg-(--surface) border border-(--border)">
            <i className="ri-chat-3-line" />
          </div>
          <div>
            <div className="text-xl md:text-2xl text-(--text) font-bold">
              Contact
            </div>
            <div className="text-sm md:text-base text-(--text-muted)">
              Comment me contacter
            </div>
          </div>
        </div>
      </header>

      <div className="w-[90%] md:w-[80%] mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-start">
          
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="text-(--primary)">
              <h1 className="text-3xl md:text-4xl font-bold">MD</h1>
              <span className="text-(--text-muted)">
                Discutons de votre prochain projet
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {contactMethods.map((method) => (
                <div key={method.title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 shrink-0 rounded-xl text-(--primary) text-xl backdrop-blur-md bg-(--surface) border border-(--border)">
                    <i className={method.icon} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-base md:text-lg text-(--text) font-semibold">
                      {method.title}
                    </div>
                    <p className="text-sm text-(--text-muted)">
                      {method.detail}
                    </p>
                    {method.href && (
                    <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                        className="underline underline-offset-4 mt-1 text-(--primary) hover:text-(--primary-hover) transition-colors duration-300 text-sm w-fit"
                      >
                        {method.actionLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-(--primary) mb-4 font-bold text-xl">
                Suivez-moi
              </h2>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="h-10 w-10 flex justify-center items-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:text-(--primary) hover:border-(--primary) transition-colors duration-300"
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          <form
            className="w-full lg:w-3/5 bg-(--surface) border border-(--border) p-6 md:p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl md:text-3xl text-(--text) font-bold mb-8 text-center">
              Laissez-moi votre avis
            </h2>

            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm text-(--text-muted)">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Votre nom..."
                  className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full py-3 px-3 transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-(--text-muted)">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Votre email..."
                  className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full py-3 px-3 transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm text-(--text-muted)">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={5}
                  placeholder="Entrez votre message..."
                  className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full p-3 resize-none transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-(--primary) hover:bg-(--primary-hover) disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-3.5 rounded-full flex justify-center items-center gap-2 font-bold cursor-pointer transition-colors duration-300"
              >
                {status === "sending" && <i className="ri-loader-4-line animate-spin" />}
                {status === "sent" ? "Message envoyé ✓" : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>

   <footer className={`${theme == "light" ? "light" : "dark"  }`}>
      <div className="w-[90%] md:w-[80%] mx-auto py-8 flex flex-col  sm:flex-row gap-4 justify-between items-center border-t border-(--border)">
        <div className="text-sm md:text-base text-(--text-muted) font-medium">
          © {new Date().getFullYear()} Maxi Dollar. Tous droits réservés.
        </div>

        <div className="flex gap-3 items-center">
          {socialLinks.map((social) => (
            
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="h-10 w-10 flex justify-center items-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:text-(--primary) hover:border-(--primary) transition-colors duration-300"
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>


    </>
  )
}

export default App
