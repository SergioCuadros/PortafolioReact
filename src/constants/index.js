import project1 from "../assets/projects/terceros.png";
import project2 from "../assets/projects/sorteos.png";
import project3 from "../assets/projects/tradicion.png";
import project4 from "../assets/projects/ubi.png";
import project5 from "../assets/projects/ToDO.png";
import Logo from "../assets/logo.svg";


export const HERO_CONTENT = `Mi enfoque se centra en crear experiencias de usuario excepcionales y garantizar la usabilidad y accesibilidad de mis proyectos. Me apasiona seguir aprendiendo y manteniéndome actualizado sobre las últimas tecnologías y tendencias en el desarrollo web para ofrecer soluciones innovadoras y de calidad.`;

export const ABOUT_TEXT = `Además, valoro el trabajo en equipo y la colaboración, ya que creo que el intercambio de ideas y la retroalimentación son fundamentales para lograr resultados exitosos.`;

export const EXPERIENCES = [
  {
    year: "Septiembre 2023 – Actual",
    role: "Desarrollador Frontend",
    company: "Xazar",
    description: `
    Responsable del diseño y optimización de interfaces UI/UX, mejorando la experiencia del usuario y el rendimiento frontend.
    Consumo e integración de APIs usando jQuery, Axios y Fetch API en JavaScript.
    Desarrollo de interfaces responsivas con Bootstrap y HTML bajo arquitectura MVC.
    Participación en ceremonias Scrum, alineando objetivos de sprint.
    Uso de Tailwind CSS para landing pages, optimizando velocidad de desarrollo y consistencia de diseño.
    Prototipado de mockups en Adobe XD y Figma, garantizando coherencia en UI/UX.

    `,
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      ".NET",
      "AdobeXD",
      "Figma",
    ],
  },
  {
    year: "Enero – junio 2023",
    role: "Desarrollador Frontend",
    company: "Kaab Code",
    description: `
      Crear la interfaz del sistema de la empresa, así como el de las vistas generadas.
      Programar la funcionabilidad de las vistas.
      Actualizar los cambios en Git.
      Trabajar bajo la metodología Kanban.
    `,
    technologies: ["Vue.js", "JavaScript", "HTML", "CSS", "Kanban", "Trello"],
  },
  {
    year: "Enero – junio 2022",
    role: "Servicio Social",
    company: "Plenumsoft",
    description: `
      Contribuir en la creación de un CRUD para el alta de datos personales de los empleados y clientes.
      Crear la interfaz usando Bootstrap y HTML.
      Verificar el correcto desarrollo del MVC.
      Participar en reuniones bajo la metodología Scrum.
    `,
    technologies: ["C#", ".NET", "MySQL", "Bootstrap", "HTML"],
  },
];

export const PROJECTS = [
  {
    title: "ToDo List",
    image: project5,	
    description:
      "Aplicación web para gestionar tareas con funcionalidades como agregar, editar, eliminar y filtrar tareas por estado. Implementa tema claro/oscuro, notificaciones con snackbars y animaciones con Framer Motion. Desarrollada con enfoque en UI/UX limpio y minimalista usando React, Redux Toolkit y Material UI.",
    technologies: ["ReactJS", "Redux Toolkit", "Material UI", "Framer Motion", "JavaScript"],
    github: "https://github.com/SergioCuadros/To-Do-List",
    link: "https://to-do-list-sc.netlify.app",
  },
  {
    title: "Consulta de Sucursal Más Cercana para Compra de Bolita",
    image: project4,
    description:
      "Desarrollé el frontend para una funcionalidad de consulta de la sucursal más cercana para la compra de boletos de bolita. Utilizando la geolocalización del dispositivo y consumiendo una API interna de ubicaciones, los usuarios pueden localizar la tienda más cercana en tiempo real así como ver los detalles de cada sucursal, como dirección, horarios y un link que los envia a Google Maps para su ubicación.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Axios"],
    github: "https://github.com/SergioCuadros/ubicaciones-terceros",
    link: "https://ubicaciones.juegalabolita.com",
  },
  {
    title: "Landing Page para Dinámicas de Concurso",
    image: project3,
    description:
      "Desarrollé el frontend de una landing page interactiva para dinámicas de concurso. Los usuarios podían registrar sus boletos de participación y unirse al sorteo de premios. La página incluye formularios de alta, validación de datos y seguimiento de participación garantizando una experiencia fluida y atractiva para los usuarios.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    link: "https://latradiciondeganar.juegalabolita.com",
  },
  
  {
    title: "Sistema de Terceros para la Venta de Bolita y Lotería Mexicana",
    image: project1,
    description:
      "Desarrollé la interfaz de usuario para un sistema de terceros destinado a la venta de boletos de la bolita y lotería mexicana. El frontend incluye funcionalidades para que los usuarios puedan consultar los boletos mediante tablas y filtros, ver resultados anteriores y consultar premios. Implementé una experiencia de usuario intuitiva y atractiva.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", ".NET"],
    link: "",
  },
  {
    title: "Sistema de Alta de Sorteos para la Generación de Números Ganadores",
    image: project2,
    description:
      "Fui responsable del desarrollo frontend de un sistema para la creación de sorteos y la generación de números ganadores. El sistema permite a los administradores crear sorteos de manera sencilla, seleccionar criterios y ver los resultados en tiempo real garantizando una interfaz dinámica y de fácil navegación.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", ".NET"],
    link: "",
  },

];


export const skills = [
  'JavaScript',
  'React',
  'HTML5',
  'CSS3',
  'Node.js',
  'Python',
  'Git',
  'Docker',
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "sergiocuadros44@gmail.com",
  link: "https://www.linkedin.com/in/sergio-cuadros-benitez-5199581bb/",
  logo: Logo,
};
