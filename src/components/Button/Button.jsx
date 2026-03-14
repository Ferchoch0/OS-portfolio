import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * @param {{ variant?: string, subVariant?: string, href?: string, to?: string, onClick?: Function, children: React.ReactNode, className?: string }} props
 */
const Button = ({
    variant = 'primary',
    subVariant,
    href,
    to,
    onClick,
    children,
    className = '',
    ...rest
}) => {
    const variantCls = subVariant ? `${styles[variant]} ${styles[`${variant}_${subVariant}`]}` : styles[variant];
    const cls = `${variantCls} ${className}`.trim();

    // Wrap children in span for z-index layering on specific variants
    const content = (variant === 'primary' || variant === 'ink' || variant === 'cta' || variant === 'outlined' || variant === 'modal' || variant === 'modalPrimary' || variant === 'action')
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

export default memo(Button);
