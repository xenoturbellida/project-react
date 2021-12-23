import logo from '../../assets/logos/Logo_Full.png';
import {RegisterForm} from "../../components/RegisterForm";
import { Anchor } from '../../components/ui/Anchor';

export const RegisterPage = () => {
    return (
        <div>
            <img src={logo} alt='' />
            <RegisterForm />
            <div>
                <Anchor href='/login'>
                    Войти
                </Anchor>
            </div>
        </div>
    )
}