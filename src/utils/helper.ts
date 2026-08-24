import { useEffect, useState } from "react";
import type { ContactMethod, Project, SocialLink } from "../types";
import gdp from '../image/gdp.webp'
import gds from '../image/gds.webp'
import gdt from '../image/gdt.webp'
import ogin from '../image/ogin.webp'
import port from '../image/port.webp'
import vete from '../image/vete.webp'
// les services que je propose
export const services = [
  {
    number: "01",
    icon: "ri-global-line",
    title: "Développement web",
    description:
      "Des sites et applications web pensés pour votre activité, de la vitrine simple à l'outil sur mesure.",
    features: [
      "Site vitrine",
      "Application web sur mesure",
      "Design responsive et accessible",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: "ri-smartphone-line",
    title: "Développement mobile",
    description:
      "Des applications mobiles natives et cross-platform, adaptées à tous les écrans.",
    features: ["Application Android", "Application Flutter", "Application iOS"],
  },
  {
    number: "03",
    icon: "ri-server-line",
    title: "Développement backend",
    description:
      "L'infrastructure fiable qui fait tourner vos applications en coulisses.",
    features: [
      "Conception de base de données",
      "Création d'API REST",
      "Authentification sécurisée",
      "Gestion des rôles et des permissons"
    ],
  },
  {
    number: "04",
    icon: "ri-rocket-line",
    title: "Déploiement & Maintenance",
    description:
      "Vos projets restent en ligne, à jour et fonctionnels sur la durée.",
    features: [
      "Maintenance curative et évolutive",
      "Déploiement d'application web",
      "Publication d'application mobile",
    ],
  },
  {
    number: "05",
    icon: "ri-dashboard-3-line",
    title: "Logiciels de gestion",
    description:
      "Des outils métier sur mesure pour piloter votre activité au quotidien.",
    features: [
      "Outils métier personnalisés",
      "Automatisation des processus",
      "Tableaux de bord",
    ],
  },
];



export const skillCategories = [
  {
    icon: "ri-layout-4-line",
    title: "Frontend",
    skills: [{ icon: "ri-reactjs-line", title: "ReactJS - TypeScript", value: 82 }],
  },
  {
    icon: "ri-server-line",
    title: "Backend & Langages",
    skills: [
      { icon: "ri-code-s-slash-line", title: "Laravel - PHP", value: 90 },
      { icon: "ri-terminal-window-line", title: "VB.net", value: 50 },
    ],
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile",
    skills: [
      { icon: "ri-code-line", title: "Dart", value: 75 },
      { icon: "ri-smartphone-line", title: "Flutter", value: 80 },
    ],
  },
  {
    icon: "ri-database-2-line",
    title: "Bases de données",
    skills: [
      { icon: "ri-database-2-line", title: "MySQL", value: 88 },
      { icon: "ri-database-2-fill", title: "PostgreSQL", value: 65 },
      { icon: "ri-flashlight-line", title: "Supabase", value: 55 },
    ],
  },
  {
    icon: "ri-tools-line",
    title: "Outils & Versioning",
    skills: [{ icon: "ri-git-branch-line", title: "Git", value: 80 }],
  },
];



export const projects: Project[] = [
  {
    title: "Application web de gestion intégrée - ISSAM,Cameroun",
    description:
      "Plateforme web complète pour la gestion des ressoucees academiques , pedagogiques et adminstratives",
    status: "En cours",
    image:ogin,
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
    features: [
      "Espace enseignant, élève et administration",
      "PréInscription et Inscription en lignes",
      "Accès au note ",
    ],
    codeUrl: "https://github.com/Maxidollar007/CampusOne.git",
    featured: true,
  },
  {
    title: "QuinGest",
    description:
      "Application mobile de gestion de stocks d'une quincaillerie ",
    status: "En cours",
    tags: ["Flutter", "Dart", "Supabase"],
    features: ["Catalogue produits", "Tableau de bord employé", "Tableau de bord ventes" ,"Inventaires"],
    
  },
  {
    title: "Gestion des présences - SERDI",
    description:
      "Application de gestion de presences qui marque la présence des stagiaires pour l'entreprise SERDI",
    status: "Terminé",
    image:gdp,
    tags: ["React", "Laravel", "MySQL"],
    features: ["Marquage de présences", "TTableau de bord administratif", "Consultation du taux d'absenteismes "],
    codeUrl: "https://github.com/Maxidollar007/GDPV2.git"
  },
  {
      title: "Site web de restaurant gastronomique du Cameroun",
      description:
        "Savourez des plats traditionnels préparés avec passion, des recettes riches en saveurs et des produits soigneusement sélectionnés. Une invitation à découvrir le Cameroun à travers chaque bouchée.Présentaion des equipements informatiques",
      status: "Terminé",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Saveurs authentiques", "Une expérience gourmande"],
      codeUrl: "https://github.com/Maxidollar007/Restaurant-gastronomique-camerounais-.git",
      liveUrl:"https://restaurant-gastronomique-camerounai.vercel.app/",
      image:port,
      featured:true
    },
    {
      title: "Gestion des tâches - SERDI",
      description:
      "Application web de gestion de projets et de tâche pour l'entreprise SERDI",
      status: "Terminé",
      image:gdt,
      tags: ["React", "Laravel", "MySQL"],
    features: ["Consultation des projets", "TTableau de bord administratif", "Check des tâche en temps réels","Notification en temps réels"],
    codeUrl:"https://github.com/Maxidollar007/Systeme-de-Gestion-de-Tache.git"
  },
  {
    title: "Gestion de dons et suivie de sang",
    description:
      "Application web de dons et de suivie de sang",
      status: "Terminé",
      image:gds,
      tags: ["HTML-CSS/JS", "PHP", "MySQL"],
      features: ["Tableau de bord du personnel ", "Enregistrement du donneurs", "Consultation des stocks de groupes sanguins disponible","TGestion de rendez-vous"],
      codeUrl:"https://github.com/Maxidollar007/GDS.git"
    },
    {
        title: "Site de vitrine de vente de vêtements - MAXI-atelier",
        description:
          "Découvrez une mode camerounaise moderne, pensée pour révéler votre style. Des pièces soigneusement sélectionnées, des créations inspirées et des prix accessibles en FCFA.",
        status: "Terminé",
        tags: ["HTML", "CSS", "JavaScript"],
        features: ["Commande en ligne", "Sastification"],
        codeUrl: "https://github.com/Maxidollar007/Site-vitrine-de-vente-de-vetement.git",
        liveUrl:"https://restaurant-gastronomique-camerounai-xi.vercel.app/",
        image:vete,
        featured:true
      },
  ];



export const socialLinks: SocialLink[] = [
  { icon: "ri-github-fill", label: "GitHub", href: " https://github.com/Maxidollar007" },
  { icon: "ri-linkedin-fill", label: "LinkedIn", href: "www.linkedin.com/in/jeanhirwa-5b306833a" },
  { icon: "ri-whatsapp-fill", label: "WhatsApp", href: "https://wa.me/237697323715" },
  { icon: "ri-mail-fill", label: "Email", href: "mailto:hirwajean58@gmail.com" },
];


export const contactMethods: ContactMethod[] = [
  {
    icon: "ri-mail-line",
    title: "Email",
    detail: "Réponse sous 24h en général.",
    actionLabel: "hirwajean58@gmail.com",
    href: "mailto:hirwajean58@gmail.com",
  },
  {
    icon: "ri-phone-line",
    title: "Téléphone",
    detail: "Du lundi au vendredi, 9h - 18h.",
    actionLabel: "Appelez maintenant",
    href: "tel:+237697323715",
  },
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    detail: "Le plus rapide pour discuter d'un projet.",
    actionLabel: "Écrivez-nous",
    href: "https://wa.me/237697323715",
  },
  {
    icon: "ri-map-pin-line",
    title: "Localisation",
    detail: "Yaoundé, Cameroun ",
  },
];

