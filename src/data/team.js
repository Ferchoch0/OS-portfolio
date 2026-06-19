/**
 * @typedef {Object} TeamMember
 * @property {number} id
 * @property {string} name
 * @property {string} role
 * @property {string} desc
 * @property {string} image
 * @property {string} portfolioUrl
 * @property {string} githubUrl
 * @property {string} linkedinUrl
 * @property {string} mail
 * @property {string} accentColor
 */

/** @type {TeamMember[]} */
export const team = [
    {
        id: 1,
        name: 'Dieguinchis',
        role: 'Lider de Frontend',
        desc: 'Lidera el área de interfaces y experiencia de producto. Coordina diseño visual, sistemas de componentes y la colaboración con diseñadores y especialistas UX para cada proyecto.',
        image: '/img/branding/logo_ux_ui.png',
        portfolioUrl: 'https://portfolio-diego-colmenares.netlify.app/',
        githubUrl: 'https://github.com/Dieguinchis',
        linkedinUrl: '#',
        mail: 'mailto:info@example.com',
        accentColor: 'var(--red)',
    },
    {
        id: 2,
        name: 'Ferchoch0',
        role: 'Tech Lead · Full Stack',
        desc: 'Define la visión técnica y la arquitectura de cada solución. Supervisa el stack completo, gestiona colaboradores externos y toma las decisiones de ingeniería que escalan el negocio.',
        image: '/img/branding/logo_boss.png',
        portfolioUrl: 'https://fern-portfolio-v2.netlify.app/',
        githubUrl: 'https://github.com/Ferchoch0',
        linkedinUrl: '#',
        mail: 'mailto:info@example.com',
        accentColor: 'var(--violet2)',
    },

    {
        id: 3,
        name: 'Prominence',
        role: 'Lider de Backend',
        desc: 'Responsable de APIs e infraestructura cloud. Coordina la lógica de negocio, integraciones de terceros y la red de especialistas técnicos del equipo.',
        image: '/img/branding/logo_developer.png',
        portfolioUrl: 'https://portfolio-souz.netlify.app/',
        githubUrl: 'https://github.com/Prominence673',
        linkedinUrl: '#',
        mail: 'mailto:info@example.com',
        accentColor: 'var(--blue)',
    },
];
