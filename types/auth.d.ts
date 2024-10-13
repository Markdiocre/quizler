declare interface ILogin{
    username : string,
    password: string
}

declare interface IRegister {
    email: string
    first_name: string | undefined
    last_name: string | undefined
    username: string
    password: string
}
