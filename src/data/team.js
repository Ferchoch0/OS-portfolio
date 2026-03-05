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
        image: '/logo_ux_ui.png',
        portfolioUrl: 'https://github.com/Dieguinchis',
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
        image: '/logo_boss.png',
        portfolioUrl: 'https://github.com/Ferchoch0',
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
        image: '/logo_developer.png',
        portfolioUrl: 'https://github.com/Prominence673',
        githubUrl: 'https://github.com/Prominence673',
        linkedinUrl: '#',
        mail: 'mailto:info@example.com',
        accentColor: 'var(--blue)',
    },
];
