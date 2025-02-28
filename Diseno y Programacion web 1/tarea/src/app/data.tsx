type Person = {
  id: number;
  title: string;
  encabezado: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  enlace: string;
};

export const data: Person[] = [
  {
    id: 1,
    title: "Bill Gates",
    encabezado: "Fundador de Microsoft",
    description:
      "William Henry Gates III (Seattle, Washington, 28 de octubre de 1955), conocido como Bill Gates, es un empresario, informático y filántropo estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen. Su fortuna está estimada en 130 000 millones de dólares, lo que lo convierte en el cuarto hombre más rico del mundo.",
    img1: "/img/img7.jpg",
    img2: "/img/img8.jpg",
    img3: "/img/img9.jpg",
    enlace: "https://www.google.com/search?q=Bill+Gates",
  },
  {
    id: 2,
    title: "Steve Jobs",
    encabezado: "Cofundador de Apple",
    description:
      "Steven Paul Jobs (San Francisco, California, 24 de febrero de 1955 - Palo Alto, California, 5 de octubre de 2011) fue un empresario y magnate de los negocios del sector informático y de la industria del entretenimiento estadounidense. Cofundador y presidente ejecutivo de Apple Inc., también fue presidente de Pixar y miembro del consejo de The Walt Disney Company.",
    img1: "/img/img4.jpg",
    img2: "/img/img5.jpg",
    img3: "/img/img6.jpg",
    enlace: "https://www.google.com/search?q=Steve+Jobs",
  },
  {
    id: 3,
    title: "Mark Zuckerberg",
    encabezado: "Cofundador de Facebook",
    description:
      "Mark Elliot Zuckerberg (White Plains, Nueva York, 14 de mayo de 1984) es un programador y empresario estadounidense, conocido por ser uno de los cofundadores de Facebook, Inc. Además, es el presidente y director ejecutivo de la empresa. Su fortuna está valorada en alrededor de 120 000 millones de dólares.",
    img1: "/img/img2.jpg",
    img2: "/img/images.jpg",
    img3: "/img/img3.jpg",
    enlace: "https://www.google.com/",
  },
];
