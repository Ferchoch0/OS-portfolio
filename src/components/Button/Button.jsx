import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * @param {{ variant?: 'primary'|'text'|'ink'|'blue', href?: string, to?: string, onClick?: Function, children: React.ReactNode, className?: string }} props
 */
export default function Button({
    variant = 'primary',
    href,
    to,
    onClick,
    children,
    className = '',
    ...rest
}) {
    const cls = `${styles[variant]} ${className}`.trim();

    // Wrap children in span for z-index layering on primary/ink variants
    const content = (variant === 'primary' || variant === 'ink')
        ? <span>{children}</span>
        : children;

    if (to) {
        return <Link to={to} className={cls} {...rest}>{content}</Link>;
    }

    if (href) {
        return <a href={href} className={cls} {...rest}>{content}</a>;
    }

    return <button className={cls} onClick={onClick} {...rest}>{content}</button>;
}
