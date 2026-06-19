/**
 * @typedef {Object} Mockup
 * @property {string} desktop
 * @property {string} mobile
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} description
 * @property {string[]} stack
 * @property {boolean} featured
 * @property {number} order_in_preview
 * @property {number} order_in_catalog
 * @property {string} [live_url]
 * @property {string} [github_url]
 * @property {string[]} images
 * @property {Mockup[]} [mockups]
 */

/** @type {Project[]} */
export const projects = [
    {
        id: "1",
        title: "CPA Refrigeración Panel + App Mobile",
        category: "mobile",
        description: "Sistema integral con app móvil para técnicos de refrigeración y panel de administración web. Permite registrar visitas técnicas, estado de equipos, incidencias y generar reportes. Desarrollado en equipo, liderando la implementación técnica del frontend en React integrado con API REST en PHP. Desplegado en infraestructura propia.",
        stack: ["React", "PHP", "REST API", "MySQL"],
        featured: true,
        order_in_preview: 1,
        order_in_catalog: 1,
        live_url: "",
        images: [
            "/works/cpa/cpa-1.png",
            "/works/cpa/cpa-2.png",
            "/works/cpa/cpa-3.png",
            "/works/cpa/cpa-4.png",
            "/works/cpa/cpa-mobile-1.png",
            "/works/cpa/cpa-mobile-2.png"
        ],
        mockups: [
            {
                desktop: "/works/cpa/cpa-1.png",
                mobile: "/works/cpa/cpa-mobile-1.png"
            }
        ]
    },
    {
        id: "2",
        title: "Mottoso Propiedades Inmobiliaria Integral",
        category: "catalog",
        description: "Plataforma inmobiliaria completa con catálogo de propiedades para compra y alquiler, sistema de tasaciones, integración de mapas interactivos, formularios de contacto y panel de administración. Desarrollado en equipo con React y PHP. Desplegado en infraestructura propia con Nginx.",
        stack: ["React", "PHP", "CSS", "MYSQL"],
        featured: true,
        order_in_preview: 2,
        order_in_catalog: 2,
        live_url: "",
        images: [
            "/works/mottoso/mtt-1.png",
            "/works/mottoso/mtt-2.png",
            "/works/mottoso/mtt-3.png",
            "/works/mottoso/mtt-4.png",
            "/works/mottoso/mtt-5.png",
            "/works/mottoso/mtt-6.png",
            "/works/mottoso/mtt-7.png",
            "/works/mottoso/mtt-8.png",
            "/works/mottoso/mtt-9.png"
        ],
        mockups: [
            {
                desktop: "/works/mottoso/mtt-1.png",
                mobile: "/works/mottoso/mtt-1.png"
            }
        ]
    },
    {
        id: "3",
        title: "CPA Página Publicitaria Refrigeración",
        category: "corporate",
        description: "Página web publicitaria para el servicio técnico de refrigeración de CPA. Diseño moderno con optimización SEO, secciones de servicios, galería de trabajos y formulario de contacto integrado.",
        stack: ["React", "SEO", "CSS", "Framer Motion"],
        featured: true,
        order_in_preview: 3,
        order_in_catalog: 3,
        live_url: "https://cpacontrol.com.ar/",
        images: [
            "/works/cpa-published/cpa-pub-1.png",
            "/works/cpa-published/cpa-pub-2.png",
            "/works/cpa-published/cpa-pub-3.png",
            "/works/cpa-published/cpa-pub-4.png",
            "/works/cpa-published/cpa-pub-5.png",
            "/works/cpa-published/cpa-pub-responsive-1.png"
        ],
        mockups: [
            {
                desktop: "/works/cpa-published/cpa-pub-1.png",
                mobile: "/works/cpa-published/cpa-pub-responsive-1.png"
            }
        ]
    },
    {
        id: "4",
        title: "OtterTask — Gestión de Stock y Reportes",
        category: "saas",
        description: "Sistema SaaS de gestión de stock con reportes automáticos, generación de PDF y envío programado a stakeholders vía email. Landing page premium con animaciones y dark theme. Integración con n8n para automatizaciones.",
        stack: ["React", "PHP", "REST API", "MySQL"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 4,
        live_url: "https://ottertask.netlify.app/",
        images: [
            "/works/ottertaskv2/ott-v2-1.png",
            "/works/ottertaskv2/ott-v2-2.png",
            "/works/ottertaskv2/ott-v2-3.png",
            "/works/ottertaskv2/ott-v2-4.png",
            "/works/ottertaskv2/ott-v2-5.png",
            "/works/ottertaskv2/ott-v2-6.png",
            "/works/ottertaskv2/ott-v2-7.png"
        ],
        mockups: [
            {
                desktop: "/works/ottertaskv2/ott-v2-1.png",
                mobile: "/works/ottertaskv2/ott-v2-1.png"
            }
        ]
    },
    {
        id: "5",
        title: "CPA Desinfección",
        category: "mobile",
        description: "Mantenimiento y evolución de sistema legacy (5 años) con app móvil y panel web en Angular, y API en Node.js. Actualización de librerías obsoletas, corrección de bugs críticos, implementación de nuevas funcionalidades y refactorización de módulos completos. Trabajo en equipo actuando como tech lead.",
        stack: ["Angular", "Node.js", "Mobile"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 5,
        live_url: "",
        images: [
            "/works/cpa-des/cpa-des-1.png",
            "/works/cpa-des/cpa-des-2.png",
            "/works/cpa-des/cpa-des-3.png",
            "/works/cpa-des/cpa-des-4.png",
            "/works/cpa-des/cpa-des-5.png",
            "/works/cpa-des/cpa-des-6.png",
            "/works/cpa-des/cpa-des-7.png"
        ],
        mockups: [
            {
                desktop: "/works/cpa-des/cpa-des-1.png",
                mobile: "/works/cpa-des/cpa-des-1.png"
            }
        ]
    },
    {
        id: "6",
        title: "Infinite Frame",
        category: "corporate",
        description: "Sistema web para cliente con un emprendimiento de sublimacion. Diferentes funciones de edicion de imagenes y modelos 3D para visualizar el producto final.",
        stack: ["React", "CSS", "Three.js"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 6,
        live_url: "https://sublime-frame.netlify.app/",
        github_url: "https://github.com/fernando-delvalle/infinite-frame",
        images: [
            "/works/infinite-frame/inf-1.png",
            "/works/infinite-frame/inf-2.png",
            "/works/infinite-frame/inf-3.png",
            "/works/infinite-frame/inf-4.png",
            "/works/infinite-frame/inf-5.png",
            "/works/infinite-frame/inf-6.png",
            "/works/infinite-frame/inf-7.png",
            "/works/infinite-frame/inf-8.png"
        ],
        mockups: [
            {
                desktop: "/works/infinite-frame/inf-1.png",
                mobile: "/works/infinite-frame/inf-1.png"
            }
        ]
    },
    {
        id: "7",
        title: "Beretta — Gestión de Inventario",
        category: "dashboard",
        description: "Panel de control logístico para empresa de transporte de cargas. Gestión de flota vehicular, historial de mantenimiento, planificación de rutas, control de combustible, administración de empleados y sistema de roles de acceso. Desarrollado en equipo con React, PHP y Tailwind CSS. Lideré la arquitectura técnica del proyecto.",
        stack: ["React", "PHP", "TAILWINDS"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 7,
        live_url: "",
        images: [
            "/works/beretta/btt-1.png",
            "/works/beretta/btt-2.png",
            "/works/beretta/btt-3.png"
        ],
        mockups: [
            {
                desktop: "/works/beretta/btt-1.png",
                mobile: "/works/beretta/btt-1.png"
            }
        ]
    },
    {
        id: "8",
        title: "Lithos — Tattoo Studio",
        category: "corporate",
        description: "Página publicitaria para estudio de tatuajes que permite a los clientes conocer más sobre el estudio y reservar turnos online.",
        stack: ["PHP", "MySQL", "Bootstrap"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 8,
        live_url: "https://lithos-tattostudios.netlify.app/",
        images: [
            "/works/tatto-publisher/tsl-1.png",
            "/works/tatto-publisher/tsl-2.png",
            "/works/tatto-publisher/tsl-3.png"
        ],
        mockups: [
            {
                desktop: "/works/tatto-publisher/tsl-1.png",
                mobile: "/works/tatto-publisher/tsl-1.png"
            }
        ]
    }
];

/** Helper: only featured projects (for home preview), sorted by order_in_preview */
export const getFeaturedProjects = () =>
    projects.filter(p => p.featured).sort((a, b) => a.order_in_preview - b.order_in_preview);

/** Helper: get all projects sorted by catalog order */
export const getProjectsForCatalog = () =>
    [...projects].sort((a, b) => a.order_in_catalog - b.order_in_catalog);

/** Helper: total count */
export const getTotalProjectCount = () => projects.length;
