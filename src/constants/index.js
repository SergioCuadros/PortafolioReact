import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Mi enfoque se centra en crear experiencias de usuario excepcionales y garantizar la usabilidad y accesibilidad de mis proyectos. Me apasiona seguir aprendiendo y manteniéndome actualizado sobre las últimas tecnologías y tendencias en el desarrollo web para ofrecer soluciones innovadoras y de calidad.`;

export const ABOUT_TEXT = `Además, valoro el trabajo en equipo y la colaboración, ya que creo que el intercambio de ideas y la retroalimentación son fundamentales para lograr resultados exitosos.`;

export const EXPERIENCES = [
  {
    year: "Septiembre 2023 – Actual",
    role: "Desarrollador Frontend",
    company: "La Bolita",
    description: `
    Responsable del diseño y optimización de interfaces UI/UX, mejorando la experiencia del usuario y el rendimiento frontend.
Consumo e integración de APIs usando jQuery, Axios y Fetch API en JavaScript.
Desarrollo de interfaces responsivas con Bootstrap y HTML bajo arquitectura MVC.
Participación en ceremonias Scrum, alineando objetivos de sprint.
Uso de Tailwind CSS para landing pages, optimizando velocidad de desarrollo y consistencia de diseño.
Prototipado de mockups en Adobe XD y Figma, garantizando coherencia en UI/UX.

    `,
    technologies: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", ".NET", "Adobe XD", "Figma"],
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
  }
  
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