export const sentences:string[]=[
  "Maxi Dollar", 
  "Christiano Dior"
]

export const quality :string[]=[ // Mes phrases
  "J’ai toujours apprécié sa capacité à comprendre rapidement un problème et à trouver une solution simple et efficace.",
  "C’est quelqu’un de sérieux, curieux et surtout très déterminé lorsqu’il se fixe un objectif",
  "Travailler avec lui, c’est avoir quelqu’un qui ne se contente pas de faire fonctionner les choses : il cherche à comprendre comment et pourquoi elles fonctionnent",
  "Il est particulièrement à l’aise pour transformer une idée en projet concret, notamment dans le développement d’applications",
  "Au-delà de ses compétences techniques, c’est quelqu’un de fiable avec qui il est agréable de collaborer",
  "C’est une personne impliquée, créative et attentive aux détails. On sent qu’il aime réellement ce qu’il fait"
]

/* Fonction pour dire si je suis expert ou avancé intermediaire */
export function getLevel(value: number): { label: string; className: string } {
  if (value >= 90) return { label: "Expert", className: "text-(--success)" };
  if (value >= 75) return { label: "Avancé", className: "text-(--primary)" };
  return { label: "Intermédiaire", className: "text-(--text-muted)" };
}

/* Fonction de saisie */
export function useTypingEffect(sentences: string[]) {
  //Text )à afficher
  const [text, setText] = useState("");
  //I,ndex actuel 
  const [index, setIndex] = useState(0);
  //Si je dois effacer oupas 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Prensdre la phrase à 'lindex
    const currentSentence = sentences[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Je recuppre les letres progressivement
        const nextText = currentSentence.slice(0, text.length + 1);
        setText(nextText!=currentSentence ? nextText + " |" : nextText);

        if (nextText === currentSentence) {
          // si lettre ont lameme longuerur je commence la saisie
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentSentence.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          // passe à l'index suivant
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, sentences]);

  return text;
}
