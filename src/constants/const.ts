export const exp = [
  {
    title: "Desarrollador de Software",
    corporation: "Cobus Group SRL",
    date: "11/2013 – 01/2021",
  },
  {
    title: "Desarrollador Fullstack Ssr.",
    corporation: "SoulIT",
    date: "02/2021 – 02/2022",
  },
  {
    title: "Desarrollador Fullstack y Mobile Ssr. ",
    corporation: "Alquila tu Cancha",
    date: "03/2023 – 04/2024",
  },
  {
    title: "Desarrollador Fullstack SSr.",
    corporation: "Mas Pedidos",
    date: "06/2023 – Actualidad",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  firebase: "firebase",
  bootstrap: "bootstrap",
  reactNative: "reactNative",
  prisma: "prisma",
  mysql: "mysql",
  docker: "docker",
  laravel: "laravel",
  nestjs: "nestjs",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "React Native",
    icon: IconKeys.react,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "Nest Js",
    icon: IconKeys.nestjs,
  },
  {
    title: "Laravel",
    icon: IconKeys.laravel,
  },
  {
    title: "Docker",
    icon: IconKeys.docker,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },
  {
    title: "Bootstrap",
    icon: IconKeys.bootstrap,
  },
  {
    title: "Redux Js",
    icon: IconKeys.redux,
  },
  {
    title: "Zustand",
    icon: IconKeys.zustand,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  },
  {
    title: "Prisma Db",
    icon: IconKeys.prisma,
  },
  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
  {
    title: "Firebase",
    icon: IconKeys.firebase,
  },
];

export const projects = [
  {
    id: 1,
    imgs: ['Minstagram-1.png', 'Minstagram-2.png', 'Minstagram-3.png', 'Minstagram-4.png', 'Minstagram-5.png', 'Minstagram-6.png', 'Minstagram-7.png', 'Minstagram-8.png', 'Minstagram-9.png', 'Minstagram-10.png'],
    title: "Minstagram PWA",
    link: "https://minstagram.vercel.app",
    link_github: "https://github.com/mlupani/Minstagram",
    description: "Pequeña implementacion de un clon de Instagram, el cual tiene muchas funcionalidades del original. El estilo esta hecho con Flexbox y Bootstrap",
    implementations: [
        "Logins con Firebase",
        "Recuperacion de contraseña",
        "Acciones en tiempo real con Firebase (Chat, creacion de posts, etc)",
        "Notificaciones push en ciertas acciones",
        "Cropp de imagenes",
        "Compresion de imagenes",
        "Diseño Responsive"
    ],
    functions: [
        "Creacion con posts con la imagen elegida",
        "Filtros de Instagram",
        "TimeAgo en tiempo real",
        "Likes, Comentarios y compartir posts",
        "Seguir usuarios",
        "Enviar mensajes privados",
        "Eliminar posts propios",
        "Buscar Usuarios",
        "Vincular con Facebook",
        "Ver actividad reciente",
        "Seleccionar lugar en donde estes antes de crear post"
    ],
    technologies: [
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.bootstrap,
      },
      {
        icon: IconKeys.firebase,
      },
    ],
  },
  {
    id: 2,
    imgs: ["ecommerce-1.png", "ecommerce-2.png", "ecommerce-3.png", "ecommerce-4.png", "ecommerce-5.png"],
    title: "Cliente de Ecommerce con productos, categorias y carrito de compras",
    link: "https://ecommerce-production-0d84.up.railway.app",
    link_github: "https://github.com/mlupani/ecommerce/tree/main/client",
    link_api: "https://github.com/mlupani/ecommerce/tree/main/server",
    description: "Implementación de un Ecommerce donde pueden manejarse compras de productos, busquedas y manejar el carrito de compras. Realizado con React, Manejo de estados con React-Redux, backend en NodeJS y base de datos de MongoDB",
    implementations: [
        "Backend en NodeJS y Express",
        "Base de datos en MongoDB utilizando Mongoose",
        "Autenticaciones con Json Web Tokens",
        "Estados globales con React-Redux-Toolkit",
        "Busquedas con Algolia Search",
        "Pago con tarjeta de credito utilizando Stripe",
        "Diseño Responsive"
    ],
    functions: [
        "Agregar y quitar productos del carrito",
        "Busquedas de productos con algolia",
        "Ver productos seleccionando una categoria",
        "Agregar productos a mi WishList o lista de deseos",
        "Funcionalidad de carrito sin estar autenticado",
        "Dejar comentarios en los productos",
        "Pagos con tarjeta guardando los datos en stripe",
        "Creacion de usuarios con su imagen de perfil",
        "Seccion de 'Mis compras' para visualizar las compras realizadas por el usuario "
    ],
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.nextjs,
      },
      {
        icon: IconKeys.redux,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.bootstrap,
      },
    ],
  },
  {
    id: 3,
    imgs: ["ecommerce-admin-1.jpeg", "ecommerce-admin-2.jpeg", "ecommerce-admin-3.jpeg", "ecommerce-admin-4.jpeg"],
    title: "E-Commerce Admin Mobile",
    link: "https://play.google.com/store/apps/details?id=com.mlupani.ecommerceadmin&hl=es-419&ah=H5liuWoUQ8MwH6XwDbFPiz3JfUI",
    link_github: "https://github.com/mlupani/Ecomerce-admin-RN",
    link_backend: "https://github.com/mlupani/ecommerce/tree/main/server",
    description: "Implementación de un administrador de Ecommerce donde pueden manejarse productos y categorias, con sus imagenes, precio, stock y descripcion, estos cambios se reflejan en el cliente. Backend en NodeJS y base de datos de MongoDB",
    implementations: [
        "App para Android OS",
        "Backend en NodeJS y Express",
        "Base de datos en MongoDB utilizando Mongoose",
        "Autenticaciones con Json Web Tokens",
        "Uso de la galeria y la camara",
        "Sesion persistente con async Storage",
        "todo cambio se vera reflejado en el cliente de E-commerce"
    ],
    functions: [
        "Agregar nuevos productos",
        "Modificar productos (Nombre, descripcion, categoria, precio, stock e imagen del producto",
        "Agregar nuevas categorias",
        "Editar categorias (Nombre, descripcion, imagen)",
        "Autenticacion a la aplicacion",
        "Buscar productos"
    ],
    technologies: [
      {
        icon: IconKeys.reactNative,
      },
      {
        icon: IconKeys.typeScript,
      },
      {
        icon: IconKeys.nodejs,
      },
    ],
  },
];
