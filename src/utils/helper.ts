import type { ContactMethod, Project, SocialLink } from "../types";

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
    skills: [{ icon: "ri-reactjs-line", title: "ReactJS - TypeScript", value: 90 }],
  },
  {
    icon: "ri-server-line",
    title: "Backend & Langages",
    skills: [
      { icon: "ri-code-s-slash-line", title: "Laravel - PHP", value: 90 },
      { icon: "ri-terminal-window-line", title: "VB.net", value: 75 },
    ],
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile",
    skills: [
      { icon: "ri-code-line", title: "Dart", value: 80 },
      { icon: "ri-smartphone-line", title: "Flutter", value: 85 },
    ],
  },
  {
    icon: "ri-database-2-line",
    title: "Bases de données",
    skills: [
      { icon: "ri-database-2-line", title: "MySQL", value: 95 },
      { icon: "ri-database-2-fill", title: "PostgreSQL", value: 85 },
      { icon: "ri-flashlight-line", title: "Supabase", value: 85 },
    ],
  },
  {
    icon: "ri-tools-line",
    title: "Outils & Versioning",
    skills: [{ icon: "ri-git-branch-line", title: "Git", value: 85 }],
  },
];



export const projects: Project[] = [
  {
    title: "Application web de gestion intégrée - ISSAM,Cameroun",
    description:
      "Plateforme web complète pour la gestion des ressoucees academiques , pedagogiques et adminstratives",
    status: "En cours",
    tags: ["React", "TypeScript", "Laravel", "MySQL"],
    features: [
      "Espace enseignant, élève et administration",
      "PréInscription et Inscription en lignes",
      "Accès au note ",
    ],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    title: "QuinGest",
    description:
      "Application mobile de gestion de stocks d'une quincaillerie ",
    status: "En cours",
    tags: ["Flutter", "Dart", "Supabase"],
    features: ["Catalogue produits", "Tableau de bord employé", "Tableau de bord ventes" ,"Inventaires"],
    codeUrl: "#",
  },
  {
    title: "Gestion des présences - SERDI",
    description:
      "Application de gestion de presences qui marque la présence des stagiaires pour l'entreprise SERDI",
    status: "Terminé",
    tags: ["React", "Laravel", "MySQL"],
    features: ["Marquage de présences", "TTableau de bord administratif", "Consultation du taux d'absenteismes "],
  },
    {
      title: "Site vitrine de vente des ordinateurs en lignes",
      description:
        "Présentaion des equipements informatiques",
      status: "Terminé",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Catalogue produits", "responsive", "Site intuitifs"],
      codeUrl: "#",
      liveUrl:"#",
      featured:true
    },
  {
    title: "Gestion des tâches - SERDI",
    description:
      "Application web de gestion de projets et de tâche pour l'entreprise SERDI",
    status: "Terminé",
    tags: ["React", "Laravel", "MySQL"],
    features: ["Consultation des projets", "TTableau de bord administratif", "Check des tâche en temps réels","Notification en temps réels"],
  },
  {
    title: "Gestion de dons et suivie de sang - SERDI",
    description:
      "Application web de dons et de suivie de sang",
    status: "Terminé",
    tags: ["HTML-CSS/JS", "PHP", "MySQL"],
    features: ["Tableau de bord du personnel ", "Enregistrement du donneurs", "Consultation des stocks de groupes sanguins disponible","TGestion de rendez-vous"],
  },
];



export const socialLinks: SocialLink[] = [
  { icon: "ri-github-fill", label: "GitHub", href: "#" },
  { icon: "ri-linkedin-fill", label: "LinkedIn", href: "#" },
  { icon: "ri-whatsapp-fill", label: "WhatsApp", href: "#" },
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
    href: "https://wa.me/237000000000",
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


export function getLevel(value: number): { label: string; className: string } {
  if (value >= 90) return { label: "Expert", className: "text-(--success)" };
  if (value >= 75) return { label: "Avancé", className: "text-(--primary)" };
  return { label: "Intermédiaire", className: "text-(--text-muted)" };
}
