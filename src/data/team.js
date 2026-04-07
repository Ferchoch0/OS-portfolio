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
        role: 'Frontend',
        desc: 'Interfaces de usuario y experiencia de producto. Del diseño al componente final, con obsesión por el detalle visual.',
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
        desc: 'Arquitectura de sistemas y desarrollo full stack. Especialista en soluciones escalables y decisiones técnicas de alto impacto.',
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
        role: 'UI/UX · Full Stack',
        desc: 'APIs, bases de datos y aplicaciones móviles. Infraestructura sólida y lógica de negocio bien construida.',
        image: '/img/branding/logo_developer.png',
        portfolioUrl: 'https://portfolio-souz.netlify.app/',
        githubUrl: 'https://github.com/Prominence673',
        linkedinUrl: '#',
        mail: 'mailto:info@example.com',
        accentColor: 'var(--blue)',
    },
];
