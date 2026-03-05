/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} name
 * @property {string} blurb
 * @property {string} category
 * @property {string} label
 * @property {boolean} large
 * @property {string} gradient
 * @property {string} [link]
 * @property {string[]} [tags]
 * @property {string} [status]
 */

/** @type {Project[]} */
export const projects = [
    {
        id: "2",
        title: "CPA Refrigeración Panel + App Mobile",
        name: "CPA Refrigeración Panel + App Mobile",
        slug: "cpa-refrigeracion",
        category: "mobile",
        description: "Sistema integral con app móvil para técnicos de refrigeración y panel de administración web. Permite registrar visitas técnicas, estado de equipos, incidencias y generar reportes. Desarrollado en equipo, liderando la implementación técnica del frontend en React integrado con API REST en PHP. Desplegado en infraestructura propia.",
        blurb: "Sistema integral con app móvil para técnicos de refrigeración y panel de administración web.",
        label: "CPA",
        large: true,
        stack: '["React", "PHP", "REST API", "Mobile"]',
        cover_url: "img/cpa/",
        live_url: "",
        featured: "1",
        order_index: "2",
        published_at: "2026-03-04 20:13:49",
        created_at: "2026-03-04 20:13:49",
        home_position: "1"
    },
    {
        id: "5",
        title: "Mottoso Propiedades Inmobiliaria Integral",
        name: "Mottoso Propiedades Inmobiliaria Integral",
        slug: "mottoso-propiedades",
        category: "catalog",
        description: "Plataforma inmobiliaria completa con catálogo de propiedades para compra y alquiler, sistema de tasaciones, integración de mapas interactivos, formularios de contacto y panel de administración. Desarrollado en equipo con React y PHP. Desplegado en infraestructura propia con Nginx.",
        blurb: "Plataforma inmobiliaria completa con catálogo de propiedades para compra y alquiler.",
        label: "MOT",
        large: false,
        stack: '["React", "PHP", "Maps API"]',
        cover_url: "img/mottoso/",
        live_url: "",
        featured: "1",
        order_index: "5",
        published_at: "2026-03-04 20:13:49",
        created_at: "2026-03-04 20:13:49",
        home_position: "2"
    },
    {
        id: "6",
        title: "CPA Página Publicitaria Refrigeración",
        name: "CPA Página Publicitaria Refrigeración",
        slug: "cpa-publicitaria",
        category: "corporate",
        description: "Página publicitaria para el servicio de refrigeración de CPA.",
        blurb: "Página publicitaria para el servicio de refrigeración de CPA.",
        label: "CPA",
        large: false,
        stack: '["React", "SEO"]',
        cover_url: "img/cpa-pub/",
        live_url: "https://cpacontrol.com.ar/",
        featured: "0",
        order_index: "6",
        published_at: "2026-03-04 20:13:49",
        created_at: "2026-03-04 20:13:49",
        home_position: "3"
    }
];
