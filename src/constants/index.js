import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

import {AiFillFacebook,AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
export const navLinks = [
  {
    id: "home",
    title: "Acceuil",
  },
  {
    id: "features",
    title: "Avantage",
  },
  {
    id: "product",
    title: "Produit",
  },
  {
    id: "clients",
    title: "Clients",
  },
];
export const stats = [
  {
    id: "stats-1",
    title: "Utilisateur",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Entreprise heureux",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$580M+",
  },
];
export const features = [
  {
    id: "feature-1",
    title: "Récompense",
    content:
      "Vous serez recompenser de vos exigences,a partir des promotions de la carte nouvelle generation.",
  },
  {
    id: "feature-2",
    title: "100% Securisée",
    content:
      "Tous vos transactions seront crypté et proteger par un algorithme anti-cyberattaque.",
  },
  {
    id: "feature-3",
    title: "Transfert d'argent",
    content:
      "Vous économiserez de l'argent,pourquoi? le taux de charge de transfert d'argent est de 0.05% .",
  },
];
export const feedback = [
  {
    id: "feedback-1",
    content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa animi molestias atque dolor harum. Totam.",
    name:"Jonathan",
    title:"Fondateur & Leader",
    img:user1
  },
  {
    id: "feedback-2",
    content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa animi molestias atque dolor harum. Totam.",
    name:"Keni",
    title:"Manageur",
    img:user2
  },
  {
    id: "feedback-3",
    content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa animi molestias atque dolor harum. Totam.",
    name:"Rakoto",
    title:"Assistant Administrative",
    img:user3
  },
];
export const clients=[

];
export const medias=[
  {
    name:AiFillFacebook
  },
  {
    name:AiFillInstagram
  },
  {
    name:AiFillGithub
  },
  {
    name:AiFillLinkedin
  }
]
export const footerlinks=[
  {
    title:"liens utiles",
    links:[
      {
        name:"contenue",
        link:"www.google.com"
      },
      {
        name:"Comment ça marche?",
        link:"www.google.com"
      },
      {
        name:"Creer",
        link:"www.google.com"
      },
      {
        name:"Explorer",
        link:"www.google.com"
      },
      {
        name:"Conditions & Services",
        link:"www.google.com"
      },
    ]
  },
  {
    title:"Communauté",
    links:[
      {
        name:"Centre d'aide",
        link:"www.google.com"
      },
      {
        name:"Partenaires",
        link:"www.google.com"
      },
      {
        name:"Suggestions",
        link:"www.google.com"
      },
      {
        name:"Blog",
        link:"www.google.com"
      },
      {
        name:"Newsletters",
        link:"www.google.com"
      }
    ]
  },
  {
    title:"Partenaire",
    links:[
      {
        name:"Nos Partenaire",
        link:"www.google.com"
      },
      {
        name:"Devenir notre partenaire",
        link:"www.google.com"
      },
    ]
  }
];
export default navLinks;
