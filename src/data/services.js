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
    desc: 'Desarrollo de páginas web y sistemas a medida: paneles de control, plataformas de gestión interna y sistemas complejos construidos para la operación específica de tu empresa. Sin templates, sin atajos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    soon: false,
  },
  {
    id: 1,
    num: '02',
    name: 'Aplicaciones Mobile',
    desc: 'Desarrollo de apps nativas y multiplataforma para iOS y Android. Rendimiento real, experiencia de usuario impecable y publicación en stores.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    soon: false,
  },
  {
    id: 2,
    num: '03',
    name: 'Páginas Web & Sol. Inmobiliarias',
    desc: 'Desarrollo de todo tipo de páginas web, desde sitios institucionales hasta software inmobiliario: portales de propiedades, CRM y automatización de captación de leads.',
    tags: ['CRM', 'Listings', 'Integraciones'],
    soon: false,
  },
  {
    id: 3,
    num: '04',
    name: 'Web Apps & Productos SaaS',
    desc: 'Desarrollo e innovación de nuestros propios productos. Creamos plataformas digitales escalables diseñadas para optimizar la gestión y resolver problemas reales del mercado.',
    tags: ['SaaS', 'MVP', 'Deploy', 'AWS'],
    soon: false,
  },
  {
    id: 4,
    num: '05',
    name: 'Soporte & Mantenimiento',
    desc: 'Mantenimiento web y soporte técnico continuo para aplicaciones del sistema Otter.ly, así como para aplicaciones de terceros. Actualizaciones, monitoreo 24/7 y evolución de tu stack.',
    tags: ['Retainer', 'Monitoreo', 'Updates', 'SLA'],
    soon: false,
  },
  {
    id: 5,
    num: '06',
    name: 'Automatización con IA',
    desc: 'Automatización de procesos empresariales con inteligencia artificial: flujos inteligentes con n8n, integración entre sistemas y eliminación de tareas repetitivas.',
    tags: ['n8n', 'Webhooks', 'AI Flows', 'APIs'],
    soon: false,
  },
];
