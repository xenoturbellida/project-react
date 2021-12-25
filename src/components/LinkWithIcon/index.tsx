import classNames from "classnames/bind";
import styles from './index.module.sass';

interface ILinkWithIcon {
    icon: any,
    title: string,
    href: string,
    theme?: 'primary' | 'secondary'
}

const cx = classNames.bind(styles)

export const LinkWithIcon = (props: ILinkWithIcon) => {
    const {icon, title, href, theme = 'primary'} = props;
    return (
        <a
            href={href}
            className={cx({
                link: true,
                primary: theme === 'primary',
                secondary: theme === 'secondary'
            })}
        >
            <img className={styles.icon} src={icon} alt={title}/>
            {title}
        </a>
    )
}