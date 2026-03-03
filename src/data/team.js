/**
 * @typedef {Object} TeamMember
 * @property {number} id
 * @property {string} name
 * @property {string} role
 * @property {string} desc
 * @property {string} image
 * @property {string} portfolioUrl
 * @property {string} accentColor
 */

/** @type {TeamMember[]} */
export const team = [
    {
        id: 1,
        name: 'Nombre Dev 1',
        role: 'Tech Lead · Full Stack',
        desc: 'Arquitectura de sistemas y desarrollo full stack. Especialista en soluciones escalables y decisiones técnicas de alto impacto.',
        image: '/logo_boss.png',
        portfolioUrl: '#',
        accentColor: 'var(--violet2)',
    },
    {
        id: 2,
        name: 'Nombre Dev 2',
        role: 'Frontend · UI/UX',
        desc: 'Interfaces de usuario y experiencia de producto. Del diseño al componente final, con obsesión por el detalle visual.',
        image: '/logo_ux_ui.png',
        portfolioUrl: '#',
        accentColor: 'var(--blue)',
    },
    {
        id: 3,
        name: 'Nombre Dev 3',
        role: 'Backend · Mobile',
        desc: 'APIs, bases de datos y aplicaciones móviles. Infraestructura sólida y lógica de negocio bien construida.',
        image: '/logo_developer.png',
        portfolioUrl: '#',
        accentColor: 'var(--red)',
    },
];
