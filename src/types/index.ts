import type { ReactNode } from "react"

export type utilitiesType={
    toogleTheme:()=>void,
    toogleShowSideMenu:()=>void,
    theme:String | null,
    showMenu:boolean, 
} 

export type ReactProps={
    title?: string, 
    children?: ReactNode,
    value?:number,
    image?:String
}

export type ServiceCardProps = {
  number: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type ProgressBarProps = {
  icon: string; // classe Remix Icon, ex: "ri-reactjs-line"
  title: string;
  value: number; // 0 à 100
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  status: "Terminé" | "En cours";
  tags: string[];
  features: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export type SocialLink = {
  icon: string;
  label: string;
  href: string;
};

export type ContactMethod = {
  icon: string;
  title: string;
  detail: string;
  actionLabel?: string;
  href?: string;
};


export type FormData={
  name:string;
  email:string;
  message:string
}