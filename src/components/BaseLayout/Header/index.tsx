import {Button} from "../../ui/Button";
import logo from './../../../assets/logos/Logo_Short.png'
import {Input} from "../../ui/Input";
import userPhoto from './../../../assets/user_photo.png'
import styles from './index.module.sass'

export const Header = (props: {}) => {
    return (
        <div className={styles.header}>
            <div className={styles.elementsBunch}>
                <Button onClick={() => {}} title='Коллекция' />
                <Button onClick={() => {}} title='Добавить' />
            </div>
            <img src={logo} className={styles.logoShort} alt='логотип'/>
            <div className={styles.elementsBunch}>
                <Input onChange={() => {}} value='Поиск' type='text'/>
                <UserThumbnail image={userPhoto} />
            </div>
        </div>
    )
}

const UserThumbnail = (props: {image: string}) => {
    return (
        <img className='userThumbnail' src={props.image} alt='Фотография пользователя'/>
    )
}
