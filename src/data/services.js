import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { HiOutlineCpuChip } from 'react-icons/hi2';

/**
 * @typedef {Object} Service
 * @property {number} id
 * @property {string} num
 * @property {string} name
 * @property {string} desc
 * @property {string[]} tags
 * @property {boolean} soon
 */

/** Icon mapping per service id */
export const serviceIcons = {
  0: HiOutlineCodeBracket,
  1: HiOutlineDevicePhoneMobile,
  2: HiOutlineBuildingOffice2,
  3: HiOutlineRocketLaunch,
  4: HiOutlineWrenchScrewdriver,
  5: HiOutlineCpuChip,
};

/** @type {Service[]} */
export const services = [
  {
    id: 0,
    num: '01',
    name: 'Sistemas Web a Medida',
    desc: 'Paneles de control, gestión interna y plataformas complejas construidas para tu operación específica. Sin templates, sin atajos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    soon: false,
  },
  {
    id: 1,
    num: '02',
    name: 'Aplicaciones Mobile',
    desc: 'Apps nativas y multiplataforma con foco en performance y experiencia de usuario real, para iOS y Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    soon: false,
  },
  {
    id: 2,
    num: '03',
    name: 'Soluciones Inmobiliarias',
    desc: 'Portales, gestores de propiedades y herramientas digitales para el sector real estate. CRM, listings y automatización de leads.',
    tags: ['CRM', 'Listings', 'Integraciones'],
    soon: false,
  },
  {
    id: 3,
    num: '04',
    name: 'Web Apps Publicadas',
    desc: 'Productos digitales listos para el mercado: desde MVP hasta lanzamiento y mantenimiento continuo. Tu idea, nuestra ejecución.',
    tags: ['SaaS', 'MVP', 'Deploy', 'AWS'],
    soon: false,
  },
  {
    id: 4,
    num: '05',
    name: 'Mantenimiento Mensual',
    desc: 'Soporte continuo, actualizaciones y evolución de tus sistemas. Tu stack siempre estable, seguro y al día. Retainer mensual sin sorpresas.',
    tags: ['Retainer', 'Monitoreo', 'Updates', 'SLA'],
    soon: false,
  },
  {
    id: 5,
    num: '06',
    name: 'Automatización e IA',
    desc: 'Flujos inteligentes, integraciones entre sistemas y automatización de procesos operativos con n8n y herramientas de IA.',
    tags: ['n8n', 'Webhooks', 'AI Flows', 'APIs'],
    soon: true,
  },
];
