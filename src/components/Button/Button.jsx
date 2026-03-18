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

    // Content logic based on variant
    let content;
    if (variant === 'uiverse') {
        content = (
            <>
                <span className={styles.uiverse_text}>{children}</span>
                <span className={styles.uiverse_glow}></span>
                <span className={styles.uiverse_border_tl}></span>
                <span className={styles.uiverse_border_tr}></span>
                <span className={styles.uiverse_border_bl}></span>
                <span className={styles.uiverse_border_br}></span>
            </>
        );
    } else if (variant === 'primary' || variant === 'ink' || variant === 'cta' || variant === 'outlined' || variant === 'modal' || variant === 'modalPrimary' || variant === 'action') {
        content = <span>{children}</span>;
    } else {
        content = children;
    }

    if (to) {
        return <Link to={to} className={cls} {...rest}>{content}</Link>;
    }

    if (href) {
        return <a href={href} className={cls} {...rest}>{content}</a>;
    }

    return <button className={cls} onClick={onClick} {...rest}>{content}</button>;
}

export default memo(Button);
