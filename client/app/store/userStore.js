import { configure, makeAutoObservable } from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._cart = {}
        makeAutoObservable(this)
    }

    setIsAuth (bool) {
        this._isAuth =  bool
    }

    setUser (user) {
        this._user = user
    }

    setCart (cart) {
        this._cart = cart
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get cart() {
        return this._cart
    }
} 

configure({
    useProxies: "never"
})