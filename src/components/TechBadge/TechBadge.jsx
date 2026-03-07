import React from 'react';
import styles from './TechBadge.module.css';

// SVG Definitions for technologies
const icons = {
    'React': () => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    'React Native': () => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    'PHP': () => (
        <svg viewBox="0 0 128 128" width="16" height="16">
            <path fill="#777BB4" d="M64,8C28.65,8,0,29.49,0,64s28.65,56,64,56s64-21.49,64-56S99.35,8,64,8z M46.47,74.52 h-6.52l-2.06,10.66H31.02L36.3,58.33h13.1c6.52,0,10.19,3.01,10.19,7.8C59.59,71.51,54.7,74.52,46.47,74.52z M81.82,85.18H74.9 l2.06-10.66v-16.2H66.21l-5.18,26.86h-6.88l5.18-26.86H52.4l-5.18,26.86h-6.88l10.37-53.72h6.88l-4.14,21.44h10.74l4.14-21.44h6.88 L81.82,85.18z M108.57,66.14c0,4.79-4.89,7.8-11.41,7.8h-6.52l-2.06,10.66h-6.88l10.37-53.72h13.1 C111.69,50.88,108.57,59.35,108.57,66.14z" />
            <path fill="#0E0D0D" d="M49.65,63.53c0-2.28-1.57-3.79-4.57-3.79h-4.81l-1.37,7.12h4.51C47.41,66.86,49.65,65.61,49.65,63.53z M101.4,63.53 c0-2.28-1.57-3.79-4.57-3.79H92.01l-1.37,7.12h4.51C99.16,66.86,101.4,65.61,101.4,63.53z" />
        </svg>
    ),
    'REST API': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00C7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    'Maps API': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#DB4437" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    'SEO': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F4B400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <polyline points="11 8 11 12 14 15" />
        </svg>
    ),
    'Vite': () => (
        <svg viewBox="0 0 32 32" width="16" height="16">
            <path fill="#FFD859" d="M31.056 4.31l-1.63 25.132c-0.1 1.543-1.127 2.45-2.603 2.502L16 32 5.176 31.944c-1.476-0.052-2.503-0.96-2.603-2.502L.944 4.31c-0.126-1.94 1.258-3.414 3.16-3.324L16 1.488l11.896-0.502c1.902-0.09 3.286 1.384 3.16 3.324z" />
            <path fill="#BD34FE" d="M16 2.417L30.134 4.88c1.37 0.238 2.3 1.637 2.103 3.018L30.636 29.43c-0.134 0.94-0.9 1.62-1.85 1.644l-11.758 0.298-1.028-0.01V2.417z" />
            <path fill="#FFD859" d="M22.016 11.233L16 4.54l-6.015 6.693-5.228 15.65h5.454l2.458-9.088h6.66l2.458 9.088h5.454l-5.226-15.65h0.001zM14 16.59l2-7.394 2 7.394h-4z" />
        </svg>
    ),
    'n8n': () => (
        <svg viewBox="0 0 256 256" width="16" height="16">
            <rect width="256" height="256" rx="60" fill="#FF6D5A" />
            <path fill="#ffffff" d="M174.5 125.7c0-26.6-21.6-48.2-48.2-48.2-26.6 0-48.2 21.6-48.2 48.2s21.6 48.2 48.2 48.2c26.6 0 48.2-21.6 48.2-48.2zm-48.2 30.2c-16.7 0-30.2-13.5-30.2-30.2 0-16.7 13.5-30.2 30.2-30.2 16.7 0 30.2 13.5 30.2 30.2 0 16.7-13.5 30.2-30.2 30.2z" />
        </svg>
    ),
    'Node.js': () => (
        <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#339933" d="M11.874 0L1.996 5.645V18.11L11.874 24l9.907-5.584V5.707L11.874 0zm0 1.265l8.775 4.931v11.45L11.874 22.75l-8.776-4.991V6.368L11.874 1.265zm0 3.737l-5.463 3.1v6.86L11.874 18.1l5.373-3.08v-6.93l-5.373-3.088zm-.016 1.24l4.238 2.45v5.184l-4.222 2.42-4.32-2.436V8.67l4.304-2.428z" />
        </svg>
    ),
    'SQLite': () => (
        <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#003B57" d="M12.004 0C5.374 0 0 2.238 0 5c0 2.508 4.417 4.604 10.147 4.957-.098-.31-.147-.643-.147-.98 0-1.841 2.239-3.333 5-3.333s5 1.492 5 3.333c0 .337-.05.67-.147.98C20.457 9.172 24 6.88 24 5c0-2.762-5.373-5-11.996-5zm-1.828 6.551C4.425 6.275 0 4.298 0 7c0 2.761 5.373 5 12 5 .439 0 .867-.024 1.286-.062a4.672 4.672 0 011.055-1.9c-1.284.174-2.61.272-3.951.272-4.965 0-9.155-1.332-9.155-2.977 0-.583.568-1.135 1.576-1.58A5.253 5.253 0 0010.176 6.55zm6.824.51c-1.657 0-3 1.045-3 2.334s1.343 2.333 3 2.333c1.657 0 3-1.044 3-2.333s-1.343-2.334-3-2.334zm-7 1.939C4.425 8.725 0 6.748 0 9.45c0 2.761 5.373 5 12 5 1.578 0 3.093-.186 4.484-.52.264-.523.59-1.002.977-1.424A10.89 10.89 0 0112 12.87c-4.965 0-9.155-1.332-9.155-2.977 0-.583.568-1.135 1.576-1.58C6.392 9.45 8.441 10.184 10 10.18zm8 .408v6.791c1.657 0 3-1.044 3-2.333v-6.791c0 1.289-1.343 2.333-3 2.333zm-8 1.53c-5.751 0-10.176-1.977-10.176-4.45c0 2.761 5.373 5 12 5 2.193 0 4.25-.371 6-1.02V13.6c-1.294.52-2.978.857-4.824.857-1.004 0-1.954-.08-2.824-.234zm0 2.45c-5.751 0-10.176-1.977-10.176-4.45c0 2.761 5.373 5 12 5 2.664 0 5.121-.545 7-1.48v-2.12c-1.636.96-3.957 1.55-6.52 1.55-1.004 0-1.954-.08-2.824-.234z" />
        </svg>
    ),
    'WebSocket': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
            <path d="M4 12v4a2 2 0 0 0 2 2h4l2 3 2-3h4a2 2 0 0 0 2-2v-4" />
            <path d="M12 8v4" />
            <path d="M8 12h8" />
        </svg>
    ),
    'Offline': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#607D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
    ),
    'Email': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    'PDF': () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18v-6" />
            <path d="M9 15h6" />
        </svg>
    ),
};

// Fallback icon
const DefaultIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

export default function TechBadge({ tech }) {
    const Icon = icons[tech] || DefaultIcon;

    return (
        <span className={styles.techBadge}>
            <span className={styles.iconWrapper}>
                <Icon />
            </span>
            <span>{tech}</span>
        </span>
    );
}
