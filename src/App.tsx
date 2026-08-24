import { useTheme } from "./context/themeContext"
import profile from './image/profile.webp'
import emailjs from "@emailjs/browser";
import "remixicon/fonts/remixicon.css";
import { Card } from "./components/card";
import { ProgressBar } from "./components/progressBar";
import {useState } from "react";
import type { FormData } from "./types";
import { validationSchemaInformation } from "./validation/validationSchemaInformation";
import * as yup from 'yup';
import { contactMethods, projects, quality, services, skillCategories, socialLinks, useTypingEffect } from "./utils/helper";
import { motion } from 'framer-motion';
function App() {

  const {theme , toogleTheme}=useTheme()
  const [error,setError]=useState<Record<string, string>>({});
  const [status,setStatus]=useState< "Envoyé" | "ok" | "idle">("idle")

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

  const handleSubmit=async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    setStatus("Envoyé")
    try{
      await validationSchemaInformation.validate(formData, { abortEarly: false });
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY

        }
      )
      setStatus("ok")
      setFormData({
        name:"",
        email:"",
        message:""
      })

      setTimeout(()=>{
        setStatus("idle")
      },500)
    }catch (e) {
      const validationError = e as yup.ValidationError;
      const newError: Record<string, string> = {};

      validationError.inner.forEach((err: yup.ValidationError) => {
        if (err.path) {
          newError[err.path] = err.message;
        }
      });
      setError(newError);
      console.log(error)
    }
    }
    


  return (
    <>
    <div className={`${theme === "light" ? "light" : "dark"} min-h-screen w-full bg-(--background) text-(--text) transition-all duration-700`}>
  
  <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-(--background)/80 border-b border-(--border)">
    <div className="w-[90%] md:w-[80%] mx-auto py-4 flex flex-wrap justify-between items-center gap-4">
      <div className="text-3xl text-(--text) font-bold tracking-tight">
        MD
      </div>
      <nav className="font-bold rounded-md text-(--primary)">
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base">
          <li>
            <a href="#acceuil" className="block hover:text-(--primary-hover) border px-3 sm:px-5 py-2 rounded-md hover:rounded-xl border-(--border) transition-all duration-300">
              Accueil
            </a>
          </li>
          <li>
            <a href="#services" className="block hover:text-(--primary-hover) border px-3 sm:px-5 py-2 rounded-md hover:rounded-xl border-(--border) transition-all duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#realisations" className="block hover:text-(--primary-hover) border px-3 sm:px-5 py-2 rounded-md hover:rounded-xl border-(--border) transition-all duration-300">
              Réalisations
            </a>
          </li>
          <li>
            <a href="#contacts" className="block hover:text-(--primary-hover) border px-3 sm:px-5 py-2 rounded-md hover:rounded-xl border-(--border) transition-all duration-300">
              Contact
            </a>
          </li>
          <li>
            <button 
              type="button"
              onClick={toogleTheme} 
              aria-label="Toggle Theme"
              className="flex items-center justify-center cursor-pointer hover:text-(--primary-hover) border border-(--border) px-4 py-2 rounded-md hover:rounded-xl transition-all duration-300"
            >
              {theme === 'light' ? <i className="ri-sun-line text-lg"></i> : <i className="ri-moon-line text-lg"></i>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="acceuil" className="w-[90%] md:w-[80%] mx-auto pt-12 pb-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">

    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
      <motion.div 
      initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2}}
      className="flex flex-col gap-4 w-full lg:w-3/5 text-left">
        <h1 className="text-(--primary) text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          Maxi Dollar
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-(--text) font-medium leading-relaxed">
          Développeur Full Stack, je crée des applications web et mobiles pensées pour être simples, performantes et adaptées aux besoins des utilisateurs.
        </h2>
        <h3 className="text-(--text-muted) text-lg sm:text-xl">
          <span className="font-semibold text-(--primary)">Mon objectif</span> : Construire des solutions simples, efficaces et adaptées aux besoins réels.
        </h3>

        <div className="mt-6 flex flex-wrap gap-4 items-center">
          <a href="#contacts" className="flex items-center gap-3 font-medium bg-(--primary) text-(--text) hover:bg-(--primary-hover) px-6 py-3.5 rounded-md transition-all duration-300 cursor-pointer shadow-md">
            <i className="ri-phone-line text-lg"></i>
            <span>Me contacter</span>
          </a>
          <button type="button" className="flex items-center gap-3 font-medium border border-(--border) text-(--primary) hover:text-(--primary-hover) hover:border-(--primary) px-6 py-3.5 rounded-md transition-all duration-300 cursor-pointer">
            <i className="ri-download-line text-lg"></i>
            <span>Télécharger mon CV</span>
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{scale:0.5}}
        animate={{scale:1}}
        transition={{
          type:"spring",
          stiffness:400,
          damping:8
        }}


      className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 shrink-0 border-2 border-(--primary) rounded-full shadow-lg p-2 relative">
        <img src={profile} className="h-full w-full object-cover rounded-full" alt="Maxi Dollar" />
      </motion.div>

    </div>

    <div className={`w-full lg:w-2/3 max-w-2xl rounded-xl p-4 mt-12 shadow-xl border border-(--border) ${theme === 'light' ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
        <span className="ml-3 text-xs sm:text-sm text-green-400 font-mono">
          Maxi Dollar@MAXIDOLLAR
        </span>
      </div>
      <div className={`rounded-lg text-base sm:text-lg min-h-24 p-4 flex gap-3 font-mono ${theme === "light" ? "bg-gray-100" : "bg-black/50"}`}>
        <span className="text-blue-400 font-bold">$</span>
        <span className="font-medium">
          {useTypingEffect(quality)}
        </span>
      </div>
    </div>
  </section>

  <section id="services" className="w-[90%] md:w-[80%] mx-auto py-20 border-t border-(--border)">
    <div className="text-center mb-14">
      <span className="text-(--primary) font-mono uppercase tracking-wider text-sm font-semibold">
        Ce que je propose
      </span>
      <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
        Mes services
      </h2>
      <p className="text-(--text-muted) text-base sm:text-lg mt-4 max-w-2xl mx-auto">
        Des solutions complètes, du concept au déploiement, adaptées à vos besoins réels.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Card key={service.title} {...service} />
      ))}
    </div>
  </section>

  <section id="skills" className="w-[90%] md:w-[80%] mx-auto py-20 border-t border-(--border)">
    <div className="text-center mb-14">
      <span className="text-(--primary) font-mono uppercase tracking-wider text-sm font-semibold">
        Stack technique
      </span>
      <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
        Compétences
      </h2>
      <p className="text-(--text-muted) text-base sm:text-lg mt-4 max-w-2xl mx-auto">
        Les technologies que j'utilise au quotidien pour construire des applications fiables.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="rounded-2xl border border-(--border) bg-(--surface) p-6 md:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-(--border)">
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

  <section id="realisations" className="w-[90%] md:w-[80%] mx-auto py-20 border-t border-(--border)">
    <div className="text-center mb-14">
      <span className="text-(--primary) font-mono uppercase tracking-wider text-sm font-semibold">
        Portfolio
      </span>
      <h2 className="text-(--text) text-3xl md:text-5xl font-bold mt-2">
        Réalisations
      </h2>
      <p className="text-(--text-muted) text-base sm:text-lg mt-4 max-w-2xl mx-auto">
        Une sélection de projets récents, du concept à la mise en production.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project) => (
        <motion.article
        initial={{opacity:0, x:70}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
    transition={{duration:1}}
          key={project.title}
          className={`group rounded-2xl border border-(--border) bg-(--surface) overflow-hidden hover:border-(--primary) transition-all duration-300 shadow-sm hover:shadow-md ${
            project.featured ? "lg:col-span-2" : ""
          }`}
        >
          <div className={`flex flex-col ${project.featured ? "lg:flex-row" : ""}`}>
            
            <div
              className={`relative bg-(--background) border-b lg:border-b-0 border-(--border) flex items-center justify-center overflow-hidden ${
                project.featured ? "lg:w-1/2 lg:border-r min-h-0px" : "h-56"
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                <i className={project.status === "Terminé" ? "ri-checkbox-circle-fill" : "ri-loader-4-line animate-spin"} />
                {project.status}
              </span>
            </div>

            <div className={`p-6 md:p-8 flex flex-col justify-between gap-4 ${project.featured ? "lg:w-1/2" : ""}`}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-(--text) mb-2">
                  {project.title}
                </h3>
                <p className="text-(--text-muted) text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2 my-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-(--text)">
                    <i className="ri-arrow-right-s-line text-(--primary) mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
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
                <div className="flex flex-wrap gap-4 pt-4 border-t border-(--border) mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-(--text) hover:text-(--primary) transition-colors"
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
                      className="flex items-center gap-1.5 text-sm font-medium text-(--text) hover:text-(--primary) transition-colors"
                    >
                      <i className="ri-github-fill" />
                      Code source
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>
        </motion.article>
      ))}
    </div>
  </section>

  <section id="contacts" className="w-full border-t border-(--border) py-16">
    <div className="w-[90%] md:w-[80%] mx-auto flex items-center gap-4 mb-12">
      <div className="flex items-center justify-center h-14 w-14 shrink-0 rounded-xl text-(--primary) text-2xl bg-(--surface) border border-(--border)">
        <i className="ri-chat-3-line" />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl text-(--text) font-bold">Contact</h2>
        <p className="text-sm md:text-base text-(--text-muted)">Comment me contacter</p>
      </div>
    </div>

    <div className="w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        <div className="w-full lg:w-2/5 flex flex-col">
          <div className="text-(--primary)">
            <h3 className="text-3xl md:text-4xl font-bold">MD</h3>
            <span className="text-(--text-muted) block mt-1">Discutons de votre prochain projet</span>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 shrink-0 rounded-xl text-(--primary) text-xl bg-(--surface) border border-(--border)">
                  <i className={method.icon} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-base md:text-lg text-(--text) font-semibold">{method.title}</div>
                  <p className="text-sm text-(--text-muted)">{method.detail}</p>
                  {method.href && (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      className="underline underline-offset-4 mt-1 text-(--primary) hover:text-(--primary-hover) transition-colors text-sm w-fit"
                    >
                      {method.actionLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-(--primary) mb-4 font-bold text-lg">Suivez-moi</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 flex justify-center items-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:text-(--primary) hover:border-(--primary) transition-colors"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="w-full lg:w-3/5 bg-(--surface) border border-(--border) p-6 sm:p-8 rounded-2xl shadow-md flex flex-col gap-5">
          <h3 className="text-2xl md:text-3xl text-(--text) font-bold mb-4 text-center">
            Laissez-moi votre avis
          </h3>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-(--text-muted)">Nom</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Votre nom..."
              className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full py-3 px-4 transition-colors"
            />
            {error && error.name && <p className="text-xs text-red-500 mt-1">{error.name}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-(--text-muted)">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Votre email..."
              className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full py-3 px-4 transition-colors"
            />
            {error && error.email && <p className="text-xs text-red-500 mt-1">{error.email}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-(--text-muted)">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows={5}
              placeholder="Entrez votre message..."
              className="rounded-md text-(--text) bg-(--background) border border-(--border) focus:border-(--primary) focus:outline-none w-full p-4 resize-none transition-colors"
            />
            {error && error.message && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "Envoyé"}
            className="mt-2 bg-(--primary) hover:bg-(--primary-hover) disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-full flex justify-center items-center gap-2 font-bold cursor-pointer transition-colors shadow-md"
          >
            {status === "Envoyé" && <i className="ri-loader-4-line animate-spin" />}
            {status === "ok" ? "Message envoyé" : "Envoyer"}
          </button>
        </form>

      </div>
    </div>
  </section>

  <footer className="w-full border-t border-(--border) py-8">
    <div className="w-[90%] md:w-[80%] mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
      <div className="text-sm text-(--text-muted) font-medium">
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
            className="h-10 w-10 flex justify-center items-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:text-(--primary) hover:border-(--primary) transition-colors"
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </div>
  </footer>

</div>
    </>
  )
}

export default App
