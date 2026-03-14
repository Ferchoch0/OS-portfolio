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
        stack: ["React", "PHP", "REST API", "Mobile"],
        featured: true,
        order_in_preview: 1,
        order_in_catalog: 1,
        live_url: "",
        images: [
            "/img/cpa/cpa-1.png",
            "/img/cpa/cpa-2.png",
            "/img/cpa/cpa-3.png",
            "/img/cpa/cpa-4.png",
            "/img/cpa/cpa-mobile-1.png",
            "/img/cpa/cpa-mobile-2.png",
        ],
        mockups: [
            {
                desktop: "/img/cpa/cpa-1.png",
                mobile: "/img/cpa/cpa-mobile-1.png"
            }
        ]
    },
    {
        id: "2",
        title: "Mottoso Propiedades Inmobiliaria Integral",
        category: "catalog",
        description: "Plataforma inmobiliaria completa con catálogo de propiedades para compra y alquiler, sistema de tasaciones, integración de mapas interactivos, formularios de contacto y panel de administración. Desarrollado en equipo con React y PHP. Desplegado en infraestructura propia con Nginx.",
        stack: ["React", "PHP", "Maps API"],
        featured: true,
        order_in_preview: 2,
        order_in_catalog: 2,
        live_url: "",
        images: [
            "/img/mottoso/mottoso-1.png"
        ],
        mockups: [
            {
                desktop: "/img/mottoso/mottoso-1.png",
                mobile: "/img/mottoso/mottoso-1.png"
            }
        ]
    },
    {
        id: "3",
        title: "CPA Página Publicitaria Refrigeración",
        category: "corporate",
        description: "Página web publicitaria para el servicio técnico de refrigeración de CPA. Diseño moderno con optimización SEO, secciones de servicios, galería de trabajos y formulario de contacto integrado.",
        stack: ["React", "SEO", "Vite"],
        featured: true,
        order_in_preview: 3,
        order_in_catalog: 3,
        live_url: "https://cpacontrol.com.ar/",
        images: [
            "/img/cpa-pub/cpa-pub-1.png",
            "/img/cpa-pub/cpa-pub-2.png",
            "/img/cpa-pub/cpa-pub-3.png",
            "/img/cpa-pub/cpa-pub-4.png",
            "/img/cpa-pub/cpa-pub-5.png"
        ],
        mockups: [
            {
                desktop: "/img/cpa-pub/cpa-pub-1.png",
                mobile: "/img/cpa-pub/cpa-pub-responsive-1.png"
            }
        ]
    },
    {
        id: "4",
        title: "OtterTask — Gestión de Stock y Reportes",
        category: "saas",
        description: "Sistema SaaS de gestión de stock con reportes automáticos, generación de PDF y envío programado a stakeholders vía email. Landing page premium con animaciones y dark theme. Integración con n8n para automatizaciones.",
        stack: ["React", "n8n", "PDF", "Node.js"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 4,
        live_url: "",
        images: [],
        mockups: []
    },
    {
        id: "5",
        title: "App Mobile — Sincronización Offline",
        category: "mobile",
        description: "Aplicación móvil con soporte completo de sincronización offline mediante SQLite local y cola de respuestas pendientes. Diseñada para técnicos de campo que trabajan sin conexión estable.",
        stack: ["React Native", "SQLite", "Offline"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 5,
        live_url: "",
        images: [],
        mockups: []
    },
    {
        id: "6",
        title: "Panel Operativo — Dashboard de Métricas",
        category: "dashboard",
        description: "Dashboard con métricas en tiempo real, gráficos interactivos y alertas personalizables. Conexión en tiempo real vía WebSocket para monitoreo continuo de operaciones.",
        stack: ["React", "WebSocket", "Charts"],
        featured: false,
        order_in_preview: 0,
        order_in_catalog: 6,
        live_url: "",
        images: [],
        mockups: []
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

