interface dataExperienceProp {
  name: string;
  position: string;
  date: string;
  info: string;
}

export const dataExperience: dataExperienceProp[] = [
  {
    name: "Colrunners",
    position: "Desarrollador React",
    date: "01 Ago 2023 ~ 15 Ene 2024",
    info: "Desarrollé el módulo administrativo de Colruners como una Progressive Web App (PWA), ofreciendo accesibilidad desde cualquier dispositivo. Este módulo abarcó la gestión de planes de entrenamiento y atletas. Implementé el patrón Redux para una gestión eficiente del estado y colaboré con el equipo de diseño para crear una interfaz gráfica coherente con los estándares de UX/UI acordados. Implementamos un inicio de sesión seguro, permitiendo el acceso mediante correo electrónico o a través de una integración con Strava, y establecimos roles de usuario diferenciados."
  },
  {
    name: "Roalytics",
    position: "Desarrollador React",
    date: "01 Ene 2021 ~ 15 Ene 2024",
    info: "Lideré el desarrollo de una aplicación web para integrar herramientas de marketing, con módulos como Dashboard, Funnel, Contactos, Tracking y Configuración. Implementé una pasarela de pago y seguimiento de anuncios con Google Ads, PayPal y Facebook. Utilicé el patrón Redux para mejorar el rendimiento al evitar llamadas duplicadas a los servicios. Además, trabajé en mejoras de la interfaz gráfica según los estándares de diseño UX/UI acordados. Realicé refactorizaciones de código para hacerlo más legible, modificable y escalable, optimizando así el desarrollo y mantenimiento de la aplicación."
  },
  {
    name: "Corpoboyaca.",
    position: "Desarrollador Web",
    date: "3 Oct 2019 ~ 24 Abr 2020",
    info: "Desarrollé la creación de los módulos ecoturísticos, reglamentación, senderos y áreas protegidas. Implementé sliders para mejorar la presentación visual de contenido. Además, realize la migración del sitio web a un diseño responsive utilizando flexbox."
  },
  {
    name: "Banco2.",
    position: "Desarrollador Web",
    date: "6 Nov 2018 ~ 25 Sep 2019",
    info: "Desarrollé la creación de los módulos familias, multimedias, contenidos del blog y boletines. Implementé sliders para mejorar la presentación visual y migré el sitio a un diseño responsive utilizando flexbox. Además, desarrollé un simulador de calculadora para calcular la huella de carbono anual."
  },
  {
    name: "Siro Portal.",
    position: "Desarrollador Web",
    date: "02 Ene 2018 ~ 05 Ene 2019",
    info: "Refactorice (UX y UI) los módulos Administración, Solicitudes, Maquinaria, Personal, Materiales, Proyectos, Anteproyectos, Obras, Multimedia, Roturas, Puentes. Desarrollé el módulo Baches, Implementé el consumo de una API de Google para la geolocalización del sitio."
  },
]