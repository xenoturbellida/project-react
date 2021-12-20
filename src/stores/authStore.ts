import {MainStore} from "./mainStore";
import {action, computed, makeObservable, observable} from "mobx";
import {userCreditsMock} from "../mocks/usersMock";

const loginRequest = (address: string, data: {loginValue: string, password: string}) => {
    return new Promise((resolve, reject) => {
        if (userCreditsMock.loginValue === data.loginValue && userCreditsMock.password === data.password) {
            setTimeout(() => resolve({token: 'token1234'}), 1000);
        }
        else {
            setTimeout(() => reject(new Error('Incorrect login or password')), 1000);
        }
    });
}

export default class AuthStore {
    token: string;
    isLoading: boolean;
    isError: boolean;

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            token: observable,
            isLoading: observable,
            isError: observable,
            login: action,
            logout: action,
            isAuthorized: computed
        })

        this.token = '';
        this.isLoading = false;
        this.isError = false;
    };

    get isAuthorized() {
        return this.token !== '' && this.token !== null;
    };

    login = (loginValue: string, password: string, redirect: (url: '/' | '/favourite') => void) => {
        this.isLoading = true;
        this.isError = false;
        loginRequest('/address', {loginValue, password})
            .then((res) => {
                this.isLoading = false;
                this.token = (res as {token: string}).token;
                redirect('/favourite');
            })
            .catch((err) => {
                this.isLoading = false;
                this.isError = true;
                console.log(err);
            });
    };

    logout = () => {
        console.log('logout');
        this.token = '';
        this.isError = false;
    };
}