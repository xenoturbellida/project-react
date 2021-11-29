import {Button} from "../../ui/Button";
import logo from './../../../assets/logos/Logo_Short.png'
import {Input} from "../../ui/Input";
import userPhoto from './../../../assets/user_photo.png'

export const Header = (props: {}) => {
    return (
        <>
            <Button onClick={() => {}} title='Коллекция' />
            <Button onClick={() => {}} title='Добавить' />
            <img src={logo} className='logoShort' alt='логотип'/>
            <Input onChange={() => {}} value='Поиск' type='text'/>
            <UserThumbnail image={userPhoto} />
        </>
    )
}

const UserThumbnail = (props: {image: string}) => {
    return (
        <img className='userThumbnail' src={props.image} />
    )
}
