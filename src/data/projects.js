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
        id: 1,
        name: 'Panel de control operativo',
        blurb: 'Sistema interno para gestión de operaciones, usuarios y reportes en tiempo real.',
        category: 'Sistema de Gestión',
        label: 'SYS',
        large: true,
        gradient: 'linear-gradient(135deg, var(--violet), #1a0a2e)',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Activo',
    },
    {
        id: 2,
        name: 'Plataforma inmobiliaria',
        blurb: 'Portal de propiedades con CRM y gestión de leads integrada.',
        category: 'Inmobiliaria',
        label: 'RE',
        large: false,
        gradient: 'linear-gradient(135deg, var(--blue), #0a1a3e)',
        tags: ['React', 'Express', 'MongoDB'],
        status: 'Activo',
    },
    {
        id: 3,
        name: 'Aplicación móvil',
        blurb: 'App nativa con sincronización offline y sistema central integrado.',
        category: 'Mobile',
        label: 'APP',
        large: false,
        gradient: 'linear-gradient(135deg, var(--red), #2a0505)',
        tags: ['React Native', 'SQLite'],
        status: 'En desarrollo',
    },
    {
        id: 4,
        name: 'OtterTask',
        blurb: 'Sistema de gestión de stock, ventas y compras para operaciones propias.',
        category: 'SaaS Propio',
        label: 'OT',
        large: false,
        gradient: 'linear-gradient(135deg, var(--blue), var(--violet))',
        tags: ['React', 'Node.js', 'Docker'],
        status: 'En desarrollo',
    },
    {
        id: 5,
        name: 'CPA Refrigeración',
        blurb: 'Sitio web corporativo para empresa de refrigeración industrial con ficha técnica digital.',
        category: 'Web Corporativa',
        label: 'CPA',
        large: true,
        gradient: 'linear-gradient(135deg, #1a3a5c, #0a1a2e)',
        tags: ['React', 'Vite'],
        status: 'Completado',
    },
    {
        id: 6,
        name: 'Automatizaciones n8n',
        blurb: 'Suite de automatizaciones para operaciones internas y notificaciones con clientes.',
        category: 'Automatización',
        label: 'N8N',
        large: false,
        gradient: 'linear-gradient(135deg, #2a4a2a, #0a1a0a)',
        tags: ['n8n', 'APIs', 'Webhooks'],
        status: 'Activo',
    },
];
