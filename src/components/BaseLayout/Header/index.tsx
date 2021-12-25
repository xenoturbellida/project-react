import logo from './../../../assets/logos/Logo_Short.png'
import userPhoto from './../../../assets/user_photo.png';
import styles from './index.module.sass';
import collection_icon from "../../../assets/icons/tape_white.svg";
import plus_img from "../../../assets/icons/plus.svg";
import search_img from '../../../assets/icons/magnifier.svg';
import {LinkWithIcon} from "../../LinkWithIcon";
import classNames from "classnames/bind";


interface IHeader {
    pageName: 'favourite' | 'search' | 'details' | 'add'
}

const cx = classNames.bind(styles)

export const Header = (props: IHeader) => {
    const {pageName} = props;
    return (
        <div className={styles.header__wrapper}>
            <div className={styles.header}>
                <nav className={styles.bunch}>
                    <LinkWithIcon
                        icon={collection_icon}
                        href={'/'}
                        title='Коллекция'
                        theme={pageName === 'favourite'? 'primary': 'secondary'}
                    />
                    <LinkWithIcon
                        icon={plus_img}
                        href={'/'}
                        title='Добавить'
                        theme={pageName === 'add'? 'primary': 'secondary'}
                    />
                </nav>

                <a href='/' className={styles.logo}>
                    <img src={logo} alt="Логотип"/>
                </a>

                <div className={cx({actions: true, bunch: true})}>
                    <LinkWithIcon
                        icon={search_img}
                        title={'Поиск'}
                        href={'/'}
                        theme={pageName === ('search' || 'details')? 'primary': 'secondary'}
                    />
                    <img className="avatar" src={userPhoto} alt="Аватар"/>
                </div>
            </div>
        </div>
    )
}